"use client";

import { Github, Linkedin, MessageCircle, Heart } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-neon/15 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-muted font-mono">
          © {year}{" "}
          <span className="text-neon">{profile.fullName}</span>. All rights
          reserved.
        </p>
        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted hover:text-neon transition-colors"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted hover:text-neon transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted hover:text-[#25D366] transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle size={18} />
          </a>
        </div>
        <p className="font-mono text-xs text-muted flex items-center gap-1.5">
          Built with <Heart size={12} className="text-emerald" /> using Next.js,
          Tailwind &amp; Framer Motion
        </p>
      </div>
    </footer>
  );
}
