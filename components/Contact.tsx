"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  ChevronDown,
  User,
  Award,
  Download,
} from "lucide-react";
import {
  references,
  certifications,
  profile,
} from "@/lib/data";

export default function Contact() {
  const [referencesOpen, setReferencesOpen] = useState(false);
  const [certsOpen, setCertsOpen] = useState(true);

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-neon mb-2">
            <span className="text-emerald">$</span> ./contact.sh
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-ink/80">//</span> Get In{" "}
            <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted mt-3 max-w-2xl">
            Open to internship and ICT project opportunities. Reach out via
            any channel below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative p-6 sm:p-10 rounded-3xl border border-neon/20 bg-charcoal-soft/60 backdrop-blur overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-neon/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald/10 rounded-full blur-3xl" />

          <div className="relative">
            {/* Contact grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-3 p-4 rounded-xl border border-neon/20 bg-charcoal-soft/60 hover:border-neon hover:shadow-neon transition-all"
              >
                <div className="p-2.5 rounded-md bg-neon/10 text-neon border border-neon/30 shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-muted uppercase tracking-widest font-mono">
                    Email
                  </p>
                  <p className="text-sm text-ink truncate font-mono">
                    {profile.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="group flex items-center gap-3 p-4 rounded-xl border border-neon/20 bg-charcoal-soft/60 hover:border-neon hover:shadow-neon transition-all"
              >
                <div className="p-2.5 rounded-md bg-neon/10 text-neon border border-neon/30 shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-muted uppercase tracking-widest font-mono">
                    Phone
                  </p>
                  <p className="text-sm text-ink font-mono">
                    {profile.phoneDisplay}
                  </p>
                </div>
              </a>

              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-4 rounded-xl border border-[#25D366]/30 bg-[#25D366]/5 hover:border-[#25D366] hover:shadow-[0_0_20px_rgba(37,211,102,0.25)] transition-all"
              >
                <div className="p-2.5 rounded-md bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-muted uppercase tracking-widest font-mono">
                    WhatsApp
                  </p>
                  <p className="text-sm text-ink font-mono truncate">
                    wa.me/27733310401
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-xl border border-emerald/20 bg-charcoal-soft/60">
                <div className="p-2.5 rounded-md bg-emerald/10 text-emerald border border-emerald/30 shrink-0">
                  <MapPin size={18} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-muted uppercase tracking-widest font-mono">
                    Location
                  </p>
                  <p className="text-sm text-ink font-mono">
                    Soshanguve, 0152
                  </p>
                </div>
              </div>
            </div>

            {/* Direct social links */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neon/30 bg-charcoal-soft/60 text-muted hover:text-neon hover:border-neon transition-colors font-mono text-sm"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-neon/30 bg-charcoal-soft/60 text-muted hover:text-neon hover:border-neon transition-colors font-mono text-sm"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href={profile.cvDownloadPath}
                download
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-emerald/30 bg-emerald/5 text-emerald hover:border-emerald transition-colors font-mono text-sm"
              >
                <Download size={16} /> Download CV
              </a>
            </div>

            {/* WhatsApp primary CTA */}
            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 w-full px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#1DA851] text-white font-semibold text-base sm:text-lg transition-all hover:scale-[1.01] shadow-[0_0_24px_rgba(37,211,102,0.35)]"
            >
              <MessageCircle
                size={22}
                className="group-hover:scale-110 transition-transform"
              />
              <span>Direct Contact on WhatsApp</span>
            </a>

            {/* Certifications */}
            <div className="mt-6">
              <button
                onClick={() => setCertsOpen(!certsOpen)}
                aria-expanded={certsOpen}
                aria-controls="certs-panel"
                className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl border border-neon/20 bg-charcoal-soft/60 hover:border-neon/60 transition-colors text-left"
              >
                <span className="font-mono text-sm flex items-center gap-2">
                  <Award size={16} className="text-neon" />
                  Certifications
                </span>
                <motion.span
                  animate={{ rotate: certsOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={18} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {certsOpen && (
                  <motion.div
                    id="certs-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <ul className="pt-4 space-y-2">
                      {certifications.map((c) => (
                        <li
                          key={c.id}
                          className="flex items-start gap-3 p-3 rounded-lg border border-neon/15 bg-charcoal-soft/40"
                        >
                          <Award
                            size={14}
                            className="text-emerald shrink-0 mt-1"
                          />
                          <div className="min-w-0">
                            <p className="text-sm text-ink font-medium leading-tight">
                              {c.name}
                            </p>
                            <p className="text-xs text-muted font-mono">
                              {c.issuer}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Collapsible References */}
            <div className="mt-4">
              <button
                onClick={() => setReferencesOpen(!referencesOpen)}
                aria-expanded={referencesOpen}
                aria-controls="references-panel"
                className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl border border-emerald/20 bg-charcoal-soft/60 hover:border-emerald/60 transition-colors text-left"
              >
                <span className="font-mono text-sm flex items-center gap-2">
                  <User size={16} className="text-emerald" />
                  References
                </span>
                <motion.span
                  animate={{ rotate: referencesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={18} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {referencesOpen && (
                  <motion.div
                    id="references-panel"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 space-y-3">
                      {references.map((ref) => (
                        <div
                          key={ref.id}
                          className="flex items-start gap-3 p-4 rounded-xl border border-emerald/20 bg-charcoal-soft/40"
                        >
                          <div className="p-2 rounded-md bg-emerald/10 text-emerald border border-emerald/30 shrink-0">
                            <User size={16} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-sm sm:text-base text-ink">
                              {ref.name}
                            </p>
                            <p className="text-xs sm:text-sm text-emerald font-mono">
                              {ref.company}
                            </p>
                            <a
                              href={`tel:${ref.phone}`}
                              className="inline-flex items-center gap-1 text-xs text-muted hover:text-neon mt-1 font-mono"
                            >
                              <Phone size={12} /> {ref.phone}
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
