#!/usr/bin/env python3
"""Validate every recipe image the way expo-image loads it: browser UA, NO
Referer, follow redirects. Domain-aware concurrency — URLs from the same host
are checked SEQUENTIALLY with a delay (so we never rate-limit ourselves and get
false failures), while different hosts run in parallel. A host that still 429s
after gentle, spaced access is one that will 429 the app too (e.g. Wikimedia) →
a real failure. Writes failing recipes to /tmp/image-fails2.json."""
import json, urllib.request, time, threading
from collections import defaultdict
from concurrent.futures import ThreadPoolExecutor
from urllib.parse import urlparse

rows = json.load(open("/tmp/all-urls-current.json"))
url_to_rows = defaultdict(list)
for r in rows:
    if r["url"]:
        url_to_rows[r["url"]].append(r)

# bucket unique URLs by host
by_host = defaultdict(list)
for u in url_to_rows:
    try:
        host = urlparse(u).hostname or "?"
    except Exception:
        host = "?"
    by_host[host].append(u)
print(f"recipes {len(rows)} | unique urls {len(url_to_rows)} | hosts {len(by_host)}", flush=True)

UA = {"User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17 Safari/605.1.15"}
# jsDelivr is our own CDN (already self-hosted + verified) — skip to save time.
SKIP_HOSTS = {"cdn.jsdelivr.net"}

def check_once(u):
    """Returns 'ok', 'ratelimit', or 'fail'."""
    try:
        r = urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=15)
        ct = r.headers.get("Content-Type", "")
        chunk = r.read(2048)
        if r.status == 200 and ct.startswith("image") and len(chunk) > 500:
            return "ok"
        return "fail"
    except urllib.error.HTTPError as e:
        if e.code == 429:
            return "ratelimit"
        return "fail"
    except Exception:
        return "net"

def validate(u):
    # up to 3 tries, backing off on rate-limit / transient network errors
    delay = 1.0
    for attempt in range(3):
        res = check_once(u)
        if res == "ok":
            return True
        if res == "fail":
            return False
        # ratelimit or net → back off and retry
        time.sleep(delay)
        delay *= 2
    return False  # still bad after gentle, spaced retries → real failure

lock = threading.Lock()
bad_urls = []
done = [0]
total = len(url_to_rows)

def work_host(host_urls):
    host, urls = host_urls
    if host in SKIP_HOSTS:
        with lock:
            done[0] += len(urls)
        return
    for u in urls:
        ok = validate(u)
        with lock:
            done[0] += 1
            if not ok:
                bad_urls.append(u)
            if done[0] % 250 == 0:
                json.dump(bad_urls, open("/tmp/bad-urls2.json", "w"))
                print(f"  {done[0]}/{total}  bad {len(bad_urls)}", flush=True)
        time.sleep(0.3)  # gentle within a host

with ThreadPoolExecutor(max_workers=24) as ex:
    list(ex.map(work_host, by_host.items()))

# map failing urls -> failing recipes
fails = []
seen = set()
for u in bad_urls:
    for r in url_to_rows[u]:
        if r["id"] not in seen:
            seen.add(r["id"]); fails.append(r)
json.dump({"bad_urls": bad_urls, "rows": fails}, open("/tmp/image-fails2.json", "w"))
print(f"DONE: {len(bad_urls)} failing urls -> {len(fails)} recipes show an emoji", flush=True)
# domain breakdown of failures
from collections import Counter
dc = Counter(urlparse(u).hostname for u in bad_urls)
print("failing domains:", dc.most_common(15), flush=True)
