"use client";

import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { services } from "@/data/services";
import { motion } from "framer-motion";
import { fadeUp, container } from "@/animation/fadeup";

export default function Service() {
  return (
    <section id="services" className="py-16 px-10">
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
          Services
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          className="text-neutral-600 max-w-3xl text-base sm:text-lg">
          Layanan website dengan struktur jelas, tampilan profesional, dan performa optimal.
        </motion.p>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-150px" }}
        className={`grid gap-8 md:grid-cols-2 lg:grid-cols-3`}>
        {services.map((service, index) => (
          <motion.div
            variants={fadeUp}
            key={index}
            className="bg-gradient-to-tr from-white/50 via-white to-white/60 backdrop-blur-xl rounded-xl shadow-sm p-6 hover:shadow-md transition h-full flex flex-col">
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>

            <p className="text-gray-600 mb-4">{service.description}</p>

            <ul className="text-sm text-gray-700 mb-4 space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-green-600">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <p className="text-sm font-medium text-blue-600">{service.highlight}</p>
            <div className="mt-auto flex justify-end">
              <Button
                size={"lg"}
                className="hover:shadow-xl border-4 border-white rounded-full"
                onClick={() => window.open("https://wa.me/6281361296979")}>
                Diskusi <FaWhatsapp />
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
