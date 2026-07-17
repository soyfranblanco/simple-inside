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

  const { action, codigo } = req.body;

  try {
    // Verificar si el registro es libre
    if (action === "check-config") {
      const r = await fetch(`${SUPABASE_URL}/rest/v1/config_inside?id=eq.1&select=registro_libre`, { headers });
      const data = await r.json();
      return res.status(200).json({ registro_libre: data?.[0]?.registro_libre ?? false });
    }

    // Verificar si un código es válido
    if (action === "verificar") {
      if (!codigo) return res.status(400).json({ error: "Falta código" });

      const r = await fetch(`${SUPABASE_URL}/rest/v1/codigos_inside?codigo=eq.${encodeURIComponent(codigo.toUpperCase())}&select=*`, { headers });
      const data = await r.json();

      if (!data || data.length === 0) return res.status(200).json({ valido: false, motivo: "Código inválido." });

      const cod = data[0];

      if (!cod.activo) return res.status(200).json({ valido: false, motivo: "Este código está desactivado." });

      if (cod.usos_actuales >= cod.usos_maximos) return res.status(200).json({ valido: false, motivo: "Este código ya alcanzó su límite de usos." });

      if (cod.vence_en && new Date(cod.vence_en) < new Date()) return res.status(200).json({ valido: false, motivo: "Este código venció." });

      return res.status(200).json({ valido: true, id: cod.id });
    }

    // Usar un código (incrementar usos)
    if (action === "usar") {
      if (!codigo) return res.status(400).json({ error: "Falta código" });

      // Buscar el código
      const r = await fetch(`${SUPABASE_URL}/rest/v1/codigos_inside?codigo=eq.${encodeURIComponent(codigo.toUpperCase())}&select=id,usos_actuales`, { headers });
      const data = await r.json();

      if (!data || data.length === 0) return res.status(400).json({ error: "Código no encontrado" });

      const cod = data[0];

      // Incrementar usos
      const rUpdate = await fetch(`${SUPABASE_URL}/rest/v1/codigos_inside?id=eq.${cod.id}`, {
        method: "PATCH", headers,
        body: JSON.stringify({ usos_actuales: cod.usos_actuales + 1 })
      });

      if (!rUpdate.ok) return res.status(500).json({ error: "Error al registrar uso" });

      return res.status(200).json({ ok: true });
    }

    return res.status(400).json({ error: "Acción no reconocida" });
  } catch (error) {
    console.error("Error en codigos_inside:", error);
    return res.status(500).json({ error: "Error interno" });
  }
}
