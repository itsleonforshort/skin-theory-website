# Build assembled 3D product boxes straight from the printed die-line panels.
# The print on the render IS the print from the PDF, so it matches exactly.
import os, numpy as np, pymupdf
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

BRAND = r"C:\Users\AMD\Desktop\LEO PERSONAL FILES\vscode-prte\brand"
OUT   = r"C:\Users\AMD\Desktop\LEO PERSONAL FILES\vscode-prte\public\images\products"
os.makedirs(OUT, exist_ok=True)

# pdf file, slug, (front, side, top) page indexes (0-based), box w/h/d in points
SPEC = [
 ("Kojic Gluta Soap Karton.pdf",  "coco-kojic-gluta-soap", (0, 4, 1), (252, 172,  86)),
 ("Gluta Soya Soap Karton.pdf",   "gluta-soya-soap",       (0, 4, 1), (252, 172,  86)),
 ("Salicylic Soap Karton.pdf",    "salicylic-soap",        (0, 4, 1), (252, 172,  86)),
 ("Bee Wash Karton.pdf",          "bee-wash",              (0, 3, 4), (122, 460, 122)),
 ("Niacinamide Serum Karton.pdf", "niacinamide-serum",     (0, 2, 4), ( 88, 270,  88)),
]

def panel(doc, idx, dpi=300):
    p = doc[idx].get_pixmap(dpi=dpi)
    return Image.frombytes("RGB", (p.width, p.height), p.samples).convert("RGBA")

def coeffs(dst, src):
    m = []
    for (dx, dy), (sx, sy) in zip(dst, src):
        m.append([dx, dy, 1, 0, 0, 0, -sx*dx, -sx*dy])
        m.append([0, 0, 0, dx, dy, 1, -sy*dx, -sy*dy])
    A = np.array(m, dtype=float)
    B = np.array(src, dtype=float).reshape(8)
    return np.linalg.solve(A.T @ A, A.T @ B)

def face(canvas, img, quad, shade=1.0):
    w, h = img.size
    src = [(0, 0), (w, 0), (w, h), (0, h)]
    c = coeffs(quad, src)
    warped = img.transform(canvas.size, Image.PERSPECTIVE, c, resample=Image.BICUBIC)
    if shade != 1.0:
        warped = ImageEnhance.Brightness(warped).enhance(shade)
    mask = Image.new("L", canvas.size, 0)
    ImageDraw.Draw(mask).polygon([tuple(p) for p in quad], fill=255)
    mask = mask.filter(ImageFilter.GaussianBlur(0.6))
    canvas.paste(warped, (0, 0), mask)
    return [tuple(p) for p in quad]

for pdf, slug, (fi, si, ti), (bw, bh, bd) in SPEC:
    doc = pymupdf.open(os.path.join(BRAND, pdf))
    front, side, top = panel(doc, fi), panel(doc, si), panel(doc, ti)
    # the top flap is printed upside down on the die-line so it reads right
    # once the carton is folded shut
    top = top.transpose(Image.FLIP_TOP_BOTTOM)

    S = 1500 / max(bw + bd * 0.55, bh)      # fit the long side to ~1500px
    W, H = bw * S, bh * S
    D  = bd * S * 0.52                       # foreshortened depth
    ky = D * 0.46                            # how much the far edge rises

    PAD = 120
    CW = int(W + D + PAD * 2)
    CH = int(H + ky + PAD * 2 + 90)          # extra room for the shadow
    X, Y = PAD, PAD + ky

    canvas = Image.new("RGBA", (CW, CH), (0, 0, 0, 0))

    qf = [(X, Y), (X + W, Y), (X + W, Y + H), (X, Y + H)]
    qs = [(X + W, Y), (X + W + D, Y - ky), (X + W + D, Y + H - ky), (X + W, Y + H)]
    qt = [(X, Y), (X + W, Y), (X + W + D, Y - ky), (X + D, Y - ky)]

    # contact shadow on the ground, under the box
    sh = Image.new("RGBA", (CW, CH), (0, 0, 0, 0))
    ImageDraw.Draw(sh).polygon(
        [(X + 14, Y + H + 8), (X + W + 10, Y + H + 8),
         (X + W + D + 4, Y + H - ky + 14), (X + D - 8, Y + H - ky + 14)],
        fill=(26, 22, 18, 96))
    canvas.alpha_composite(sh.filter(ImageFilter.GaussianBlur(26)))

    face(canvas, top,   qt, shade=1.03)   # lit from above
    face(canvas, front, qf, shade=1.00)
    face(canvas, side,  qs, shade=0.93)   # right side falls into shade

    # crisp edges where the faces meet
    d = ImageDraw.Draw(canvas)
    for a, b, col in [(qf[1], qf[2], (0, 0, 0, 40)),          # front|side
                      (qt[0], qt[1], (255, 255, 255, 70)),    # top|front highlight
                      (qt[1], qt[2], (0, 0, 0, 26))]:         # top|side
        d.line([a, b], fill=col, width=2)
    d.polygon(qf, outline=(0, 0, 0, 22))
    d.polygon(qs, outline=(0, 0, 0, 30))

    bbox = canvas.getbbox()
    canvas = canvas.crop(bbox)
    p = os.path.join(OUT, slug + ".png")
    canvas.save(p, optimize=True)
    print(f"{slug:24} {canvas.width}x{canvas.height}  {os.path.getsize(p)//1024} KB")
