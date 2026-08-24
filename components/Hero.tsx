"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  MessageCircle,
  Cpu,
  Wifi,
  CircuitBoard,
} from "lucide-react";
import Link from "next/link";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20"
    >
      {/* Decorative grid + glow */}
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-emerald/15 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute inset-0 scanlines pointer-events-none" />

      {/* Floating icons */}
      <motion.div
        className="absolute top-32 left-10 text-neon/30 hidden lg:block"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <Cpu size={42} />
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-16 text-emerald/30 hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <Wifi size={38} />
      </motion.div>
      <motion.div
        className="absolute top-1/2 right-24 text-neon/20 hidden lg:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      >
        <CircuitBoard size={46} />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald/30 bg-emerald/5 mb-6 font-mono text-xs"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald" />
          </span>
          <span className="text-emerald">Available for internship / ICT projects</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-mono text-sm sm:text-base text-neon mb-4 neon-text"
        >
          &gt; hi, my name is
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
        >
          <span className="gradient-text">{profile.fullName}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl font-semibold text-ink/90 mb-6"
        >
          {profile.subtitle}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-10 text-balance font-mono"
        >
          <span className="text-emerald">$</span> {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10"
        >
          <Link
            href="#projects"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-md bg-neon text-charcoal font-mono font-semibold hover:bg-neon-soft transition-all hover:shadow-neon w-full sm:w-auto justify-center"
          >
            <span>View Projects</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <a
            href={profile.cvDownloadPath}
            download
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-md border border-emerald/40 bg-emerald/5 text-emerald font-mono font-medium hover:bg-emerald/10 hover:border-emerald transition-all w-full sm:w-auto justify-center"
          >
            <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            <span>Download CV</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-md border border-ink/15 bg-charcoal-soft text-ink font-mono font-medium hover:border-neon/60 hover:text-neon transition-all w-full sm:w-auto justify-center"
          >
            <Github size={18} />
            <span>GitHub Profile</span>
          </a>
          <a
            href={profile.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#25D366]/40 bg-[#25D366]/10 text-[#25D366] font-mono font-medium hover:bg-[#25D366]/20 hover:border-[#25D366] transition-all w-full sm:w-auto justify-center"
          >
            <MessageCircle size={18} />
            <span>Chat on WhatsApp</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted hover:text-neon transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-muted hover:text-neon transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
