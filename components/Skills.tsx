"use client";

import { motion } from "framer-motion";
import {
  Cpu,
  Network,
  Code2,
  Wrench,
  Shield,
  Users,
  type LucideIcon,
} from "lucide-react";
import { skills, softSkills, skillCategories } from "@/lib/data";
import type { SkillCategory } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  Cpu,
  Network,
  Code2,
  Wrench,
  Shield,
  Users,
};

const accentMap: Record<SkillCategory, string> = {
  Programming: "from-neon/30 to-neon/0 border-neon/40",
  "Embedded & Hardware": "from-emerald/30 to-emerald/0 border-emerald/40",
  Networking: "from-neon/30 to-emerald/10 border-neon/30",
  "Systems & Support": "from-emerald/30 to-neon/10 border-emerald/30",
  Cybersecurity: "from-neon/30 to-neon/0 border-neon/40",
  "Soft Skills": "from-emerald/30 to-emerald/0 border-emerald/40",
};

const textMap: Record<SkillCategory, string> = {
  Programming: "text-neon",
  "Embedded & Hardware": "text-emerald",
  Networking: "text-neon",
  "Systems & Support": "text-emerald",
  Cybersecurity: "text-neon",
  "Soft Skills": "text-emerald",
};

export default function Skills() {
  return (
    <section
      id="skills"
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
            <span className="text-emerald">$</span> ls ./skills
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-ink/80">//</span> Technical &{" "}
            <span className="gradient-text">Soft Skills</span>
          </h2>
          <p className="text-muted mt-3 max-w-2xl">
            A categorized view of my core competencies across programming,
            embedded systems, networking, and IT support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat, idx) => {
            const items = skills.filter((s) => s.category === cat.key);
            const Icon = iconMap[cat.iconName] ?? Code2;
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                whileHover={{ y: -4 }}
                className={`group relative p-6 rounded-2xl border bg-gradient-to-b ${accentMap[cat.key]} backdrop-blur hover:shadow-neon transition-all overflow-hidden`}
              >
                <div className="absolute inset-0 bg-charcoal-soft/80 -z-10" />
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-md border ${accentMap[cat.key]} bg-charcoal`}
                  >
                    <Icon size={18} className={textMap[cat.key]} />
                  </div>
                  <h3 className={`font-mono text-sm ${textMap[cat.key]}`}>
                    {cat.title}
                  </h3>
                </div>
                <p className="text-xs text-muted mb-4 font-mono">
                  {cat.blurb}
                </p>
                <div className="flex flex-wrap gap-2">
                  {items.map((s) => (
                    <span
                      key={s.name}
                      className="chip border-neon/20 bg-charcoal text-ink/85 hover:border-neon/60 hover:text-neon transition-colors"
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}

          {/* Soft Skills card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: skillCategories.length * 0.05 }}
            whileHover={{ y: -4 }}
            className="group relative p-6 rounded-2xl border bg-gradient-to-b from-emerald/30 to-emerald/0 border-emerald/40 backdrop-blur hover:shadow-neon-emerald transition-all overflow-hidden sm:col-span-2 lg:col-span-1"
          >
            <div className="absolute inset-0 bg-charcoal-soft/80 -z-10" />
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-md border border-emerald/40 bg-charcoal">
                <Users size={18} className="text-emerald" />
              </div>
              <h3 className="font-mono text-sm text-emerald">Soft Skills</h3>
            </div>
            <p className="text-xs text-muted mb-4 font-mono">
              How I collaborate and solve problems.
            </p>
            <ul className="space-y-2">
              {softSkills.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-2 text-sm text-ink/90"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                  {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
