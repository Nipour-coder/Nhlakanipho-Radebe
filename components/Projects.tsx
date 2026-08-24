"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Github, Cpu, Code2, ChevronRight } from "lucide-react";
import { projects, projectTags } from "@/lib/data";
import type { ProjectTagType } from "@/lib/types";

const filterOptions: ("All" | ProjectTagType)[] = [
  "All",
  "Software",
  "Hardware",
];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<"All" | ProjectTagType>(
    "All"
  );

  const visibleProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((p) => p.tags.includes(activeFilter));
  }, [activeFilter]);

  const visibleTags = useMemo(() => {
    if (activeFilter === "All") return projectTags;
    return projectTags.filter((t) => t.type === activeFilter);
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="font-mono text-sm text-neon mb-2">
            <span className="text-emerald">$</span> cd projects &amp;&amp; ls
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="text-ink/80">//</span> Project{" "}
            <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-muted mt-3 max-w-2xl">
            Featured software and embedded hardware projects with direct GitHub
            links.
          </p>
        </motion.div>

        {/* Filter chips */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {filterOptions.map((opt) => (
            <button
              key={opt}
              onClick={() => setActiveFilter(opt)}
              className={`px-4 py-2 rounded-md text-sm font-mono transition-all ${
                activeFilter === opt
                  ? "bg-neon text-charcoal shadow-neon"
                  : "bg-charcoal-soft text-muted border border-neon/15 hover:border-neon/50 hover:text-neon"
              }`}
            >
              {opt}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {visibleProjects.map((project, idx) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
              className="group relative p-6 sm:p-7 rounded-2xl border border-neon/20 bg-charcoal-soft/70 backdrop-blur hover:border-neon/60 hover:shadow-neon transition-all overflow-hidden"
            >
              <div className="absolute inset-0 grid-bg opacity-30 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)] pointer-events-none" />
              <div className="relative">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="text-lg sm:text-xl font-bold leading-tight group-hover:text-neon transition-colors">
                    {project.title}
                  </h3>
                  {project.highlight && (
                    <span className="shrink-0 chip border-emerald/40 bg-emerald/5 text-emerald">
                      {project.highlight}
                    </span>
                  )}
                </div>

                <p className="text-ink/80 text-sm mb-2 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-muted text-sm mb-4 leading-relaxed">
                  {project.details}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="chip border-neon/20 bg-charcoal text-ink/85"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-mono text-neon hover:text-neon-soft transition-colors"
                  >
                    <Github size={16} />
                    View on GitHub
                    <ChevronRight
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                    />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Tag cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-6 sm:p-8 rounded-2xl border border-neon/20 bg-charcoal-soft/60"
        >
          <h3 className="font-mono text-xs uppercase tracking-widest text-muted mb-4 text-center">
            Hardware &amp; Software Tags
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {visibleTags.map((tag) => {
              const Icon = tag.type === "Hardware" ? Cpu : Code2;
              const colorClass =
                tag.type === "Hardware"
                  ? "border-emerald/30 text-emerald bg-emerald/5 hover:border-emerald"
                  : "border-neon/30 text-neon bg-neon/5 hover:border-neon";
              return (
                <span
                  key={`${tag.type}-${tag.label}`}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-md border transition-colors ${colorClass}`}
                >
                  <Icon size={12} />
                  {tag.label}
                </span>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
