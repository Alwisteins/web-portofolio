"use client";

import { Poppins } from "next/font/google";
import { Button } from "@/components/ui/button";
import { FaWhatsapp } from "react-icons/fa";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

const services = [
  {
    title: "Website Company Profile UMKM",
    description:
      "Website profesional sebagai identitas online bisnis Anda agar terlihat lebih terpercaya dan mudah ditemukan calon pelanggan.",
    features: [
      "1–5 halaman (Beranda, Tentang, Layanan, Kontak)",
      "Desain responsif (HP, Tablet, Laptop)",
      "Domain & hosting siap pakai (1 tahun)",
      "Integrasi WhatsApp & Google Maps",
      "Basic SEO agar mudah ditemukan di Google",
    ],
    highlight: "Solusi tepat untuk UMKM yang baru mulai go online",
  },
  {
    title: "Website Toko & Jasa Lokal",
    description:
      "Website informatif untuk menampilkan produk atau jasa sekaligus memudahkan pelanggan menghubungi dan datang ke lokasi usaha.",
    features: [
      "Halaman layanan / produk lengkap",
      "Galeri foto produk atau hasil kerja",
      "Google Maps & jam operasional",
      "Form pemesanan atau konsultasi",
      "Optimasi SEO lokal (area sekitar bisnis)",
    ],
    highlight: "Membantu pelanggan datang, order, dan percaya",
  },
  {
    title: "Landing Page Promosi",
    description:
      "Halaman khusus yang dirancang untuk meningkatkan respon dan penjualan dari iklan atau promosi tertentu.",
    features: [
      "1 halaman fokus konversi",
      "Copywriting persuasif (CTA jelas)",
      "Integrasi WhatsApp / form order",
      "Basic SEO agar mudah ditemukan di Google",
      "Siap digunakan untuk iklan Instagram & Facebook",
    ],
    highlight: "Cocok untuk promo, produk baru, atau campaign iklan",
  },
  {
    title: "Redesign Website Lama",
    description:
      "Peremajaan website lama agar tampil lebih modern, cepat, dan nyaman diakses dari berbagai perangkat.",
    features: [
      "Desain ulang tampilan website",
      "Optimasi mobile & user experience",
      "Peningkatan kecepatan website",
      "Perapihan struktur konten",
      "Basic SEO & keamanan dasar",
    ],
    highlight: "Website lama jadi terlihat profesional kembali",
  },
];

export default function Service() {
  return (
    <section id="services" className="py-16 px-10">
      <div className="flex flex-col items-center text-center gap-4 mb-6">
        <h2 className="text-[#425849] text-2xl md:text-4xl font-bold">Services</h2>
        <p className="text-neutral-600 max-w-3xl text-base sm:text-lg">
          Layanan website dengan struktur jelas, tampilan profesional, dan performa optimal.
        </p>
      </div>
      <div className={`${poppins.className} grid gap-8 md:grid-cols-2 lg:grid-cols-3`}>
        {services.map((service, index) => (
          <div
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
          </div>
        ))}
      </div>
    </section>
  );
}
