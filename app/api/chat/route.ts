import { NextResponse } from "next/server";
import {
  profile,
  skills,
  softSkills,
  projects,
  education,
  experiences,
  certifications,
  references,
} from "@/lib/data";

// Single, deterministic responder loaded with Nhlakanipho's full CV data.
// The frontend posts { question: string } and reads { answer: string }.

type ChatBody = { question?: string };

function buildContext(): string {
  const lines: string[] = [];
  lines.push(`Name: ${profile.fullName}`);
  lines.push(`Email: ${profile.email}`);
  lines.push(`Phone: ${profile.phoneDisplay} (${profile.whatsapp})`);
  lines.push(`GitHub: ${profile.github}`);
  lines.push(`LinkedIn: ${profile.linkedin}`);
  lines.push(`Address: ${profile.address}`);
  lines.push(`Objective: ${profile.objective}`);

  lines.push("\nEducation:");
  for (const e of education) {
    lines.push(`- ${e.qualification} @ ${e.institution} (${e.period})`);
    if (e.description) lines.push(`  ${e.description}`);
  }

  lines.push("\nWork experience:");
  for (const w of experiences.filter((x) => x.type === "work")) {
    lines.push(`- ${w.role} @ ${w.company} (${w.period})`);
    if (w.description) lines.push(`  ${w.description}`);
    for (const a of w.achievements ?? []) lines.push(`  • ${a}`);
  }

  lines.push("\nTechnical skills:");
  for (const s of skills) lines.push(`- [${s.category}] ${s.name}`);

  lines.push("\nSoft skills:");
  lines.push(`- ${softSkills.join(", ")}`);

  lines.push("\nProjects:");
  for (const p of projects) {
    lines.push(
      `- ${p.title} (tags: ${p.tags.join(", ")})\n  ${p.description}\n  ${p.details}\n  Tech: ${p.tech.join(", ")}\n  GitHub: ${p.github}`
    );
  }

  lines.push("\nCertifications:");
  for (const c of certifications) lines.push(`- ${c.name} (${c.issuer})`);

  lines.push("\nReferences:");
  for (const r of references)
    lines.push(`- ${r.name} @ ${r.company} — ${r.phone}`);

  return lines.join("\n");
}

const CONTEXT = buildContext();

function answer(question: string): string {
  const q = question.toLowerCase().trim();
  if (!q) {
    return "Ask me anything about Nhlakanipho — skills, projects, education, experience, certifications, or how to get in touch.";
  }

  // Greetings
  if (/^(hi|hello|hey|hola|howzit|molo|sawubona)\b/.test(q)) {
    return `Hi! I'm Nhlakanipho Radebe's AI assistant. I can tell you about his ${skills.length}+ technical skills, his ${projects.length} featured projects (ESP32 smart home, C++ car sales system, temperature monitoring, and more), his work at One Stop-Internet Café, his studies at Tshwane University of Technology, or how to reach him. What would you like to know?`;
  }

  // Contact
  if (q.includes("contact") || q.includes("reach") || q.includes("email") || q.includes("phone") || q.includes("whatsapp") || q.includes("hire")) {
    return `You can reach Nhlakanipho via:\n• Email: ${profile.email}\n• Phone: ${profile.phoneDisplay}\n• WhatsApp: ${profile.whatsapp} (opens in a new tab)\n• GitHub: ${profile.github}\n• LinkedIn: ${profile.linkedin}\n\nHe is based in Soshanguve, 0152 and is open to internship and ICT project opportunities.`;
  }

  // Education / school / university
  if (q.includes("education") || q.includes("school") || q.includes("university") || q.includes("tut") || q.includes("tshwane") || q.includes("matric") || q.includes("kwabhanya") || q.includes("degree") || q.includes("study")) {
    return `Education:\n• Final Year Student in Computer Systems Engineering (2021 – Present) at Tshwane University of Technology.\n• Matric (Grade 12, 2020) at Kwabhanya Secondary School.\n\nHe is currently seeking an internship to apply his technical knowledge in a practical environment.`;
  }

  // Experience / work
  if (q.includes("experience") || q.includes("work") || q.includes("job") || q.includes("internet") || q.includes("café") || q.includes("cafe") || q.includes("one stop")) {
    const w = experiences.find((e) => e.type === "work");
    if (!w) return "No work experience listed.";
    const bullets = (w.achievements ?? []).map((a) => `  • ${a}`).join("\n");
    return `Role: ${w.role} at ${w.company} (${w.period})\n${w.description ?? ""}\nHighlights:\n${bullets}`;
  }

  // Projects
  if (q.includes("project") || q.includes("esp32") || q.includes("smart home") || q.includes("automation") || q.includes("led") || q.includes("c++") || q.includes("car sales") || q.includes("temperature") || q.includes("lm35") || q.includes("microcontroller") || q.includes("relay")) {
    const matches = projects.filter((p) => {
      const hay = `${p.title} ${p.description} ${p.details} ${p.tech.join(" ")}`.toLowerCase();
      return q.split(/\s+/).some((token) => token.length > 2 && hay.includes(token));
    });
    const list = (matches.length ? matches : projects).slice(0, 4);
    return list
      .map(
        (p, i) =>
          `${i + 1}. ${p.title}\n   ${p.description}\n   Tech: ${p.tech.join(", ")}\n   GitHub: ${p.github}`
      )
      .join("\n\n");
  }

  // Skills (generic)
  if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("language") || q.includes("hardware") || q.includes("network") || q.includes("embedded") || q.includes("programming") || q.includes("cybersecurity") || q.includes("soft")) {
    const byCat = skills.reduce<Record<string, string[]>>((acc, s) => {
      (acc[s.category] ||= []).push(s.name);
      return acc;
    }, {});
    const blocks = Object.entries(byCat)
      .map(([cat, items]) => `• ${cat}: ${items.join(", ")}`)
      .join("\n");
    return `Technical skills grouped by category:\n${blocks}\n\nSoft skills: ${softSkills.join(", ")}.`;
  }

  // Certifications
  if (q.includes("cert") || q.includes("cisco") || q.includes("hp life") || q.includes("microsoft") || q.includes("outlook") || q.includes("teams")) {
    return `Certifications:\n${certifications
      .map((c) => `• ${c.name} — ${c.issuer}`)
      .join("\n")}`;
  }

  // References
  if (q.includes("reference") || q.includes("referee")) {
    return `References:\n${references
      .map((r) => `• ${r.name} — ${r.company} (${r.phone})`)
      .join("\n")}`;
  }

  // Location / address
  if (q.includes("location") || q.includes("address") || q.includes("based") || q.includes("where") || q.includes("soshanguve")) {
    return `Based in ${profile.address}, South Africa.`;
  }

  // Objective / about
  if (q.includes("objective") || q.includes("summary") || q.includes("about") || q.includes("who is") || q.includes("bio") || q.includes("introduce")) {
    return profile.objective;
  }

  // Fallback — list a small summary and invite the user to refine
  return `Here's a quick summary of ${profile.fullName}:\n• ${profile.subtitle}\n• ${education[0]?.qualification ?? ""} at ${education[0]?.institution ?? ""}\n• ${projects.length} featured projects (ESP32, C++, embedded systems)\n• ${certifications.length} certifications (Cisco, HP LIFE, Microsoft)\n\nTry asking about "projects", "skills", "experience", "education", "certifications", or "contact" for more detail.`;
}

export async function POST(request: Request) {
  let body: ChatBody = {};
  try {
    body = (await request.json()) as ChatBody;
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON body" },
      { status: 400 }
    );
  }

  const question = (body.question ?? "").toString().slice(0, 500);
  const reply = answer(question);

  return NextResponse.json({
    answer: reply,
    context: CONTEXT.slice(0, 2000),
  });
}

export async function GET() {
  return NextResponse.json({
    name: "Ask AI About Nhlakanipho",
    method: "POST { question: string }",
    context: CONTEXT,
  });
}
