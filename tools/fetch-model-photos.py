"""
Download the 18 model photos described in design/MODEL-SHOT-LIST.md.

Source: Pexels. Free licence, commercial use allowed. Crediting is not legally
required but we write public/images/models/CREDITS.md anyway.

Needs a free Pexels API key. Get one in about a minute at
https://www.pexels.com/api/  then put it in .env as PEXELS_API_KEY

Run from the project root:   python tools/fetch-model-photos.py
Re-run one slot only:        python tools/fetch-model-photos.py home-hero
Pick a different candidate:  python tools/fetch-model-photos.py home-hero --pick 3
"""
import os, sys, json, argparse, urllib.request, urllib.parse, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "images" / "models"
API = "https://api.pexels.com/v1/search"

# slot id -> (search query, orientation, alt text)
# Queries follow design/MODEL-SHOT-LIST.md. Orientation matches the frame the
# layout needs, so no photo has to be stretched or badly cropped.
SLOTS = {
    "home-hero": (
        "woman holding skincare box product fair skin studio", "portrait",
        "A woman holding a Skin Theory Bee Wash carton at shoulder height"),
    "home-problem": (
        "close up woman cheek skin texture natural light", "square",
        "Close crop of a woman's cheek and jaw in soft daylight"),
    "home-routine": (
        "hands lathering soap bar washing basin", "portrait",
        "Wet hands working a bar of soap into a thick lather over a basin"),
    "home-closing": (
        "calm woman portrait soft daylight plain background", "landscape",
        "A woman looking calmly past the camera in soft daylight"),
    "shop-sets": (
        "woman holding two skincare boxes in hands", "landscape",
        "A woman holding two Skin Theory cartons, one in each hand"),

    "product-bee-wash-hold": (
        "woman holding skincare bottle beside her face", "portrait",
        "A woman holding the Bee Wash carton upright beside her face"),
    "product-bee-wash-use": (
        "woman washing face foam cleanser cheeks", "portrait",
        "A woman massaging cleanser lather onto her damp cheeks, eyes closed"),
    "product-coco-kojic-gluta-soap-hold": (
        "woman holding soap bar box in palm", "portrait",
        "A woman holding the Coco Kojic Gluta Soap carton flat in one palm"),
    "product-coco-kojic-gluta-soap-use": (
        "soap bar on arm lather skin", "portrait",
        "A bar of soap rubbed along a forearm, building a creamy lather"),
    "product-gluta-soya-soap-hold": (
        "woman holding soap box at chest height", "portrait",
        "A woman holding the Gluta Soya Soap carton at collarbone height"),
    "product-gluta-soya-soap-use": (
        "soap bar between wet hands lather", "portrait",
        "A bar of soap between two wet hands as the lather builds"),
    "product-salicylic-soap-hold": (
        "woman holding soap box plain wall", "portrait",
        "A woman holding the Salicylic Soap carton against a plain wall"),
    "product-salicylic-soap-use": (
        "woman applying foam forehead nose mirror", "portrait",
        "Lather being pressed onto the forehead and nose in mirror light"),
    "product-niacinamide-serum-hold": (
        "woman holding small serum box fingertips", "portrait",
        "A woman holding the small Niacinamide Serum carton in her fingertips"),
    "product-niacinamide-serum-use": (
        "serum dropper above cheek face skincare", "portrait",
        "A serum dropper above a cheek with one bead of serum at the tip"),

    "about-founder": (
        "woman seated portrait plain interior hands visible", "portrait",
        "The founder seated in a plain interior, hands resting in her lap"),
    "theory-patch": (
        "patch test inner forearm skincare fingertip", "landscape",
        "A small dab of product applied to an inner forearm with one fingertip"),
    "theory-panel": (
        "two women standing together relaxed daylight", "landscape",
        "Two women standing side by side in daylight"),
}


def read_key():
    k = os.environ.get("PEXELS_API_KEY")
    if not k:
        env = ROOT / ".env"
        if env.exists():
            for line in env.read_text(encoding="utf-8").splitlines():
                if line.strip().startswith("PEXELS_API_KEY="):
                    k = line.split("=", 1)[1].strip().strip('"').strip("'")
    if not k:
        sys.exit(
            "No Pexels API key found.\n\n"
            "  1. Go to https://www.pexels.com/api/ and sign up. It is free.\n"
            "  2. Copy your key.\n"
            "  3. Open the file called .env in this project and add this line:\n"
            "       PEXELS_API_KEY=your_key_here\n"
            "  4. Run this again.\n")
    return k


def search(query, orientation, key, per_page=15):
    url = API + "?" + urllib.parse.urlencode(
        {"query": query, "orientation": orientation,
         "per_page": per_page, "size": "large"})
    req = urllib.request.Request(url, headers={"Authorization": key})
    with urllib.request.urlopen(req, timeout=45) as r:
        return json.load(r).get("photos", [])


def download(url, dest):
    req = urllib.request.Request(url, headers={"User-Agent": "skin-theory-site/1.0"})
    with urllib.request.urlopen(req, timeout=90) as r:
        dest.write_bytes(r.read())


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("slots", nargs="*", help="slot ids to fetch (default: all)")
    ap.add_argument("--pick", type=int, default=1,
                    help="which search result to use, 1 = best match")
    args = ap.parse_args()

    key = read_key()
    OUT.mkdir(parents=True, exist_ok=True)
    wanted = args.slots or list(SLOTS)

    credits_path = OUT / "credits.json"
    credits = json.loads(credits_path.read_text(encoding="utf-8")) if credits_path.exists() else {}

    for slot in wanted:
        if slot not in SLOTS:
            print(f"  ! unknown slot: {slot}")
            continue
        query, orientation, alt = SLOTS[slot]
        photos = search(query, orientation, key)
        if not photos:
            print(f"  ! nothing found for {slot}  ({query})")
            continue
        photo = photos[min(args.pick, len(photos)) - 1]
        dest = OUT / f"{slot}.jpg"
        download(photo["src"]["large2x"], dest)
        credits[slot] = {
            "photographer": photo["photographer"],
            "photographer_url": photo["photographer_url"],
            "pexels_url": photo["url"],
            "pexels_id": photo["id"],
            "query": query,
            "alt": alt,
        }
        print(f"  ok  {slot:40} {photo['photographer']:22} {dest.stat().st_size // 1024} KB")

    credits_path.write_text(json.dumps(credits, indent=2, ensure_ascii=False), encoding="utf-8")

    lines = ["# Model photo credits", "",
             "Photos from Pexels, used under the Pexels licence, which allows",
             "commercial use. Crediting is not legally required but we do it anyway.", ""]
    for slot, c in sorted(credits.items()):
        lines.append(f"- **{slot}** - [{c['photographer']}]({c['photographer_url']}) "
                     f"on [Pexels]({c['pexels_url']})")
    (OUT / "CREDITS.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    print(f"\n{len(credits)} of {len(SLOTS)} slots filled. Credits written.")


if __name__ == "__main__":
    main()
