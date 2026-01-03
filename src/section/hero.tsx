"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaBriefcase } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="h-[120vh] flex items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center gap-6 text-center max-w-full">
        <div className="relative w-32 h-32 sm:w-36 sm:h-26 border-8 border-white rounded-full">
          <Image
            src="/assets/alwi.png"
            alt="Alwi Main Image"
            fill
            className="object-cover rounded-full"
          />
        </div>
        <h1 className="text-[#425849] text-3xl md:text-5xl font-bold max-w-3xl">
          Bantu bisnismu tumbuh lewat website modern & SEO friendly
        </h1>

        <p className={`text-base sm:text-lg text-neutral-600 max-w-xl`}>
          Saya Alwi, Web Developer dengan 2+ tahun pengalaman membangun website yang modern dan
          intuitive.
        </p>

        {/* CTA */}
        <div className={`flex flex-col md:flex-row justify-center gap-4 md:gap-6 w-full`}>
          <Button
            size="lg"
            className="py-6 w-full sm:w-auto hover:shadow-xl border-4 border-white rounded-full"
            onClick={() => window.open("https://wa.me/6281361296979")}>
            <span className="flex items-center gap-2">
              Diskusi Project <FaWhatsapp />
            </span>
          </Button>
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="py-6 w-full sm:w-auto hover:shadow-xl border-4 rounded-full">
            <Link href="#work" className="flex items-center gap-2">
              Lihat hasil kerja <FaBriefcase />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
