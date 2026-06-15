#!/bin/bash
# Run the full next-recipe-batch pipeline in one shot: wait for a candidate file,
# queue it into the gen meta + image input, source images, then generate recipes.
# Emits "NEXT BATCH DONE" when finished. Usage: runNextBatch.sh /tmp/gen-candidates4.json
set -uo pipefail
cd /Users/justinsuo/waivy
CAND="${1:-/tmp/gen-candidates4.json}"

# 1) wait for the candidate pool to exist + be non-trivial
until [ -f "$CAND" ] && [ "$(python3 -c "import json;print(len(json.load(open('$CAND'))))" 2>/dev/null || echo 0)" -gt 0 ]; do
  sleep 5
done

# 2) queue candidates into meta + image-fetch input (dedupe ids)
python3 - "$CAND" <<'PY'
import json, re, sys
cand = json.load(open(sys.argv[1]))
meta = json.load(open("/tmp/gen-recipes-meta.json"))
ids = set(m["id"] for m in meta)
def slug(s): return "gen-" + re.sub(r'-+','-', re.sub(r'[^a-z0-9]+','-', s.lower())).strip('-')[:48]
added = []
for c in cand:
    sid = slug(c["name"])
    while sid in ids: sid += "x"
    ids.add(sid)
    added.append({"id": sid, "name": c["name"], "cuisine": c.get("cuisine",""), "mealType": c.get("mealType","dinner")})
meta += added
json.dump(meta, open("/tmp/gen-recipes-meta.json","w"))
json.dump([{"id":m["id"],"name":m["name"],"cuisine":m.get("cuisine","")} for m in meta], open("/tmp/recipes-need-images.json","w"))
print(f"queued {len(added)} | meta total {len(meta)}")
PY

# 3) images, then 4) generation
python3 scripts/fetchRecipePhotosFree.py
TOTAL=$(python3 -c "import json;print(len(json.load(open('/tmp/gen-recipes-meta.json'))))")
GEN_CAP=$TOTAL python3 scripts/genRecipesAI.py

echo "NEXT BATCH DONE"
