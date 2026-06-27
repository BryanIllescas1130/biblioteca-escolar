# 📚 Biblioteca Escolar — Colegio Mixto Forjador de Juventudes

Catálogo digital de 28 libros. **Sin dependencias. Sin internet. Sin Claude.**

---

## ✅ Cómo agregar un libro nuevo

**Solo editas un archivo: `js/libros.js`**

Abre ese archivo y al final, antes del `];`, agrega un bloque así:

```js
{
  codigo:      "NAR-08",          // Siguiente número de la categoría
  titulo:      "Nombre del libro",
  autor:       "Nombre Apellido",
  categoria:   "NAR",             // AUT | CIE | CLA | JUV | MIS | NAR | VAR
  estado:      "A",               // A | B | D | C
  paginas:     250,
  year:        2024,
  editorial:   "Editorial X",
  isbn:        "978...",          // "" si no lo tienes
  copias:      1,
  disponible:  true,
  nota:        "",
  descripcion: "Descripción sin spoilers del libro."
},
```

Guarda el archivo → el catálogo se actualiza solo. No hay que tocar `index.html`.

---

## 📁 Estructura del repositorio

```
biblioteca-escolar/
├── index.html              ← El catálogo (no necesitas editarlo)
├── css/
│   └── style.css           ← Diseño (no necesitas editarlo)
├── js/
│   ├── libros.js           ← ← ← AQUÍ AGREGAS LOS LIBROS
│   └── app.js              ← Lógica (no necesitas editarlo)
├── images/
│   └── portadas/           ← Imágenes JPG de portada
│       ├── AUT-01.jpg      ← Nombre = código del libro
│       ├── NAR-08.jpg      ← Al agregar un libro, agrega su imagen aquí
│       └── ...
└── README.md
```

---

## 🚀 Subir a GitHub Pages (primera vez)

1. **Crea cuenta** en [github.com](https://github.com) (gratis)
2. **Nuevo repositorio** → nombre: `biblioteca-escolar` → Public → Create
3. **Sube los archivos**:
   - En el repo vacío, clic en **"uploading an existing file"**
   - Arrastra toda la carpeta `biblioteca-site/`
   - Escribe `Catálogo inicial` → **Commit changes**
4. **Activa GitHub Pages**:
   - **Settings** → **Pages** → Branch: **main** → carpeta: **/ (root)** → **Save**
5. En ~2 minutos tu sitio estará en:
   ```
   https://TU_USUARIO.github.io/biblioteca-escolar/
   ```

---

## 🖼️ Agregar imagen de portada

1. Busca la imagen en Google → guárdala como `CODIGO.jpg` (ej. `NAR-08.jpg`)
2. En GitHub, ve a `images/portadas/` → **Add file** → **Upload files**
3. Sube la imagen → **Commit changes**

Si no hay imagen, el catálogo muestra automáticamente un ícono con el código del libro.

**Tamaño ideal:** 400×600 px (proporción 2:3)

---

## ✏️ Actualizar datos de un libro existente

1. Ve a `js/libros.js` en GitHub
2. Clic en ✏️ (editar)
3. Cambia el campo que necesites (estado, disponible, nota, etc.)
4. **Commit changes** → cambios en ~30 segundos

---

## 🏷️ Categorías disponibles

| Código | Nombre     |
|--------|-----------|
| AUT    | Autoayuda  |
| CIE    | Ciencia    |
| CLA    | Clásicos   |
| JUV    | Juvenil    |
| MIS    | Misterio   |
| NAR    | Narrativa  |
| VAR    | Varios     |

¿Necesitas una categoría nueva? Agrégala en `js/app.js` en la sección `CATEGORIAS`.

---

## 🔴 Estados físicos

| Código | Estado      | Color    |
|--------|-------------|----------|
| A      | Excelente   | Verde    |
| B      | Bueno       | Azul     |
| D      | Deteriorado | Naranja  |
| C      | Crítico     | Rojo     |

---

*Servicio de Biblioteca Escolar · Colegio Mixto Forjador de Juventudes · 2026*
