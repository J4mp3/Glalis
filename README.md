# Pasos Pay — Frontend

App mobile (web + Capacitor) que combina contador de pasos con medio de pago (tarjetas propias, pago con QR).
Por ahora es **solo frontend**: todo es mock/estático, sin backend ni convenios conectados.

## Archivos

- `index.html` — **el único archivo que importa**. Es autocontenido (CSS y JS incluidos adentro), con todas las pantallas (Inicio + placeholders de Tarjetas/QR/Transferencias/Más) en una sola página (SPA simple). Abrí este.
- `styles.css` / `app.js` — quedaron de una versión anterior (separada en 3 archivos) y ya no los usa `index.html`. Los podés borrar cuando quieras, no hacen falta.
- `package.json` / `capacitor.config.json` — scaffolding para empaquetar como APK más adelante con Capacitor.

## Cómo probarla ahora

Abrí `index.html` directo en el navegador (doble clic, o clic derecho → Abrir con → Chrome/Edge/Firefox). Achicá la ventana a un ancho tipo celular (375–430px) o abrí las devtools en modo "responsive/mobile".

## Cómo convertirla en APK más adelante

Vas a necesitar Node.js y Android Studio instalados en tu compu (esto no se puede hacer desde este chat):

1. `npm install`
2. `npx cap init` (si hace falta, ya está precompletado en `capacitor.config.json`)
3. `npx cap add android`
4. `npx cap sync`
5. `npx cap open android` → generás el APK desde Android Studio.

## Estado actual

- **Inicio**: réplica de la captura que mandaste (header naranja con degradé y blob decorativo, avatar/ojo/ayuda/notificaciones, pill de cuenta, saldo grande, alias con estrella, 4 accesos circulares, dots de carrusel, Accesos directos, banner promocional, Beneficios, Servicios y recargas, tarjeta "Pagá o agregá tus servicios", Recomendaciones, Cerrar sesión).
- Todos los botones de esa pantalla son **tocables pero sin función** (a la espera de convenios), salvo el nav inferior que sí cambia de pantalla.
- **Nav inferior**: Inicio / Tarjetas / botón central (QR, pago sin contacto) / Transferencias / Más — navegan a pantallas propias. Tarjetas, Transferencias y Más son placeholders vacíos hasta que me pases sus capturas.
- El botón "Pagar sin contacto" de Accesos directos también lleva al tab QR, ya que es la función central de pago.
- **Contador de pasos**: todavía no tengo la captura de esa pantalla — por ahora vive como placeholder dentro de "Más".

## Notas de color / estética (por si querés ajustar a mano)

- Naranja principal: `#FF5F00`, degradé hacia `#E64A00`.
- Fondo general: `#F2F1F3`.
- Tarjetas blancas con `border-radius: 16px` y sombra suave.
- Las fotos/ilustraciones de Beneficios y Recomendaciones son placeholders con emoji + degradé de color — cuando me pases las imágenes reales las reemplazo.

## Próximo paso

Mandame las capturas de las demás pantallas (Tarjetas, Transferencias, Más, la pantalla del contador de pasos, y el flujo de pago/cobro con QR) y las voy clonando una por una, respetando esta misma estética.
