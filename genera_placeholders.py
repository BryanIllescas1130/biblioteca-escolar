"""
genera_placeholders.py
Genera imágenes placeholder grises para cada libro hasta
que se tengan las portadas reales.

Uso: python3 genera_placeholders.py
Requiere: Pillow  (pip install Pillow)
"""

from PIL import Image, ImageDraw, ImageFont
import os

libros = [
    ("AUT-01", "¿Amar o\ndepender?"),
    ("AUT-02", "Enamórate\nde ti"),
    ("AUT-03", "20 pasos hacia\nadelante"),
    ("AUT-04", "El rinoceronte I"),
    ("AUT-05", "El rinoceronte II"),
    ("CIE-01", "La teoría\ndel todo"),
    ("CIE-02", "El libro de\nlos porqués"),
    ("CLA-01", "La divina\ncomedia"),
    ("CLA-02", "Don Quijote\nde la Mancha"),
    ("CLA-03", "El señor\npresidente"),
    ("JUV-01", "Guillero, el niño\nque hablaba\ncon el mar"),
    ("JUV-02", "La habitación\nde la memoria"),
    ("JUV-03", "Los chimpancés\nmiran a los ojos"),
    ("JUV-04", "La caja de\nlos sueños"),
    ("JUV-05", "Acualaxia"),
    ("JUV-06", "Las chicas\nde alambre"),
    ("JUV-07", "El maestro\ny el robot"),
    ("JUV-08", "Eleanor & Park"),
    ("MIS-01", "Dr. Jekyll\ny Mr. Hyde"),
    ("NAR-01", "El amor en los\ntiempos del cólera"),
    ("NAR-02", "El coronel no tiene\nquien le escriba"),
    ("NAR-03", "Leyendas de\nGuatemala"),
    ("NAR-04", "El tamagás y\notros cuentos"),
    ("NAR-05", "El animal\nde humo"),
    ("NAR-06", "Platero y Yo"),
    ("NAR-07", "Guerra sin fin\ny otros relatos"),
    ("VAR-01", "El jarrón azul"),
    ("VAR-02", "Pasión Fútbol"),
]

colores = {
    "AUT": ("#5c3d7a", "#f0ecf7"),
    "CIE": ("#1a5c5c", "#e8f5f5"),
    "CLA": ("#7a4a00", "#fef3e0"),
    "JUV": ("#1a4e2a", "#e8f5ec"),
    "MIS": ("#4a1a4a", "#f5e8f5"),
    "NAR": ("#1a3a5c", "#e8f0f8"),
    "VAR": ("#5c4a1a", "#f8f3e8"),
}

os.makedirs("images/portadas", exist_ok=True)

W, H = 400, 600

for codigo, titulo in libros:
    cat = codigo[:3]
    color_texto, color_fondo = colores.get(cat, ("#333", "#f0f0f0"))

    img = Image.new("RGB", (W, H), color_fondo)
    draw = ImageDraw.Draw(img)

    # Borde superior de color
    draw.rectangle([0, 0, W, 8], fill=color_texto)
    # Borde inferior
    draw.rectangle([0, H-8, W, H], fill=color_texto)
    # Marco
    draw.rectangle([16, 24, W-16, H-24], outline=color_texto, width=2)

    # Código
    draw.text((W//2, 80), codigo, fill=color_texto, anchor="mm")

    # Línea decorativa
    draw.rectangle([60, 110, W-60, 112], fill=color_texto)

    # Emoji libro
    try:
        draw.text((W//2, 220), "📚", anchor="mm", fill=color_texto)
    except Exception:
        draw.ellipse([W//2-30, 190, W//2+30, 250], outline=color_texto, width=2)

    # Título
    lineas = titulo.split("\n")
    y_start = 300
    for linea in lineas:
        draw.text((W//2, y_start), linea, fill=color_texto, anchor="mm")
        y_start += 32

    # Pie
    draw.text((W//2, H-50), "Biblioteca Escolar", fill=color_texto, anchor="mm")
    draw.text((W//2, H-34), "Insertar portada real", fill="#999999", anchor="mm")

    ruta = f"images/portadas/{codigo}.jpg"
    img.save(ruta, "JPEG", quality=85)
    print(f"✓  {ruta}")

print(f"\n✅ {len(libros)} placeholders generados en images/portadas/")
print("   Reemplázalos con las portadas reales cuando las tengas.")
