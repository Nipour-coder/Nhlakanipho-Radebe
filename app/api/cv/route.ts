import { profile } from "@/lib/data";
import {
  education,
  experiences,
  skills,
  softSkills,
  projects,
  certifications,
  references,
} from "@/lib/data";

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function buildResumeXml(): string {
  const lines: string[] = [];
  lines.push(
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<html xmlns="http://www.w3.org/1999/xhtml" lang="en">`,
    `<head>`,
    `<meta charset="utf-8" />`,
    `<title>${escapeXml(profile.fullName)} — CV</title>`,
    `<style>`,
    `body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;color:#0b0f19;max-width:780px;margin:32px auto;padding:0 20px;line-height:1.55}h1{font-size:28px;margin:0 0 4px}h2{font-size:14px;letter-spacing:.12em;text-transform:uppercase;color:#0891b2;margin:24px 0 8px;border-bottom:1px solid #e5e7eb;padding-bottom:4px}p,li{font-size:14px}.muted{color:#475569}a{color:#0891b2;text-decoration:none}ul{padding-left:20px;margin:8px 0}.tag{display:inline-block;border:1px solid #cbd5e1;border-radius:999px;padding:1px 8px;margin:2px;font-size:11px;color:#0b0f19}`,
    `</style>`,
    `</head><body>`,
    `<h1>${escapeXml(profile.fullName)}</h1>`,
    `<p class="muted">${escapeXml(profile.subtitle)}</p>`,
    `<p>${escapeXml(profile.email)} · ${escapeXml(profile.phoneDisplay)} · <a href="${profile.whatsapp}">WhatsApp</a> · <a href="${profile.github}">GitHub</a> · <a href="${profile.linkedin}">LinkedIn</a></p>`,
    `<p>${escapeXml(profile.address)}</p>`,
    `<h2>Career Objective</h2>`,
    `<p>${escapeXml(profile.objective)}</p>`,
    `<h2>Education</h2>`
  );
  for (const e of education) {
    lines.push(
      `<p><strong>${escapeXml(e.qualification)}</strong><br/>${escapeXml(e.institution)} (${escapeXml(e.period)})</p>`
    );
  }

  lines.push(`<h2>Work Experience</h2>`);
  for (const w of experiences.filter((x) => x.type === "work")) {
    lines.push(
      `<p><strong>${escapeXml(w.role)}</strong> — ${escapeXml(w.company)} <span class="muted">(${escapeXml(w.period)})</span></p>`
    );
    if (w.description) lines.push(`<p>${escapeXml(w.description)}</p>`);
    if (w.achievements?.length) {
      lines.push(`<ul>${w.achievements.map((a) => `<li>${escapeXml(a)}</li>`).join("")}</ul>`);
    }
  }

  lines.push(`<h2>Technical Skills</h2>`);
  const byCat = skills.reduce<Record<string, string[]>>((acc, s) => {
    (acc[s.category] ||= []).push(s.name);
    return acc;
  }, {});
  for (const [cat, items] of Object.entries(byCat)) {
    lines.push(
      `<p><strong>${escapeXml(cat)}</strong></p><p>${items
        .map((i) => `<span class="tag">${escapeXml(i)}</span>`)
        .join(" ")}</p>`
    );
  }
  lines.push(`<h2>Soft Skills</h2><p>${softSkills.map(escapeXml).join(" · ")}</p>`);

  lines.push(`<h2>Featured Projects</h2>`);
  for (const p of projects) {
    lines.push(
      `<p><strong>${escapeXml(p.title)}</strong><br/>${escapeXml(p.description)}<br/><span class="muted">${escapeXml(p.details)}</span></p>`
    );
  }

  lines.push(`<h2>Certifications</h2><ul>`);
  for (const c of certifications) {
    lines.push(`<li>${escapeXml(c.name)} — ${escapeXml(c.issuer)}</li>`);
  }
  lines.push(`</ul>`);

  lines.push(`<h2>References</h2><ul>`);
  for (const r of references) {
    lines.push(`<li>${escapeXml(r.name)} (${escapeXml(r.company)}) — ${escapeXml(r.phone)}</li>`);
  }
  lines.push(`</ul>`);

  lines.push(`</body></html>`);
  return lines.join("\n");
}

export async function GET(): Promise<Response> {
  const html = buildResumeXml();
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Content-Disposition": `attachment; filename="Nhlakanipho-Radebe-CV.html"`,
    },
  });
}
