export default async function handler(req, res) {
  try {
    const token = process.env.FOOTBALL_DATA_TOKEN;

    if (!token) {
      return res.status(500).json({
        error: "FOOTBALL_DATA_TOKEN no está configurado en Vercel"
      });
    }

    const respuesta = await fetch(
      "https://api.football-data.org/v4/competitions/PD/standings",
      {
        headers: {
          "X-Auth-Token": token
        }
      }
    );

    const datos = await respuesta.json();

    return res.status(respuesta.status).json(datos);
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "No se pudieron obtener los datos de fútbol"
    });
  }
}
