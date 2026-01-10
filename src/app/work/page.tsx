"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import { motion } from "framer-motion";
import { fadeUp, container } from "@/animation/fadeup";

export default function Work() {
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  // Gunakan useMemo untuk memastikan filtering selalu fresh
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchType = typeFilter === "all" || project.type === typeFilter;
      const matchCategory = categoryFilter === "all" || project.category === categoryFilter;

      return matchType && matchCategory;
    });
  }, [typeFilter, categoryFilter]);

  const resetFilters = () => {
    setTypeFilter("all");
    setCategoryFilter("all");
  };

  return (
    <section id="work" className="py-16 px-6 sm:px-10">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-150px" }}
        className="flex flex-col items-center text-center gap-4 mb-10">
        <motion.h2 variants={fadeUp} className="text-[#425849] text-2xl md:text-4xl font-bold">
          Featured Work
        </motion.h2>
        <motion.p variants={fadeUp} className="text-neutral-600 max-w-3xl text-base sm:text-lg">
          Beberapa website yang saya bangun untuk membantu bisnis tampil profesional dan berkembang
          secara digital.
        </motion.p>
      </motion.div>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10 w-full max-w-3xl mx-auto">
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 rounded-full border text-sm text-neutral-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#425849]">
          <option value="all">All Types</option>
          <option value="website">Website</option>
          <option value="design">Design</option>
        </select>

        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="w-full sm:w-1/2 px-4 py-2 rounded-full border text-sm text-neutral-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#425849]">
          <option value="all">All Categories</option>
          <option value="Business Landing Pages">Business Landing Pages</option>
          <option value="Business Websites">Business Websites</option>
          <option value="Web System & Dashboard">Web System & Dashboard</option>
        </select>
      </div>

      <div className="flex justify-center items-center gap-4 mb-6">
        <p className="text-sm text-neutral-600">
          Menampilkan {filteredProjects.length} dari {projects.length} project
        </p>
        {(typeFilter !== "all" || categoryFilter !== "all") && (
          <button
            onClick={resetFilters}
            className="text-sm text-[#425849] underline hover:no-underline">
            Reset Filter
          </button>
        )}
      </div>

      <motion.div
        key={`${typeFilter}-${categoryFilter}`}
        layout
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-150px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project) => (
            <motion.div layout key={project.slug} variants={fadeUp} className="w-full max-w-xl">
              <Link href={`/work/${project.slug}`} className="space-y-4 group block">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full rounded-2xl border border-white object-cover transition-transform group-hover:scale-95"
                />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <h3 className="text-lg font-medium leading-snug sm:w-1/2">{project.title}</h3>

                  <div className="flex flex-wrap gap-2 text-xs text-neutral-600">
                    <span className="px-3 py-1 rounded-full bg-white/70">{project.type}</span>
                    <span className="px-3 py-1 rounded-full bg-white/70">{project.category}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))
        ) : (
          <motion.div variants={fadeUp} className="col-span-full text-center py-12">
            <p className="text-neutral-500 mb-4">Tidak ada project yang sesuai dengan filter.</p>
            <button
              onClick={resetFilters}
              className="px-6 py-2 bg-[#425849] text-white rounded-full hover:bg-[#364539] transition-colors">
              Reset Filter
            </button>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
