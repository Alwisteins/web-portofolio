"use client";

import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";
import { services } from "@/data/services";
import { motion } from "framer-motion";
import { fadeUp, container } from "@/animation/fadeup";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Service() {
  const openWhatsApp = (packageName: string) => {
    const phoneNumber = "6281361296979";

    const message = `Halo, Saya tertarik untuk mendiskusikan paket layanan *${packageName}*. Bisa dijelaskan lebih detail terkait scope, timeline, dan estimasi pengerjaannya? Terima kasih.`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

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
          Solusi web lengkap untuk bantu bisnismu tumbuh.
        </motion.p>
      </motion.div>
      <div className="flex justify-center">
        <Tabs
          defaultValue={services[0].category}
          className="w-full flex flex-col items-center justify-center">
          <TabsList className="space-x-6 w-fit h-full">
            {services.map((service) => (
              <TabsTrigger key={service.category} value={service.category} className="py-3 px-6">
                {service.category}
              </TabsTrigger>
            ))}
          </TabsList>
          <div className="mt-3">
            {services.map((service) => (
              <TabsContent
                key={service.category}
                value={service.category}
                className="flex flex-col items-center gap-10">
                <p className="max-w-2xl text-center text-gray-600">{service.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                  {service.packages.map((pkg, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUp}
                      initial="hidden"
                      animate="show"
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      className="relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-xl transition-all duration-300">
                      <div className="mb-5">
                        <h3 className="text-xl font-semibold text-gray-900">{pkg.name}</h3>
                        <p className="mt-1 text-sm text-gray-500">Cocok untuk {pkg.best_for}</p>
                      </div>
                      <div className="flex-1">
                        <p className="mb-3 text-sm font-medium text-gray-700">
                          {pkg.isCustom ? "Bisa include:" : "Include:"}
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                          {pkg.include.map((item, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-blue-500">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <p className="text-3xl font-bold text-gray-900">{pkg.price}</p>
                        <p className="text-sm text-gray-500">/ project</p>
                      </div>
                      <div className="mt-auto pt-6">
                        <Button
                          size="lg"
                          className="w-full rounded-xl hover:shadow-lg transition-all"
                          onClick={() => openWhatsApp(pkg.name)}>
                          Diskusi via WhatsApp
                          <FaWhatsapp className="ml-2 text-lg" />
                        </Button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </div>
        </Tabs>
      </div>
    </section>
  );
}
