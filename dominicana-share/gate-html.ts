const COPY = {
  es: {
    title: "Acceso privado",
    body: "Esta documentación contiene información confidencial. Introduzca su contraseña para continuar.",
    passwordLabel: "Contraseña",
    submit: "Acceder",
    error: "La contraseña no es correcta.",
    limited: "Demasiados intentos. Espere unos minutos e inténtelo de nuevo.",
    generic: "No ha sido posible validar el acceso. Inténtelo de nuevo.",
  },
  en: {
    title: "Private access",
    body: "This documentation contains confidential information. Enter your password to continue.",
    passwordLabel: "Password",
    submit: "Access",
    error: "The password is not correct.",
    limited: "Too many attempts. Please wait a few minutes and try again.",
    generic: "Access could not be validated. Please try again.",
  },
} as const;

export function samanaGateHtml(locale: "es" | "en"): string {
  const copy = COPY[locale];
  const payload = JSON.stringify(copy).replace(/</g, "\\u003c");
  return `<!doctype html>
<html lang="${locale}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="robots" content="noindex,nofollow,noarchive">
<meta name="referrer" content="no-referrer">
<title>${copy.title} — Global Solutions Worldwide</title>
<style>
  :root{color-scheme:dark;--bg:#090909;--fg:#f4f4f4;--muted:#b3b3b3;--line:#2a2a2a}
  *{box-sizing:border-box}
  html,body{margin:0;min-height:100%;background:var(--bg);color:var(--fg);font-family:Inter,Arial,sans-serif}
  main{min-height:100dvh;display:flex;align-items:center;justify-content:center;padding:48px 24px}
  .box{width:100%;max-width:28rem}
  p.kicker{margin:0;font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:var(--muted)}
  h1{margin:16px 0 0;font-size:clamp(28px,5vw,40px);font-weight:500;letter-spacing:-.04em}
  .body{margin:20px 0 0;font-size:17px;line-height:1.6;color:var(--muted)}
  label{display:block;margin:48px 0 8px;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--muted)}
  input{width:100%;border:0;border-bottom:1px solid var(--line);background:transparent;color:var(--fg);padding:12px 0;font:inherit;outline:none}
  input:focus{border-bottom-color:var(--fg)}
  button{margin-top:32px;min-height:48px;padding:0 28px;border:1px solid var(--fg);background:var(--fg);color:var(--bg);font:inherit;cursor:pointer}
  button:disabled{opacity:.6;cursor:wait}
  .alert{margin-top:20px;color:var(--muted);font-size:14px}
</style>
</head>
<body>
<main>
  <div class="box">
    <p class="kicker">Global Solutions Worldwide</p>
    <h1>${copy.title}</h1>
    <p class="body">${copy.body}</p>
    <form id="gate" novalidate>
      <label for="password">${copy.passwordLabel}</label>
      <input id="password" name="password" type="password" autocomplete="current-password" required>
      <button type="submit">${copy.submit}</button>
      <p class="alert" id="alert" hidden></p>
    </form>
  </div>
</main>
<script>
const copy = ${payload};
const form = document.getElementById("gate");
const alertEl = document.getElementById("alert");
const button = form.querySelector("button");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  button.disabled = true;
  alertEl.hidden = true;
  try {
    const response = await fetch("/api/dominicana-share/unlock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password: form.password.value }),
    });
    if (response.status === 429) {
      alertEl.textContent = copy.limited;
      alertEl.hidden = false;
      return;
    }
    if (!response.ok) {
      alertEl.textContent = copy.error;
      alertEl.hidden = false;
      form.reset();
      return;
    }
    window.location.reload();
  } catch {
    alertEl.textContent = copy.generic;
    alertEl.hidden = false;
  } finally {
    button.disabled = false;
  }
});
</script>
</body>
</html>`;
}
