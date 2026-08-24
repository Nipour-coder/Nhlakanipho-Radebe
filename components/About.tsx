"use client";

import { motion } from "framer-motion";
import { Sparkles, MapPin, Target, Mail, Phone, MessageCircle } from "lucide-react";
import { profile } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-neon mb-2">
            <span className="text-emerald">$</span> cat about.md
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-ink/80">//</span> About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 p-6 sm:p-8 rounded-2xl border border-neon/20 bg-charcoal-soft/60 backdrop-blur"
          >
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={16} className="text-neon" />
              <h3 className="font-mono text-sm text-neon">career.objective</h3>
            </div>
            <p className="text-ink/80 leading-relaxed text-base sm:text-lg">
              {profile.objective}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-neon/10">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-sm text-muted hover:text-neon transition-colors font-mono"
              >
                <Mail size={14} className="text-neon" />
                {profile.email}
              </a>
              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-2 text-sm text-muted hover:text-neon transition-colors font-mono"
              >
                <Phone size={14} className="text-neon" />
                {profile.phoneDisplay}
              </a>
              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-[#25D366] transition-colors font-mono"
              >
                <MessageCircle size={14} className="text-[#25D366]" />
                wa.me/27733310401
              </a>
              <div className="flex items-center gap-2 text-sm text-muted font-mono">
                <MapPin size={14} className="text-neon" />
                Soshanguve, 0152
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-2xl border border-emerald/20 bg-gradient-to-br from-emerald/5 to-neon/5"
          >
            <div className="flex items-center gap-2 mb-4">
              <Target size={16} className="text-emerald" />
              <h3 className="font-mono text-sm text-emerald">quick.facts</h3>
            </div>
            <ul className="space-y-3 text-sm font-mono">
              <li className="flex justify-between gap-2">
                <span className="text-muted">focus</span>
                <span className="text-ink">IoT &amp; Embedded</span>
              </li>
              <li className="flex justify-between gap-2">
                <span className="text-muted">degree</span>
                <span className="text-ink">CSE (Final Year)</span>
              </li>
              <li className="flex justify-between gap-2">
                <span className="text-muted">university</span>
                <span className="text-ink">TUT</span>
              </li>
              <li className="flex justify-between gap-2">
                <span className="text-muted">status</span>
                <span className="text-emerald">Open to work</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
