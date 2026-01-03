"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { fadeUp, container } from "@/animation/fadeup";

export default function Work() {
  return (
    <section id="work" className="py-16 px-10">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-150px" }}
        className="flex flex-col items-center text-center gap-4 mb-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-[#425849] text-2xl md:text-4xl font-bold">
          Featured Work
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-neutral-600 max-w-3xl text-base sm:text-lg">
          Beberapa website yang saya bangun untuk bantu bisnis tampil profesional dan mudah
          ditemukan di Google.
        </motion.p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-150px" }}
        className={`grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center`}>
        {projects.map((project) => (
          <motion.div key={project.slug} variants={fadeUp} className="w-full max-w-xl">
            <Link href={`/work/${project.slug}`} className="space-y-4 cursor-pointer group block">
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={500}
                className="group-hover:scale-95 transition-transform w-full rounded-2xl border border-white object-cover"
              />

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <h3 className="text-lg font-medium leading-snug sm:w-1/2">{project.title}</h3>

                <div className="flex flex-wrap gap-2 text-xs text-neutral-600">
                  <span className="px-3 py-1 rounded-full bg-white/70">{project.category}</span>
                  <span className="px-3 py-1 rounded-full bg-white/70">{project.businessType}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
