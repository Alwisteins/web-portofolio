"use client";

import { Card, CardContent } from "@/components/ui/card";
import { LayoutTemplate, BriefcaseBusiness, Zap, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeUp, container } from "@/animation/fadeup";

const principles = [
  {
    title: "Struktur Mudah Dipahami",
    icon: <LayoutTemplate className="w-12 h-12 text-[#425849]" />,
  },
  {
    title: "Tampilan Profesional",
    icon: <BriefcaseBusiness className="w-12 h-12 text-[#425849]" />,
  },
  {
    title: "Cepat & SEO-Friendly",
    icon: <Zap className="w-12 h-12 text-[#425849]" />,
  },
  {
    title: "Proses Kerja Transparan",
    icon: <MessageCircle className="w-12 h-12 text-[#425849]" />,
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 px-10 min-h-screen flex flex-col justify-center">
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
          Partner Website untuk Bisnis Lokal
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-neutral-600 max-w-3xl text-base sm:text-lg">
          Saya Alwi, web developer yang fokus membantu bisnis lokal dan UMKM membangun website yang
          jelas, rapi, dan siap digunakan sebagai alat bisnis.
        </motion.p>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-neutral-600 max-w-3xl text-base sm:text-lg">
          Saya percaya website bukan sekadar tampilan, tapi bagian dari strategi komunikasi dan
          penjualan bisnis Anda.
        </motion.p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-150px" }}
        className="flex justify-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-center text-base md:text-lg px-3 py-1 bg-white w-fit rounded-lg shadow-md text-slate-600">
          Yang saya prioritaskan:
        </motion.p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-150px" }}
        className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {principles.map((principle, index) => (
          <motion.div key={index} variants={fadeUp} initial="hidden" whileInView="show">
            <Card className="p-6">
              <CardContent className="p-0 flex gap-4 items-center h-full">
                {principle.icon}
                <p>{principle.title}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
