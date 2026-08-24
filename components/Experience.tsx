"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  CheckCircle2,
  GraduationCap,
  School,
  Calendar,
} from "lucide-react";
import { experiences } from "@/lib/data";
import type { Experience as ExperienceType } from "@/lib/types";

function iconFor(item: ExperienceType) {
  if (item.type === "work") return Briefcase;
  if (item.qualification?.toLowerCase().includes("matric")) return School;
  return GraduationCap;
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="font-mono text-sm text-neon mb-2">
            <span className="text-emerald">$</span> git log --oneline
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-ink/80">//</span> Experience &amp;{" "}
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted mt-3 max-w-2xl">
            A vertical timeline of my professional experience and academic
            journey.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon/60 via-emerald/40 to-transparent" />

          <div className="space-y-10 sm:space-y-14">
            {experiences.map((item, idx) => {
              const Icon = iconFor(item);
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="relative pl-12 sm:pl-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-2 flex h-8 w-8 items-center justify-center rounded-full border border-neon/40 bg-charcoal shadow-neon z-10">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        item.type === "work" ? "bg-emerald" : "bg-neon"
                      } animate-pulse`}
                    />
                  </div>

                  <div
                    className={`sm:flex sm:items-start sm:gap-8 ${
                      isLeft ? "" : "sm:flex-row-reverse"
                    }`}
                  >
                    <div className="hidden sm:block sm:flex-1" />

                    <motion.div
                      whileHover={{ y: -3 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="p-5 sm:p-6 rounded-2xl border border-neon/20 bg-charcoal-soft/70 backdrop-blur hover:border-neon/60 hover:shadow-neon transition-all"
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div
                          className={`p-2 rounded-md shrink-0 ${
                            item.type === "work"
                              ? "bg-emerald/10 text-emerald"
                              : "bg-neon/10 text-neon"
                          }`}
                        >
                          <Icon size={18} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                            {item.type === "work" ? "work" : "education"}
                          </p>
                          <h3 className="text-lg sm:text-xl font-bold leading-tight">
                            {item.type === "work" ? item.role : item.qualification}
                          </h3>
                          <p className="text-neon font-medium text-sm">
                            {item.company}
                          </p>
                          <p className="flex items-center gap-1.5 text-xs text-muted mt-1 font-mono">
                            <Calendar size={12} /> {item.period}
                          </p>
                        </div>
                      </div>

                      {item.description && (
                        <p className="text-muted text-sm mb-4 leading-relaxed">
                          {item.description}
                        </p>
                      )}

                      {item.achievements && (
                        <ul className="space-y-2">
                          {item.achievements.map((a, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2 text-sm text-ink/85"
                            >
                              <CheckCircle2
                                size={15}
                                className="text-emerald shrink-0 mt-0.5"
                              />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
