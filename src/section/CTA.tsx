"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { FaWhatsapp, FaLinkedin } from "react-icons/fa";

export default function CTA() {
  return (
    <section id="cta" className="py-16 px-10">
      <div className="flex flex-col items-center text-center gap-4 mb-6">
        <h2 className="text-[#425849] text-2xl md:text-4xl font-bold">
          Siap membuat website bisnismu?
        </h2>
        <p className="text-neutral-600 max-w-3xl text-base sm:text-lg">
          Diskusikan kebutuhan website bisnis Anda dan dapatkan solusi yang sesuai dengan tujuan dan
          karakter usaha Anda.
        </p>
        <Button
          size="lg"
          className="py-6 w-full sm:w-auto hover:shadow-xl border-4 border-white rounded-full"
          onClick={() => window.open("https://wa.me/6281361296979")}>
          <span className="flex items-center gap-2">
            Diskusi Project <FaWhatsapp />
          </span>
        </Button>
      </div>
    </section>
  );
}
