"use client";

import { motion } from "framer-motion";
import { GraduationCap, School, BookOpen, Calendar } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section
      id="education"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-neon mb-2">
            <span className="text-emerald">$</span> cat education.json
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-ink/80">//</span>{" "}
            <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, idx) => {
            const Icon = edu.institution.toLowerCase().includes("university")
              ? GraduationCap
              : School;
            return (
              <motion.article
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -3 }}
                className="group relative p-6 sm:p-8 rounded-2xl border border-neon/20 bg-charcoal-soft/60 hover:border-neon/60 hover:shadow-neon transition-all overflow-hidden"
              >
                <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] pointer-events-none" />
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-md bg-neon/10 text-neon border border-neon/30 shrink-0">
                      <Icon size={22} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg sm:text-xl font-bold leading-tight mb-1">
                        {edu.institution}
                      </h3>
                      <p className="text-neon font-medium text-sm sm:text-base">
                        {edu.qualification}
                      </p>
                      <p className="flex items-center gap-1.5 text-xs text-muted mt-1 font-mono">
                        <Calendar size={12} /> {edu.period}
                      </p>
                    </div>
                  </div>

                  {edu.description && (
                    <div className="flex items-start gap-2 text-sm text-ink/80 leading-relaxed">
                      <BookOpen
                        size={14}
                        className="text-muted shrink-0 mt-1"
                      />
                      <p>{edu.description}</p>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
