import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const NUNITO = "'Nunito', sans-serif";
const GEORGIA = "Georgia, serif";
const SUPABASE_URL = "https://ebczaoptweskqzuzrmls.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImViY3phb3B0d2Vza3F6dXpybWxzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU0OTMxODEsImV4cCI6MjA5MTA2OTE4MX0.Q5wqENM29xaLdVdoG8Gx6Pl49WZSQIGfe2704fa-vNc";
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

const SYSTEM_PROMPT_INSIDE = `Sos el asesor personal más honesto que este líder va a tener.

No tenés agenda. No tenés miedo de decir lo que otros no dicen. No buscás aprobación. Tu único objetivo es ayudar a esta persona a tomar mejores decisiones, liderar con más coherencia y llegar a su mejor versión — no a la versión que el mundo espera de ella.

Combinás dos roles:

Primero, el de acompañante. Escuchás, entendés el contexto, hacés las preguntas que nadie más hace. Cuando alguien necesita pensar en voz alta, estás ahí sin juzgar y sin apurar.

Segundo, el de desafiante. Cuando detectás que la persona está tomando una decisión contra su propio funcionamiento, evitando una conversación difícil, repitiendo un patrón que ya no le sirve o buscando validación en lugar de claridad — lo decís. Con respeto, pero sin suavizarlo demasiado.

Sabés cuándo hacer cada cosa. No desafiás por desafiar. No acompañás cuando lo que se necesita es un empujón.

═══════════════════════════════════════
EL FILTRO — DISEÑO HUMANO
═══════════════════════════════════════
Todo lo que respondés está filtrado por el diseño biológico de esta persona. Eso significa que tus consejos, preguntas y desafíos están calibrados para cómo ella realmente funciona — no para cómo debería funcionar según un libro de management.

REGLA CRÍTICA SOBRE EL LENGUAJE:
Nunca usés términos técnicos de Diseño Humano en tus respuestas — ni tipo, ni autoridad, ni perfil, ni centros, ni canales, ni puertas. Traducí siempre al impacto concreto en la vida y el liderazgo de esta persona.

Si la persona pregunta qué hay detrás de tu forma de responder, o quiere entender su diseño, o pide los términos técnicos — ahí sí los explicás. Pero solo si lo pide explícitamente.

Ejemplo incorrecto: "Tu autoridad Sacral te dice que no analices tanto."
Ejemplo correcto: "Tu mejor decisión no viene de pensar más — viene de sentir si algo te genera energía o no. Cuando tu cuerpo dice sí, es sí. Cuando dice no, es no. El análisis lo podés hacer después."

═══════════════════════════════════════
CÓMO USAR EL DISEÑO PARA RESPONDER
═══════════════════════════════════════
El diseño de la persona define cómo calibrás cada respuesta:

TIPO — te dice cómo genera y gestiona energía, y cuál es su rol natural en cualquier sistema:
- Generador / Generador Manifestante: tiene energía sostenida para construir. Su trampa es el compromiso por inercia — hacer cosas que ya no los cargan. Pregunta clave: ¿esto todavía te genera energía genuina?
- Proyector: no tiene energía constante — tiene visión y sabiduría. Su trampa es forzar resultados sin ser invitado. Pregunta clave: ¿esperaste el momento correcto o empujaste?
- Manifestador: tiene el impulso de iniciar. Su trampa es no informar a los demás antes de actuar, generando resistencia. Pregunta clave: ¿informaste o simplemente hiciste?
- Reflector: es un espejo del entorno. Su trampa es decidir apurado. Pregunta clave: ¿dejaste pasar suficiente tiempo antes de decidir?

AUTORIDAD — te dice cómo toma sus mejores decisiones:
- Sacral: decide desde la respuesta del cuerpo, no desde el análisis. Si algo genera energía, es sí. Si genera pesadez, es no.
- Emocional: necesita tiempo para que la ola emocional decante. No hay verdad en el ahora para esta persona — la claridad llega después.
- Esplénica: intuición instantánea que no se repite. Un susurro, no un grito. Si lo ignoró, después sabe que era correcto.
- Ego: decide desde lo que genuinamente quiere, no desde el deber. Si no hay deseo real, no hay energía para ejecutarlo.
- Self/G: espera tener claridad sobre la dirección antes de moverse. La claridad llega sola, no se fuerza.
- Mental/Sounding Board: necesita hablar la decisión con otros para encontrar su propia claridad — no para pedir opinión, sino para escucharse a sí mismo.

PERFIL — te dice su rol en el mundo y cómo aprende:
- Línea 1: necesita fundamentos sólidos antes de actuar. Sin base, hay inseguridad.
- Línea 2: aprende solo, necesita espacio. Se resiste a la instrucción directa.
- Línea 3: aprende del error. Los fracasos no son fracasos — son datos.
- Línea 4: confía en su red. Las oportunidades llegan a través de vínculos cercanos.
- Línea 5: carga con expectativas ajenas. Necesita separar lo que otros esperan de lo que genuinamente quiere.
- Línea 6: vive en etapas. Tiene un proceso de largo plazo — no lo presiones con resultados inmediatos.

NO-SELF THEME — la señal de que algo está mal:
- Frustración (Generador): está respondiendo a cosas que no lo cargan.
- Amargura (Proyector): está buscando activamente en lugar de esperar la invitación correcta.
- Enojo (Manifestador): no está informando — está generando resistencia sin entender por qué.
- Decepción (Reflector): tomó una decisión apurado, sin dejar decantar.

Si detectás el no-self en el tono o el contenido de lo que escribe, señalalo con cuidado: "Lo que describís suena a [frustración/amargura/enojo/decepción]. ¿Puede ser que estés operando contra tu propia mecánica acá?"

═══════════════════════════════════════
ONBOARDING — PRIMERA VEZ
═══════════════════════════════════════
Si recibís el mensaje "__INSIDE_START__", es la primera vez que la persona entra. Conducís el onboarding de forma conversacional. Nunca usés listas ni bullets durante el onboarding.

PASO 1 — Presentación:
Presentate. Explicá que sos diferente a cualquier otra IA: todo lo que decís está basado en el diseño biológico único de esta persona, no en fórmulas genéricas de liderazgo. Aclará que lo que se hable acá es privado — solo él o ella tiene acceso. Preguntá: "¿De acuerdo con esto?"

PASO 2 — Conocimiento previo:
Explicá brevemente que el filtro que usás es su diseño biológico — información que tiene desde que nació y que describe cómo toma decisiones, genera energía y se relaciona con otros. Preguntá: "¿Conocés algo sobre Diseño Humano o es la primera vez que lo escuchás?"

Según la respuesta:
- Lo conoce → ir directo al paso 3
- Algo pero no mucho → explicar en 2-3 líneas qué es, sin jerga técnica
- No lo conoce → explicar brevemente que es un sistema de autoconocimiento basado en el momento de nacimiento, y que no necesita saber nada de eso para usar la herramienta — vos lo traducís todo a lenguaje concreto

PASO 3 — El momento de revelación:
Antes de arrancar, compartí UN insight sobre su diseño aplicado al liderazgo. Que sea contraintuitivo, específico y que conecte con algo que probablemente ya vivió. No un resumen — una sola idea que haga pensar "esto me conoce."

PASO 4 — Frecuencia y uso:
"Podés consultarme antes de una decisión importante, cuando estés evaluando una situación difícil, cuando necesites pensar algo en voz alta sin consecuencias, o cuando sientas que algo no está funcionando pero no sabés exactamente qué. No hay una frecuencia correcta — lo que importa es que cuando lo necesites, estoy acá."

PASO 5 — Transición:
"Ya sé cómo funcionás. Ahora trabajemos. ¿Qué tenés en la cabeza?"

═══════════════════════════════════════
CÓMO ESTRUCTURAR TUS RESPUESTAS
═══════════════════════════════════════
1. Anclá en el diseño de la persona — pero sin nombrarlo técnicamente
2. Mostrá la consecuencia práctica concreta en su liderazgo
3. Identificá la trampa o el riesgo específico de su patrón
4. Cerrá con una pregunta poderosa o una acción concreta — nunca termines solo en lo reflexivo

Para preguntas vagas o muy abiertas: hacé UNA pregunta de contexto antes de responder. Solo una.
Para decisiones: explicá su mecanismo natural de decisión en términos concretos + una regla de oro práctica.
Para conflictos con otros: usá el diseño de ambos si tenés la información. Si no, preguntá cómo es la otra persona.
Para patrones repetidos: señalá el patrón con nombre y apellido. "Esto es la tercera vez que aparece X en lo que me contás."

═══════════════════════════════════════
TONO Y ESTILO
═══════════════════════════════════════
- Hablá de igual a igual. No sos un asistente — sos un par con más perspectiva.
- Directo y cálido. Sin solemnidad, sin condescendencia.
- Frases cortas. Sin paja. Sin intros genéricas tipo "gran pregunta" o "entiendo perfectamente".
- Nunca adulés. Nunca des la razón solo para dar la razón.
- Cuando algo no cierra, decilo: "Algo en lo que me contás no me convence. ¿Podés contarme más sobre X?"
- Usá el nombre de la persona con moderación — solo cuando quieras que algo aterrice con más peso.
- Respondé en el mismo idioma que escribe la persona. Si escribe en español, respondé en español. Si escribe en inglés, respondé en inglés. Nunca mezcles.

═══════════════════════════════════════
LÍMITES CLAROS
═══════════════════════════════════════
- No hacés diagnósticos médicos ni de salud mental.
- Si detectás signos de crisis real, lo nombrás con cuidado y sugerís apoyo profesional.
- No tomás decisiones por la persona — la ayudás a llegar a la suya.
- No validás decisiones que van claramente contra su diseño sin señalarlo antes.
- La última palabra siempre es de la persona.`;

const C = { bg: "#080808", gold: "#b89a4e", txt: "#f0ebe0", dim: "rgba(240,235,224,0.45)" };

function md(t) {
  return t
    .replace(/^### (.+)$/gm, '<span style="color:#b89a4e">$1</span>')
    .replace(/^## (.+)$/gm, '<span style="color:#b89a4e">$1</span>')
    .replace(/^# (.+)$/gm, '<span style="color:#b89a4e">$1</span>')
    .replace(/\*\*(.*?)\*\*/g, '<span style="color:#b89a4e">$1</span>')
    .replace(/\n/g, "<br/>");
}

async function apiConv(body) {
  const r = await fetch("/api/conversaciones_inside", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  return r.json();
}

async function apiDocs(body) {
  const r = await fetch("/api/documentos_inside", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  return r.json();
}

async function apiUsuarios(body) {
  const r = await fetch("/api/usuarios_inside", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
  return r.json();
}

const logo = { fontFamily: "monospace", fontSize: ".7rem", letterSpacing: ".5em", color: "#b89a4e", border: "1px solid #b89a4e", padding: ".4em 1em", display: "inline-block", marginBottom: "3rem" };
const lbl = { fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".3em", color: "#b89a4e", textTransform: "uppercase", display: "block", marginBottom: ".35rem" };
const inp = { width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(184,154,78,.3)", color: "#f0ebe0", fontFamily: NUNITO, fontSize: ".95rem", padding: ".6rem 0", outline: "none", marginBottom: "1.3rem", display: "block", boxSizing: "border-box" };

function Eye({ value, onChange, placeholder = "Contraseña", onKeyDown }) {
  const [s, setS] = useState(false);
  return (
    <div style={{ position: "relative", marginBottom: "1.3rem" }}>
      <input style={{ ...inp, marginBottom: 0, paddingRight: "2rem" }} type={s ? "text" : "password"} placeholder={placeholder} value={value} onChange={onChange} onKeyDown={onKeyDown} />
      <button onClick={() => setS(v => !v)} style={{ position: "absolute", right: 0, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "rgba(240,235,224,.45)", fontSize: "1rem" }}>
        {s ? "🙈" : "👁"}
      </button>
    </div>
  );
}

function CityInput({ value, onChange, placeholder }) {
  const [sugerencias, setSugerencias] = useState([]);
  const [show, setShow] = useState(false);
  const timer = React.useRef(null);

  async function buscar(q) {
    if (q.length < 3) { setSugerencias([]); return; }
    try {
      const r = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&limit=5&featuretype=city&accept-language=es`);
      const data = await r.json();
      setSugerencias(data.map(d => d.display_name));
    } catch { setSugerencias([]); }
  }

  function handleChange(e) {
    onChange(e.target.value);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => buscar(e.target.value), 400);
    setShow(true);
  }

  return (
    <div style={{ position: "relative", marginBottom: "1.3rem" }}>
      <input style={{ ...inp, marginBottom: 0 }} placeholder={placeholder} value={value} onChange={handleChange}
        onBlur={() => setTimeout(() => setShow(false), 200)}
        onFocus={() => sugerencias.length > 0 && setShow(true)} />
      {show && sugerencias.length > 0 && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "#1a1a1a", border: "1px solid rgba(184,154,78,.3)", zIndex: 50, maxHeight: 200, overflowY: "auto" }}>
          {sugerencias.map((s, i) => (
            <div key={i} onClick={() => { onChange(s); setSugerencias([]); setShow(false); }}
              style={{ padding: ".7rem 1rem", fontSize: ".82rem", color: C.dim, cursor: "pointer", borderBottom: "1px solid rgba(184,154,78,.1)" }}
              onMouseEnter={e => e.target.style.color = C.gold}
              onMouseLeave={e => e.target.style.color = C.dim}>
              {s}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ── WELCOME ───────────────────────────────────────────────────────────────────
function Welcome({ go, lang, setLang }) {
  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: NUNITO, color: C.txt, position: "relative" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap');`}</style>
      <div style={{ position: "fixed", top: "1.5rem", right: "1.5rem", display: "flex", gap: ".3rem" }}>
        {["es", "en"].map(l => (
          <button key={l} onClick={() => setLang(l)}
            style={{ background: lang === l ? "rgba(184,154,78,.15)" : "none", border: "1px solid rgba(184,154,78,.25)", color: lang === l ? C.gold : C.dim, fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".2em", padding: ".3em .7em", cursor: "pointer", textTransform: "uppercase" }}>
            {l}
          </button>
        ))}
      </div>
      <div style={logo}>INSIDE</div>
      <div style={{ textAlign: "center", maxWidth: 580 }}>
        <div style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 300, lineHeight: 1.25, marginBottom: "1.4rem", fontFamily: GEORGIA }}>
          {lang === "en"
            ? <>Stop making decisions<br /><span style={{ color: C.gold, fontStyle: "italic" }}>alone.</span></>
            : <>Dejá de tomar decisiones<br /><span style={{ color: C.gold, fontStyle: "italic" }}>en soledad.</span></>}
        </div>
        <div style={{ color: C.dim, fontSize: "1rem", lineHeight: 1.8, maxWidth: 480, margin: "0 auto 2.5rem", fontFamily: NUNITO }}>
          {lang === "en"
            ? "The only AI Mentor trained according to your way of leading."
            : "El único AI Mentor entrenado según tu forma de liderar."}
        </div>
        <div style={{ maxWidth: 300, margin: "0 auto", display: "flex", flexDirection: "column", gap: ".8rem" }}>
          <button onClick={() => go("register")} style={{ background: C.gold, color: C.bg, border: "none", borderRadius: 24, fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: "pointer", textTransform: "uppercase", width: "100%" }}>
            {lang === "en" ? "Request access" : "Solicitar acceso"}
          </button>
          <button onClick={() => go("login")} style={{ background: "transparent", color: C.dim, border: "1px solid rgba(184,154,78,.3)", fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: "pointer", textTransform: "uppercase", width: "100%" }}>
            {lang === "en" ? "I already have an account" : "Ya tengo cuenta"}
          </button>
        </div>
      </div>
      <div style={{ position: "fixed", bottom: "2rem", fontFamily: "monospace", fontSize: ".55rem", color: "rgba(240,235,224,.2)", letterSpacing: ".15em", textAlign: "center" }}>
        SIMPLE INSIDE · Fran Blanco · 2026
      </div>
    </div>
  );
}

// ── REGISTER ──────────────────────────────────────────────────────────────────
function Register({ go, lang }) {
  const [f, setF] = useState({ nom: "", ape: "", email: "", fecha: "", hora: "", lugar: "", pass: "", tyc: false });
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const u = (k, v) => setF(p => ({ ...p, [k]: v }));

  async function ok() {
    if (!f.nom || !f.ape || !f.email || !f.fecha || !f.hora || !f.lugar || !f.pass) { setErr("Completá todos los campos obligatorios."); return; }
    if (!f.tyc) { setErr("Aceptá los términos y condiciones para continuar."); return; }
    setLoading(true); setErr("");
    try {
      const hdR = await fetch("/api/hd", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ nombre: f.nom, apellido: f.ape, birth_date: f.fecha, birth_time: f.hora, ciudad: f.lugar }) });
      const diseno = await hdR.json();
      if (diseno.error) { setErr("Error al calcular tu diseño: " + diseno.error); setLoading(false); return; }

      const { error: authError } = await supabase.auth.signUp({
        email: f.email.toLowerCase().trim(),
        password: f.pass,
        options: { emailRedirectTo: "https://inside.metodosimple.ar", data: { nombre: f.nom, apellido: f.ape } }
      });

      if (authError) {
        setErr(authError.message.includes("already registered") ? "Ese email ya está registrado. Ingresá con tu contraseña." : authError.message);
        setLoading(false); return;
      }

      await apiUsuarios({ action: "insert", fields: { email: f.email.toLowerCase().trim(), nombre: f.nom, apellido: f.ape, password_hash: f.pass, diseno } });
      go("pending", f.email.toLowerCase().trim());
    } catch (e) { setErr("Error: " + (e?.message || "No se pudo conectar.")); }
    setLoading(false);
  }

  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", padding: "2.5rem 2rem", fontFamily: GEORGIA, color: C.txt, overflowY: "auto" }}>
      <div style={logo}>INSIDE</div>
      <div style={{ width: "100%", maxWidth: 420 }}>
        <div style={{ fontSize: "1.5rem", fontWeight: 300, textAlign: "center", marginBottom: ".4rem" }}>
          {lang === "en" ? "Request access" : "Solicitar acceso"}
        </div>
        <div style={{ color: C.dim, textAlign: "center", marginBottom: "1.5rem", fontSize: ".9rem", lineHeight: 1.6 }}>
          {lang === "en" ? "Enter your data to calculate your design." : "Ingresá tus datos para calcular tu diseño."}
        </div>
        <div style={{ border: "1px solid rgba(184,154,78,.2)", padding: "2.5rem", background: "rgba(255,255,255,.02)", borderRadius: 16 }}>
          {err && <div style={{ color: "#c06040", fontFamily: "monospace", fontSize: ".63rem", marginBottom: ".8rem", textAlign: "center" }}>{err}</div>}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div><label style={lbl}>{lang === "en" ? "First name" : "Nombre"} *</label><input style={inp} placeholder={lang === "en" ? "First name" : "Tu nombre"} value={f.nom} onChange={e => u("nom", e.target.value)} /></div>
            <div><label style={lbl}>{lang === "en" ? "Last name" : "Apellido"} *</label><input style={inp} placeholder={lang === "en" ? "Last name" : "Tu apellido"} value={f.ape} onChange={e => u("ape", e.target.value)} /></div>
          </div>
          <label style={lbl}>Email *</label>
          <input style={inp} type="email" placeholder="tu@email.com" value={f.email} onChange={e => u("email", e.target.value)} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div><label style={lbl}>{lang === "en" ? "Birth date" : "Fecha"} *</label><input style={{ ...inp, colorScheme: "dark" }} type="date" value={f.fecha} onChange={e => u("fecha", e.target.value)} /></div>
            <div><label style={lbl}>{lang === "en" ? "Birth time" : "Hora"} *</label><input style={{ ...inp, colorScheme: "dark" }} type="time" value={f.hora} onChange={e => u("hora", e.target.value)} /></div>
          </div>
          <label style={lbl}>{lang === "en" ? "City of birth" : "Lugar de nacimiento"} *</label>
          <CityInput value={f.lugar} onChange={v => u("lugar", v)} placeholder={lang === "en" ? "City, Country" : "Ciudad, País"} />
          <label style={lbl}>{lang === "en" ? "Password" : "Contraseña"} *</label>
          <Eye value={f.pass} onChange={e => u("pass", e.target.value)} placeholder={lang === "en" ? "Min. 6 characters" : "Mínimo 6 caracteres"} />
          <div style={{ display: "flex", alignItems: "flex-start", gap: ".7rem", marginBottom: "1.2rem" }}>
            <input type="checkbox" id="tyc" checked={f.tyc} onChange={e => u("tyc", e.target.checked)} style={{ marginTop: ".2rem", accentColor: C.gold, cursor: "pointer" }} />
            <label htmlFor="tyc" style={{ fontFamily: NUNITO, fontSize: ".78rem", color: C.dim, lineHeight: 1.6, cursor: "pointer" }}>
              {lang === "en" ? "I accept the " : "Acepto los "}<span style={{ color: C.gold }}>{lang === "en" ? "terms and conditions" : "términos y condiciones"}</span>{lang === "en" ? " of SIMPLE INSIDE." : " de uso de SIMPLE INSIDE."}
            </label>
          </div>
          <button onClick={ok} disabled={loading || !f.tyc} style={{ background: C.gold, color: C.bg, border: "none", borderRadius: 24, fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: loading ? "wait" : "pointer", textTransform: "uppercase", width: "100%", opacity: loading || !f.tyc ? 0.5 : 1 }}>
            {loading ? (lang === "en" ? "Calculating design..." : "Calculando tu diseño...") : (lang === "en" ? "Create account" : "Crear cuenta")}
          </button>
        </div>
        <div style={{ textAlign: "center", margin: "1.2rem 0", color: C.dim, fontFamily: "monospace", fontSize: ".7rem" }}>
          {lang === "en" ? "Already have an account? " : "¿Ya tenés cuenta? "}
          <button onClick={() => go("login")} style={{ color: C.gold, background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: ".63rem" }}>
            {lang === "en" ? "Sign in" : "Ingresá acá"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── PENDING ───────────────────────────────────────────────────────────────────
function Pending({ email, go, lang }) {
  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: GEORGIA, color: C.txt }}>
      <div style={logo}>INSIDE</div>
      <div style={{ textAlign: "center", maxWidth: 460 }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "1.2rem" }}>✉️</div>
        <div style={{ fontSize: "1.5rem", fontWeight: 300, marginBottom: ".8rem" }}>
          {lang === "en" ? "Check your email" : "Revisá tu email"}
        </div>
        <div style={{ color: C.dim, lineHeight: 1.7, marginBottom: "1.5rem" }}>
          {lang === "en"
            ? <>We sent a link to <span style={{ color: C.gold }}>{email}</span>.<br /><br />Once confirmed you can start your session.</>
            : <>Te mandamos un link a <span style={{ color: C.gold }}>{email}</span>.<br /><br />Una vez que confirmés podés iniciar tu sesión.</>}
        </div>
        <div style={{ border: "1px solid rgba(184,154,78,.2)", padding: "1rem 1.5rem", background: "rgba(184,154,78,.04)", marginBottom: "2rem", fontFamily: "monospace", fontSize: ".68rem", color: C.dim, lineHeight: 1.8 }}>
          {lang === "en" ? "Can't find it? Check your spam folder." : "¿No recibiste el email? Revisá tu carpeta de spam."}
        </div>
        <button onClick={() => go("welcome")} style={{ color: C.gold, background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: ".63rem" }}>← {lang === "en" ? "Back to start" : "Volver al inicio"}</button>
      </div>
    </div>
  );
}

// ── LOGIN ─────────────────────────────────────────────────────────────────────
function Login({ go, lang, setDynamicUser }) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);

  async function ok() {
    if (!email || !pass) { setErr(lang === "en" ? "Please fill all fields." : "Completá email y contraseña."); return; }
    const emailClean = email.toLowerCase().trim();

    const RL_KEY = `inside_rl_${emailClean}`;
    const now = Date.now();
    const windowMs = 15 * 60 * 1000;
    let rl = { count: 0, first: now };
    try { const raw = localStorage.getItem(RL_KEY); if (raw) rl = JSON.parse(raw); } catch {}
    if (now - rl.first > windowMs) { rl = { count: 0, first: now }; }
    if (rl.count >= 5) {
      const waitMin = Math.ceil((windowMs - (now - rl.first)) / 60000);
      setErr(lang === "en" ? `Too many attempts. Wait ${waitMin} minute${waitMin > 1 ? "s" : ""}.` : `Demasiados intentos. Esperá ${waitMin} minuto${waitMin > 1 ? "s" : ""}.`);
      return;
    }

    setLoading(true); setErr("");
    try {
      const { error: authError } = await supabase.auth.signInWithPassword({ email: emailClean, password: pass });
      if (authError) {
        try { localStorage.setItem(RL_KEY, JSON.stringify({ count: rl.count + 1, first: rl.first })); } catch {}
        if (authError.message.includes("Email not confirmed")) {
          setErr(lang === "en" ? "Please confirm your email first." : "Confirmá tu email antes de ingresar.");
        } else {
          setErr(lang === "en" ? "Wrong email or password." : "Email o contraseña incorrectos.");
        }
        setLoading(false); return;
      }
      try { localStorage.removeItem(RL_KEY); } catch {}
      const users = await apiUsuarios({ action: "get", email: emailClean });
      if (!users || users.length === 0) { setErr(lang === "en" ? "User not found." : "Usuario no encontrado."); setLoading(false); return; }
      const user = users[0];
      setDynamicUser({ ...user.diseno, nombre: user.nombre, apellido: user.apellido, email: emailClean });
      go("chat", emailClean);
    } catch { setErr(lang === "en" ? "Connection error." : "Error de conexión."); }
    setLoading(false);
  }

  return (
    <div style={{ background: C.bg, minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: NUNITO, color: C.txt }}>
      <div style={logo}>INSIDE</div>
      <div style={{ width: "100%", maxWidth: 420 }}>
        <div style={{ fontSize: "1.5rem", fontWeight: 300, textAlign: "center", marginBottom: ".4rem", fontFamily: GEORGIA }}>{lang === "en" ? "Sign in" : "Ingresar"}</div>
        <div style={{ color: C.dim, textAlign: "center", marginBottom: "1.5rem", fontSize: ".9rem" }}>{lang === "en" ? "Welcome back." : "Bienvenido de nuevo."}</div>
        <div style={{ border: "1px solid rgba(184,154,78,.2)", padding: "2.5rem", background: "rgba(255,255,255,.02)", borderRadius: 16 }}>
          {err && <div style={{ color: "#c06040", fontFamily: "monospace", fontSize: ".63rem", marginBottom: ".8rem", textAlign: "center" }}>{err}</div>}
          <label style={lbl}>Email</label>
          <input style={inp} type="email" placeholder="tu@email.com" value={email} onChange={e => setEmail(e.target.value)} onKeyDown={e => e.key === "Enter" && ok()} />
          <label style={lbl}>{lang === "en" ? "Password" : "Contraseña"}</label>
          <Eye value={pass} onChange={e => setPass(e.target.value)} placeholder={lang === "en" ? "Your password" : "Tu contraseña"} onKeyDown={e => e.key === "Enter" && ok()} />
          <div style={{ textAlign: "right", marginBottom: "1rem" }}>
            <button onClick={async () => {
              if (!email) { setErr(lang === "en" ? "Enter your email first." : "Ingresá tu email primero."); return; }
              const { error } = await supabase.auth.resetPasswordForEmail(email.toLowerCase().trim(), { redirectTo: "https://inside.metodosimple.ar" });
              if (!error) setErr(lang === "en" ? "✓ Check your email for a reset link." : "✓ Te mandamos un link para resetear tu contraseña.");
              else setErr(error.message);
            }} style={{ color: C.gold, background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".1em" }}>
              {lang === "en" ? "Forgot password?" : "¿Olvidaste tu contraseña?"}
            </button>
          </div>
          <button onClick={ok} disabled={loading} style={{ background: C.gold, color: C.bg, border: "none", borderRadius: 24, fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2em", cursor: loading ? "wait" : "pointer", textTransform: "uppercase", width: "100%", opacity: loading ? 0.7 : 1 }}>
            {loading ? "..." : (lang === "en" ? "Sign in" : "Ingresar")}
          </button>
        </div>
        <div style={{ textAlign: "center", margin: "1.2rem 0", color: C.dim, fontFamily: "monospace", fontSize: ".7rem" }}>
          {lang === "en" ? "No account? " : "¿No tenés cuenta? "}
          <button onClick={() => go("register")} style={{ color: C.gold, background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: ".63rem" }}>
            {lang === "en" ? "Request access" : "Solicitá acceso"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── CHAT ──────────────────────────────────────────────────────────────────────
function Chat({ go, userEmail, lang, setLang, dynamicUser }) {
  const user = dynamicUser;
  const [darkMode, setDarkMode] = useState(true);
  const DC = darkMode
    ? { bg: "#080808", gold: "#b89a4e", txt: "#f0ebe0", dim: "rgba(240,235,224,0.45)" }
    : { bg: "#f5f0e8", gold: "#b89a4e", txt: "#1a1a1a", dim: "rgba(26,26,26,0.5)" };
  const [msgs, setMsgs] = useState([]);
  const [convId, setConvId] = useState(null);
  const [documentos, setDocumentos] = useState([]);
  const [docNombre, setDocNombre] = useState("");
  const [docTexto, setDocTexto] = useState("");
  const [docLoading, setDocLoading] = useState(false);
  const [docModo, setDocModo] = useState("pdf");
  const docFileRef = React.useRef(null);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [tab, setTab] = useState(null);
  const [started, setStarted] = useState(false);

  const CHIPS = lang === "en"
    ? ["How do I make better decisions under pressure?", "I have a difficult conversation I'm avoiding.", "Something in my team isn't working and I don't know what.", "I'm evaluating an important change."]
    : ["¿Cómo tomo mejores decisiones bajo presión?", "Tengo una conversación difícil que estoy evitando.", "Algo en mi equipo no está funcionando y no sé qué.", "Estoy evaluando un cambio importante."];

  React.useEffect(() => {
    if (!userEmail) return;
    async function cargar() {
      try {
        const data = await apiConv({ action: "get", email: userEmail });
        if (Array.isArray(data) && data.length > 0 && data[0].mensajes?.length > 0) {
          setMsgs(data[0].mensajes);
          setConvId(data[0].id);
          setStarted(true);
        }
      } catch {}
      try {
        const docs = await apiDocs({ action: "get", email: userEmail });
        if (Array.isArray(docs)) setDocumentos(docs);
      } catch {}
    }
    cargar();
  }, [userEmail]);

  const documentosActivos = documentos.filter(d => d.activo);

  function buildSystemPrompt() {
    const contextoDocumentos = documentosActivos.length > 0
      ? `\n\nDOCUMENTOS CARGADOS POR EL LÍDER:\n${documentosActivos.map(d => `--- ${d.nombre} ---\n${d.contenido.slice(0, 4000)}`).join("\n\n")}`
      : "";
    return SYSTEM_PROMPT_INSIDE + "\n\nDISEÑO DE LA PERSONA: " + JSON.stringify(user) + contextoDocumentos;
  }

  async function guardarConv(mensajes) {
    try {
      if (convId) {
        await apiConv({ action: "update", id: convId, mensajes });
      } else {
        const result = await apiConv({ action: "insert", email: userEmail, mensajes });
        if (Array.isArray(result) && result[0]?.id) setConvId(result[0].id);
      }
    } catch {}
  }

  async function subirDocumento() {
    if (!docNombre.trim() || !docTexto.trim()) return;
    setDocLoading(true);
    try {
      const result = await apiDocs({ action: "insert", fields: { usuario_email: userEmail, nombre: docNombre.trim(), contenido: docTexto.trim(), activo: true } });
      if (Array.isArray(result) && result[0]) { setDocumentos(prev => [...prev, result[0]]); setDocNombre(""); setDocTexto(""); }
    } catch {}
    setDocLoading(false);
  }

  async function toggleDocumento(id, activo) {
    try {
      await apiDocs({ action: "update", id, fields: { activo: !activo } });
      setDocumentos(prev => prev.map(d => d.id === id ? { ...d, activo: !activo } : d));
    } catch {}
  }

  async function eliminarDocumento(id) {
    try {
      await apiDocs({ action: "delete", id });
      setDocumentos(prev => prev.filter(d => d.id !== id));
    } catch {}
  }

  async function handleDocPdf(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { alert("El PDF supera los 5MB."); return; }
    setDocLoading(true);
    if (!docNombre.trim()) setDocNombre(file.name.replace(".pdf", ""));
    try {
      const base64 = await new Promise((res, rej) => { const r = new FileReader(); r.onload = () => res(r.result.split(",")[1]); r.onerror = rej; r.readAsDataURL(file); });
      const resp = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 4000, messages: [{ role: "user", content: [{ type: "document", source: { type: "base64", media_type: "application/pdf", data: base64 } }, { type: "text", text: "Extraé todo el texto de este documento. Solo el texto, sin comentarios." }] }] }) });
      const data = await resp.json();
      setDocTexto(data.content?.[0]?.text || "");
    } catch { alert("No se pudo leer el PDF."); }
    setDocLoading(false);
    e.target.value = "";
  }

  async function send(t) {
    const txt = t || input.trim();
    if (!txt || loading) return;
    setInput("");
    setStarted(true);
    const next = [...msgs, { role: "user", content: txt }];
    setMsgs(next); setLoading(true);
    try {
      const r = await fetch("/api/chat", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: "claude-sonnet-4-20250514", max_tokens: 1000, system: buildSystemPrompt(), messages: next }) });
      const d = await r.json();
      const finalMsgs = [...next, { role: "assistant", content: d?.content?.[0]?.text || "Error." }];
      setMsgs(finalMsgs);
      await guardarConv(finalMsgs);
    } catch { setMsgs([...next, { role: "assistant", content: lang === "en" ? "Connection error." : "Error de conexión." }]); }
    setLoading(false);
  }

  async function startSession() {
    await send("__INSIDE_START__");
  }

  const chatContainerRef = React.useRef(null);
  const lastUserRef = React.useRef(null);
  const lastAssistantRef = React.useRef(null);

  React.useEffect(() => {
    if (!msgs.length) return;
    const last = msgs[msgs.length - 1];
    if (last.role === "user" && lastUserRef.current && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = lastUserRef.current.offsetTop - chatContainerRef.current.offsetTop - 20;
    }
    if (last.role === "assistant" && lastAssistantRef.current && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = lastAssistantRef.current.offsetTop - chatContainerRef.current.offsetTop - 20;
    }
  }, [msgs]);

  return (
    <div style={{ background: DC.bg, minHeight: "100vh", display: "flex", flexDirection: "column", fontFamily: NUNITO, color: DC.txt }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600&display=swap');
        @keyframes p{0%,80%,100%{opacity:.2;transform:scale(.8)}40%{opacity:1;transform:scale(1)}}
        .chat-scroll::-webkit-scrollbar{width:4px}
        textarea, input { color: ${darkMode ? "#f0ebe0" : "#1a1a1a"} !important; -webkit-text-fill-color: ${darkMode ? "#f0ebe0" : "#1a1a1a"} !important; caret-color: #b89a4e; }
        textarea::placeholder, input::placeholder { color: ${darkMode ? "rgba(240,235,224,.3)" : "rgba(26,26,26,.35)"} !important; -webkit-text-fill-color: ${darkMode ? "rgba(240,235,224,.3)" : "rgba(26,26,26,.35)"} !important; }
        .chat-scroll::-webkit-scrollbar-track{background:transparent}
        .chat-scroll::-webkit-scrollbar-thumb{background:rgba(184,154,78,.25);border-radius:2px}
        .chat-scroll{scrollbar-width:thin;scrollbar-color:rgba(184,154,78,.25) transparent}
        .tab-btn{background:none;border:none;cursor:pointer;font-family:monospace;font-size:.58rem;letter-spacing:.25em;text-transform:uppercase;padding:.5rem .9rem;color:${darkMode ? "rgba(240,235,224,.4)" : "rgba(26,26,26,.45)"};transition:color .2s}
        .tab-btn:hover{color:#b89a4e}
        .tab-btn.active{color:#b89a4e;border-bottom:1px solid #b89a4e}
        .tab-panel{padding:1.2rem 2rem;border-bottom:1px solid rgba(184,154,78,.1);background:${darkMode ? "rgba(255,255,255,.02)" : "rgba(0,0,0,.03)"};font-size:.88rem;line-height:1.8;color:${darkMode ? "rgba(240,235,224,.7)" : "rgba(26,26,26,.7)"};font-family:${NUNITO}}
      `}</style>

      {/* Header */}
      <div style={{ padding: ".9rem 2rem", borderBottom: "1px solid rgba(184,154,78,.2)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1.2rem" }}>
          <div style={{ ...logo, marginBottom: 0 }}>INSIDE</div>
          <div style={{ fontFamily: NUNITO, fontSize: ".85rem", color: DC.dim }}>
            {lang === "en" ? "Hi, " : "Hola, "}<span style={{ color: DC.txt, fontWeight: 600 }}>{user?.nombre}</span>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <button onClick={() => setDarkMode(v => !v)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4, opacity: 0.8, display: "flex", alignItems: "center" }}>
            {darkMode
              ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={DC.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={DC.gold} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>}
          </button>
          <button onClick={() => go("welcome")} style={{ color: DC.gold, background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", fontSize: ".6rem" }}>{lang === "en" ? "Sign out →" : "Salir →"}</button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: "1px solid rgba(184,154,78,.15)", display: "flex", alignItems: "center", paddingLeft: "1rem", gap: ".2rem" }}>
        {[["documentos", lang === "en" ? "My documents" : "Mis documentos"]].map(([id, label]) => (
          <button key={id} className={`tab-btn${tab === id ? " active" : ""}`} onClick={() => setTab(tab === id ? null : id)}>{label}</button>
        ))}
        <div style={{ marginLeft: "auto", display: "flex", gap: ".3rem", paddingRight: "1rem" }}>
          {["es", "en"].map(l => (
            <button key={l} onClick={() => setLang(l)}
              style={{ background: lang === l ? "rgba(184,154,78,.15)" : "none", border: "1px solid rgba(184,154,78,.25)", color: lang === l ? DC.gold : DC.dim, fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".2em", padding: ".3em .7em", cursor: "pointer", textTransform: "uppercase" }}>
              {l}
            </button>
          ))}
        </div>
      </div>

      {/* Documentos tab */}
      {tab === "documentos" && (
        <div style={{ padding: "1.2rem 2rem", borderBottom: "1px solid rgba(184,154,78,.1)", background: darkMode ? "rgba(255,255,255,.02)" : "rgba(0,0,0,.03)", display: "flex", flexDirection: "column", gap: "1rem", maxHeight: "55vh", overflowY: "auto" }}>
          {documentos.length > 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: ".5rem" }}>
              <div style={{ fontFamily: "monospace", fontSize: ".45rem", letterSpacing: ".3em", color: DC.gold, textTransform: "uppercase", marginBottom: ".3rem" }}>
                {lang === "en" ? "Your documents" : "Tus documentos"} ({documentosActivos.length} {lang === "en" ? "active" : "activos"})
              </div>
              {documentos.map(d => (
                <div key={d.id} style={{ display: "flex", alignItems: "center", gap: ".6rem", padding: ".6rem .8rem", border: `1px solid ${d.activo ? "rgba(184,154,78,.3)" : "rgba(184,154,78,.1)"}`, borderRadius: 8, background: d.activo ? "rgba(184,154,78,.05)" : "transparent" }}>
                  <button onClick={() => toggleDocumento(d.id, d.activo)}
                    style={{ width: 18, height: 18, borderRadius: 4, border: `1px solid ${d.activo ? DC.gold : "rgba(184,154,78,.3)"}`, background: d.activo ? DC.gold : "transparent", cursor: "pointer", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: ".6rem", color: d.activo ? DC.bg : DC.dim }}>
                    {d.activo ? "✓" : ""}
                  </button>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: ".82rem", color: d.activo ? DC.txt : DC.dim, fontFamily: NUNITO, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{d.nombre}</div>
                    <div style={{ fontSize: ".68rem", color: DC.dim, fontFamily: "monospace" }}>{Math.round(d.contenido.length / 4)} {lang === "en" ? "words approx." : "palabras aprox."}</div>
                  </div>
                  <button onClick={() => eliminarDocumento(d.id)} style={{ background: "none", border: "none", color: DC.dim, cursor: "pointer", fontSize: ".9rem", flexShrink: 0 }}>×</button>
                </div>
              ))}
            </div>
          )}
          <div style={{ borderTop: documentos.length > 0 ? "1px solid rgba(184,154,78,.1)" : "none", paddingTop: documentos.length > 0 ? "1rem" : 0 }}>
            <div style={{ fontFamily: "monospace", fontSize: ".45rem", letterSpacing: ".3em", color: DC.gold, textTransform: "uppercase", marginBottom: ".6rem" }}>
              {lang === "en" ? "Add document" : "Agregar documento"}
            </div>
            <div style={{ display: "flex", gap: ".4rem", marginBottom: ".7rem" }}>
              {["pdf", "texto"].map(m => (
                <button key={m} onClick={() => setDocModo(m)}
                  style={{ background: docModo === m ? "rgba(184,154,78,.15)" : "transparent", border: `1px solid ${docModo === m ? DC.gold : "rgba(184,154,78,.2)"}`, borderRadius: 20, color: docModo === m ? DC.gold : DC.dim, fontFamily: "monospace", fontSize: ".48rem", letterSpacing: ".15em", padding: ".3em .8em", cursor: "pointer", textTransform: "uppercase" }}>
                  {m === "pdf" ? "PDF" : (lang === "en" ? "Text" : "Texto")}
                </button>
              ))}
            </div>
            <input value={docNombre} onChange={e => setDocNombre(e.target.value)}
              placeholder={lang === "en" ? "Document name" : "Nombre del documento"}
              style={{ width: "100%", background: "transparent", border: "none", borderBottom: "1px solid rgba(184,154,78,.2)", color: DC.txt, fontFamily: NUNITO, fontSize: ".82rem", padding: ".4rem 0", outline: "none", marginBottom: ".7rem", boxSizing: "border-box" }} />
            {docModo === "pdf" ? (
              <div>
                <input ref={docFileRef} type="file" accept=".pdf" onChange={handleDocPdf} style={{ display: "none" }} />
                <button onClick={() => docFileRef.current?.click()} disabled={docLoading}
                  style={{ width: "100%", border: "2px dashed rgba(184,154,78,.25)", borderRadius: 8, padding: ".8rem", background: "transparent", color: DC.dim, fontFamily: NUNITO, fontSize: ".8rem", cursor: docLoading ? "wait" : "pointer", textAlign: "center" }}>
                  {docLoading ? (lang === "en" ? "Reading PDF..." : "Leyendo PDF...") : (docTexto ? `✓ ${lang === "en" ? "PDF read — click Save" : "PDF leído — hacé clic en Guardar"}` : (lang === "en" ? "Click to select PDF" : "Hacé clic para seleccionar PDF"))}
                </button>
              </div>
            ) : (
              <textarea value={docTexto} onChange={e => setDocTexto(e.target.value)}
                placeholder={lang === "en" ? "Paste content here..." : "Pegá el contenido acá..."}
                style={{ width: "100%", background: "transparent", border: "1px solid rgba(184,154,78,.2)", borderRadius: 8, color: DC.txt, fontFamily: NUNITO, fontSize: ".82rem", padding: ".6rem", outline: "none", resize: "vertical", lineHeight: 1.6, minHeight: 100, boxSizing: "border-box" }} />
            )}
            {docTexto && (
              <button onClick={subirDocumento} disabled={docLoading || !docNombre.trim()}
                style={{ marginTop: ".6rem", background: DC.gold, color: DC.bg, border: "none", borderRadius: 20, fontFamily: "monospace", fontSize: ".55rem", letterSpacing: ".2em", padding: ".6em 1.5em", cursor: docLoading || !docNombre.trim() ? "not-allowed" : "pointer", textTransform: "uppercase", opacity: docLoading || !docNombre.trim() ? 0.5 : 1 }}>
                {lang === "en" ? "Save document" : "Guardar documento"}
              </button>
            )}
          </div>
        </div>
      )}

      {/* Chat area */}
      <div style={{ flex: 1, maxWidth: 900, margin: "0 auto", width: "100%", padding: "0 clamp(60px, 10vw, 150px)", display: "flex", flexDirection: "column" }}>
        <div ref={chatContainerRef} className="chat-scroll" style={{ flex: 1, padding: "1.8rem 0", paddingRight: "2rem", display: "flex", flexDirection: "column", gap: "1.8rem", overflowY: "auto", maxHeight: "58vh", minHeight: 180 }}>

          {!started && msgs.length === 0 && (
            <div style={{ textAlign: "center", padding: "2.5rem 1rem", border: "1px solid rgba(184,154,78,.15)" }}>
              <div style={{ fontSize: "1.9rem", fontWeight: 300, marginBottom: ".8rem", fontFamily: GEORGIA }}>
                {lang === "en" ? "Hi, " : "Hola, "}<span style={{ color: DC.gold, fontStyle: "italic" }}>{user?.nombre}</span>
              </div>
              <div style={{ fontSize: ".9rem", color: DC.dim, marginBottom: "2rem", lineHeight: 1.7, maxWidth: 460, margin: "0 auto 2rem" }}>
                {lang === "en"
                  ? "I'm your personal AI Mentor. All my responses are filtered through your biological design. I won't give you generic management advice or tell you what to do. I'm designed to help you make decisions based on your own nature."
                  : "Soy tu AI Mentor personal. Todas mis respuestas están filtradas según tu diseño biológico. No voy a darte consejos genéricos de management ni decirte qué hacer. Estoy diseñado para ayudarte a tomar decisiones en función de tu propia naturaleza."}
              </div>
              <button onClick={startSession}
                style={{ background: DC.gold, color: DC.bg, border: "none", borderRadius: 24, fontFamily: "monospace", fontSize: ".65rem", letterSpacing: ".3em", padding: ".85em 2.5em", cursor: "pointer", textTransform: "uppercase", marginBottom: "2rem" }}>
                {lang === "en" ? "Start" : "Empezar"}
              </button>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", justifyContent: "center" }}>
                {CHIPS.map(c => (
                  <button key={c} onClick={() => send(c)}
                    style={{ fontFamily: "monospace", fontSize: ".58rem", padding: ".4em .85em", border: "1px solid rgba(184,154,78,.25)", color: DC.dim, cursor: "pointer", background: "transparent", borderRadius: 20 }}
                    onMouseEnter={e => { e.target.style.borderColor = DC.gold; e.target.style.color = DC.gold; }}
                    onMouseLeave={e => { e.target.style.borderColor = "rgba(184,154,78,.25)"; e.target.style.color = DC.dim; }}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {msgs.filter(m => m.content !== "__INSIDE_START__").map((m, i, arr) => (
            <div key={i}
              ref={m.role === "assistant" && i === arr.length - 1 ? lastAssistantRef : m.role === "user" && i === arr.length - 1 ? lastUserRef : null}
              style={{ textAlign: m.role === "user" ? "right" : "left" }}>
              <div style={{ fontFamily: "monospace", fontSize: ".53rem", letterSpacing: ".3em", textTransform: "uppercase", marginBottom: ".3rem", color: m.role === "user" ? "rgba(240,235,224,.3)" : DC.gold }}>
                {m.role === "user" ? (lang === "en" ? "You" : "Vos") : "INSIDE"}
              </div>
              {m.role === "assistant" ? (
                <div style={{ fontSize: "1rem", color: DC.txt, lineHeight: 1.85, fontFamily: GEORGIA }} dangerouslySetInnerHTML={{ __html: md(m.content) }} />
              ) : (
                <div style={{ fontSize: "1rem", fontStyle: "italic", color: "rgba(240,235,224,.55)", lineHeight: 1.7, fontFamily: NUNITO }}>
                  {m.content}
                </div>
              )}
            </div>
          ))}

          {loading && (
            <div>
              <div style={{ fontFamily: "monospace", fontSize: ".53rem", letterSpacing: ".3em", color: DC.gold, marginBottom: ".3rem" }}>INSIDE</div>
              <div style={{ display: "flex", gap: 5 }}>
                {[0, 1, 2].map(i => <div key={i} style={{ width: 5, height: 5, background: DC.gold, borderRadius: "50%", animation: `p 1.4s ${i * .2}s infinite ease-in-out` }} />)}
              </div>
            </div>
          )}
        </div>

        <div style={{ padding: "1rem 0 1.5rem", borderTop: "1px solid rgba(184,154,78,.15)", display: "flex", gap: ".8rem", alignItems: "flex-end" }}>
          <textarea style={{ flex: 1, background: "transparent", border: "none", borderBottom: `1px solid ${DC.gold}40`, color: DC.txt, fontFamily: GEORGIA, fontSize: ".95rem", padding: ".6rem 0", outline: "none", resize: "none", minHeight: "2rem", lineHeight: 1.5 }}
            value={input}
            placeholder={lang === "en" ? "What's on your mind?" : "¿De qué hablamos?"}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }} rows={1} />
          <button onClick={() => send()} disabled={loading || !input.trim()}
            style={{ background: "transparent", border: "1px solid " + DC.gold, borderRadius: 20, color: DC.gold, fontFamily: "monospace", fontSize: ".6rem", letterSpacing: ".2em", padding: ".6em 1em", cursor: "pointer", textTransform: "uppercase", marginBottom: 2, opacity: loading || !input.trim() ? 0.3 : 1 }}>
            {lang === "en" ? "Send" : "Enviar"}
          </button>
        </div>
      </div>

      <div style={{ textAlign: "center", padding: ".6rem", fontFamily: "monospace", fontSize: ".5rem", color: darkMode ? "rgba(240,235,224,.15)" : "rgba(26,26,26,.3)", letterSpacing: ".15em" }}>
        SIMPLE INSIDE · Fran Blanco · 2026
      </div>
    </div>
  );
}

// ── APP ROOT ──────────────────────────────────────────────────────────────────
export default function App() {
  const [screen, setScreen] = useState("welcome");
  const [email, setEmail] = useState("");
  const [lang, setLang] = useState("es");
  const [dynamicUser, setDynamicUser] = useState(null);

  function go(s, e) { if (e) setEmail(e); setScreen(s); }

  return (
    <div style={{ background: C.bg, minHeight: "100vh" }}>
      <style>{"*{box-sizing:border-box;margin:0;padding:0}body{background:#080808}input:-webkit-autofill{-webkit-box-shadow:0 0 0 1000px #080808 inset!important;-webkit-text-fill-color:#f0ebe0!important}"}</style>
      {screen === "welcome"  && <Welcome go={go} lang={lang} setLang={setLang} />}
      {screen === "register" && <Register go={go} lang={lang} />}
      {screen === "pending"  && <Pending email={email} go={go} lang={lang} />}
      {screen === "login"    && <Login go={go} lang={lang} setDynamicUser={setDynamicUser} />}
      {screen === "chat"     && <Chat go={go} userEmail={email} lang={lang} setLang={setLang} dynamicUser={dynamicUser} />}
    </div>
  );
}
