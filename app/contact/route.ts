import { readFileSync } from "fs";
import { join } from "path";
import { NextRequest, NextResponse } from "next/server";

export function GET(req: NextRequest) {
  const ua = req.headers.get("user-agent") || "";
  const isIOS = /iPad|iPhone|iPod/.test(ua);

  const filePath = join(process.cwd(), "public", "aniketcontact.vcf");
  const fileContent = readFileSync(filePath, "utf-8");

  if (isIOS) {
    return new NextResponse(fileContent, {
      headers: {
        "Content-Type": "text/vcard; charset=utf-8",
      },
    });
  }

  // Android / desktop: HTML page with Web Share API
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Save Contact</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;background:#f0f0f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;padding:24px}
  .card{background:#fff;border-radius:20px;padding:32px 24px;text-align:center;box-shadow:0 4px 24px rgba(0,0,0,0.1);max-width:320px;width:100%}
  .name{font-size:22px;font-weight:700;color:#111;margin-bottom:4px}
  .title{font-size:14px;color:#666;margin-bottom:24px}
  button{width:100%;padding:14px;font-size:16px;font-weight:600;background:#007aff;color:#fff;border:none;border-radius:12px;cursor:pointer;letter-spacing:0.2px}
  button:active{opacity:0.85}
</style>
</head>
<body>
<div class="card">
  <div class="name">Aniket Mehare</div>
  <div class="title">Lead Product Manager · Landmark Group</div>
  <button onclick="saveContact()">Save Contact</button>
</div>
<script>
var vcard = ${JSON.stringify(fileContent)};
async function saveContact() {
  var blob = new Blob([vcard], { type: "text/vcard" });
  var file = new File([blob], "aniket.vcf", { type: "text/vcard" });
  if (navigator.share && navigator.canShare && navigator.canShare({ files: [file] })) {
    try { await navigator.share({ files: [file] }); return; } catch(e) {}
  }
  var url = URL.createObjectURL(blob);
  var a = document.createElement("a");
  a.href = url; a.download = "aniket.vcf";
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
}
</script>
</body>
</html>`;

  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
