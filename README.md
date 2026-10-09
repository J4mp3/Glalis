# Gali — app demostrativa (portafolio)

App mobile (web/PWA) con estética de banca móvil. **Demostrativa y no válida**: todo es mock/estático, sin backend ni operaciones reales.

## Archivos

- `index.html` — la app completa (HTML + CSS + JS en un solo archivo).
- `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png` — PWA (instalable y con caché offline).
- `jsqr.js` — librería [jsQR](https://github.com/cozmo/jsQR) (Apache-2.0) para detectar códigos QR con la cámara.
- `ico/`, `img/` — íconos e imágenes (ya optimizados para celular).

## Publicar en GitHub Pages

1. Subí estos archivos a un repositorio de GitHub (rama `main`).
2. En el repo: **Settings → Pages → Build and deployment → Deploy from a branch → `main` / `(root)` → Save**.
3. Esperá ~1 minuto. La app queda en `https://<usuario>.github.io/<repo>/`.
4. En el celular abrí esa dirección con Chrome. Para instalarla como app: menú ⋮ → **Instalar aplicación / Agregar a pantalla de inicio**.

Notas:
- Hace falta HTTPS (GitHub Pages ya lo da) para la instalación, el caché offline y la cámara.
- Al subir cambios, la app instalada toma la versión nueva al abrirla. Si cambiás íconos o imágenes con el mismo nombre, subí `CACHE_VERSION` en `sw.js`.
- La vibración funciona en Chrome para Android (no en iPhone).

## Probar en la compu

Abrí `index.html` en el navegador y achicá la ventana a ~400 px de ancho. Para probar la cámara y el caché offline hace falta servirla por `http://localhost` (por ejemplo `npx serve .`).
