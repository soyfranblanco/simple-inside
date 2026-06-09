export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const SUPABASE_URL = process.env.SUPABASE_URL || "https://ebczaoptweskqzuzrmls.supabase.co";
  const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;
  const headers = {
    "apikey": SUPABASE_SERVICE_KEY,
    "Authorization": `Bearer ${SUPABASE_SERVICE_KEY}`,
    "Content-Type": "application/json",
    "Prefer": "return=representation"
  };

  const { action, email, id, mensajes } = req.body;

  try {
    if (action === "get") {
      if (!email) return res.status(400).json({ error: "Falta email" });
      const r = await fetch(`${SUPABASE_URL}/rest/v1/conversaciones_inside?usuario_email=eq.${encodeURIComponent(email)}&order=updated_at.desc&limit=1`, { headers });
      const data = await r.json();
      if (!r.ok) return res.status(r.status).json({ error: data });
      return res.status(200).json(data);
    }

    if (action === "insert") {
      if (!email || !mensajes) return res.status(400).json({ error: "Faltan campos" });
      const r = await fetch(`${SUPABASE_URL}/rest/v1/conversaciones_inside`, {
        method: "POST", headers,
        body: JSON.stringify({ usuario_email: email, mensajes })
      });
      const data = await r.json();
      if (!r.ok) return res.status(r.status).json({ error: data });
      return res.status(200).json(data);
    }

    if (action === "update") {
      if (!id || !mensajes) return res.status(400).json({ error: "Faltan campos" });
      const r = await fetch(`${SUPABASE_URL}/rest/v1/conversaciones_inside?id=eq.${id}`, {
        method: "PATCH", headers,
        body: JSON.stringify({ mensajes, updated_at: new Date().toISOString() })
      });
      const data = await r.json();
      if (!r.ok) return res.status(r.status).json({ error: data });
      return res.status(200).json(data);
    }

    return res.status(400).json({ error: "Acción no reconocida" });
  } catch (error) {
    console.error("Error en conversaciones_inside:", error);
    return res.status(500).json({ error: "Error interno" });
  }
}
