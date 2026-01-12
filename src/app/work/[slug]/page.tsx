"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type Props = {
  params: {
    slug: string;
  };
};

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const imageReveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function WorkDetail({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="show"
      className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <motion.div variants={fadeUp} className="my-6">
        <Link
          href={"/"}
          className="inline-flex items-center gap-2 font-medium hover:underline underline-offset-4">
          <ArrowLeft /> Kembali
        </Link>
      </motion.div>

      <motion.div variants={imageReveal} className="mb-10">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={700}
          className="rounded-2xl w-full object-cover"
        />
      </motion.div>

      <motion.div variants={fadeUp} className="space-y-6">
        <h1 className="text-3xl md:text-4xl font-bold text-[#425849]">{project.title}</h1>

        <div className="flex flex-wrap gap-3 text-sm text-neutral-700">
          <span className="px-4 py-1 rounded-full bg-neutral-100">{project.category}</span>
          <span className="px-4 py-1 rounded-full bg-neutral-100">{project.businessType}</span>
        </div>

        <p className="text-neutral-600 leading-relaxed max-w-3xl">{project.description}</p>

        <div className="flex flex-col md:flex-row gap-6">
          {project.demoLink && (
            <Link
              href={project.demoLink}
              target="_blank"
              className="inline-flex items-center gap-2 text-[#425849] font-medium underline underline-offset-4">
              View Live Demo →
            </Link>
          )}

          <Button
            size="lg"
            className="py-6 w-full sm:w-auto hover:shadow-xl border-4 border-white rounded-full"
            onClick={() => window.open("https://wa.me/6285226038821")}>
            <span className="flex items-center gap-2">
              Diskusi Project <IoLogoWhatsapp />
            </span>
          </Button>
        </div>
      </motion.div>
    </motion.section>
  );
}
