"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

type Props = {
  params: {
    slug: string;
  };
};

export default function WorkDetail({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <section className="py-16 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="my-6">
        <Link
          href={"/"}
          className="inline-flex items-center gap-2 font-medium hover:underline underline-offset-4">
          <ArrowLeft /> Kembali
        </Link>
      </div>
      <div className="mb-10">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={700}
          className="rounded-2xl w-full object-cover"
        />
      </div>

      <div className="space-y-6">
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
            onClick={() => window.open("https://wa.me/6281361296979")}>
            <span className="flex items-center gap-2">
              Diskusi Project <FaWhatsapp />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
