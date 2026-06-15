#!/usr/bin/env python3
"""Generate a fresh batch of famous-dish candidates from deep-cut regional
cuisines + dish categories not yet well covered, deduped against the (now large)
catalog. Writes new candidates to /tmp/gen-candidates2.json."""
import os, json, urllib.request, re, threading
from concurrent.futures import ThreadPoolExecutor

KEY = os.environ["ANTHROPIC_API_KEY"]
existing = set(json.load(open("/tmp/existing-names2.json")))
def norm(s): return re.sub(r'[^a-z0-9]', '', s.lower())
existing_norm = set(norm(x) for x in existing)
# also dedupe against prior candidate pool
try:
    for c in json.load(open("/tmp/gen-recipes-meta.json")):
        existing_norm.add(norm(c["name"]))
except Exception:
    pass

REGIONS = ["Yunnan","Fujian","Shanghainese","Hakka","Goan","Kashmiri","Rajasthani","Chettinad","Maharashtrian","Assamese","Balinese","Javanese","Padang","Isaan Thai","Northern Thai","Hue Vietnamese","Visayan","Bicolano","Sardinian","Ligurian","Piedmontese","Umbrian","Galician","Valencian","Norman","Breton","Saxon","Swabian","Tyrolean","Transylvanian","Macedonian","Albanian","Cypriot","Druze","Kurdish","Berber","Zanzibari","Cape Malay","Antillean","Guyanese","Trinidadian","Belizean","Nicaraguan","Honduran","Paraguayan"]
CATS = ["regional dumpling specialties","regional savory pastries","heritage grandmother recipes","traditional festival foods","regional breakfast specialties worldwide","artisan bread styles worldwide","regional pickle and condiment dishes","traditional porridge and gruel dishes","heritage bean and legume stews","regional grilled-meat specialties","traditional cold noodle dishes","regional seafood stews"]

def ask(topic, n):
    prompt = (f"List {n} well-known, real, specific {topic}. Each a concrete named dish "
              "(e.g. 'Mapo Tofu', not 'a stir-fry'). Return ONLY a JSON array of "
              '{"name": str, "cuisine": str, "mealType": breakfast|lunch|dinner|snack}. No commentary.')
    body = json.dumps({"model":"claude-haiku-4-5-20251001","max_tokens":3000,"messages":[{"role":"user","content":prompt}]}).encode()
    req = urllib.request.Request("https://api.anthropic.com/v1/messages", data=body,
        headers={"x-api-key":KEY,"anthropic-version":"2023-06-01","content-type":"application/json"})
    try:
        d=json.load(urllib.request.urlopen(req,timeout=120))
        txt="".join(b.get("text","") for b in d.get("content",[]))
        s=txt.find("["); e=txt.rfind("]")
        return json.loads(txt[s:e+1])
    except Exception:
        return []

topics = [f"iconic {r} dishes" for r in REGIONS] + CATS
cands = {}
lock = threading.Lock()
def work(t):
    n = 22 if t.startswith("iconic") else 26
    for r in ask(t, n):
        if isinstance(r, dict) and r.get("name"):
            k = norm(r["name"])
            if len(k) > 2 and k not in existing_norm:
                with lock:
                    cands.setdefault(k, {"name": r["name"], "cuisine": r.get("cuisine",""), "mealType": r.get("mealType","dinner")})

with ThreadPoolExecutor(max_workers=8) as ex:
    list(ex.map(work, topics))

new = list(cands.values())
json.dump(new, open("/tmp/gen-candidates5.json","w"))
print("NEW candidates after dedupe vs catalog:", len(new))
from collections import Counter
print("by mealType:", dict(Counter(x["mealType"] for x in new)))
