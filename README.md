# El Oráculo de Fútbol — Versión 2

Web educativa de estadísticas de fútbol para LaLiga.

## Incluye
- Clasificación real de LaLiga.
- Todos los equipos obtenidos desde la API.
- Escudos oficiales devueltos por los datos de cada equipo.
- Predicción estadística educativa sin apuestas.
- Estadísticas separadas de local y visitante.
- Forma reciente basada en los últimos 5 partidos disponibles.
- Comparación de ataque, defensa, forma y puntos por partido.
- Gráficos visuales de rendimiento.
- Historial local de las últimas 10 predicciones.
- PWA instalable.

## Despliegue en Vercel
1. Conecta este repositorio de GitHub al proyecto existente de Vercel.
2. En Vercel configura la variable de entorno `FOOTBALL_DATA_TOKEN`.
3. Despliega a producción.

El token se usa únicamente en `api/standings.js` y no se incluye en el código del navegador.

Datos de clasificación y resultados proporcionados por football-data.org.
