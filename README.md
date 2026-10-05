# El Oráculo de Fútbol

Web/PWA de estadísticas y predicciones educativas de partidos.

## Estructura

- `index.html` — aplicación web.
- `api/standings.js` — backend serverless que consulta football-data.org sin exponer el token al navegador.
- `manifest.webmanifest` — instalación como PWA.
- `sw.js` — caché básica para la PWA.
- `vercel.json` — configuración de despliegue.
- `.env.example` — nombre de la variable secreta.

## Publicación con Vercel

1. Sube esta carpeta a un repositorio privado de GitHub o importa el proyecto directamente en Vercel.
2. En la configuración del proyecto crea la variable de entorno:
   `FOOTBALL_DATA_TOKEN`
3. Como valor, pega tu token de football-data.org.
4. Despliega.
5. Comprueba que `/api/standings` devuelve la clasificación y que la página la muestra.

El token no debe ponerse dentro de `index.html`.

## Nota de datos

La aplicación muestra el aviso de atribución requerido por football-data.org.
