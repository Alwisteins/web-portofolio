import { Card, CardContent } from "@/components/ui/card";
import { LayoutTemplate, BriefcaseBusiness, Zap, MessageCircle } from "lucide-react";

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
    <section id="about" className="py-16 px-10 min-h-screen">
      <div className="flex flex-col items-center text-center gap-4 mb-6">
        <h2 className="text-[#425849] text-2xl md:text-4xl font-bold">
          Partner Website untuk Bisnis Lokal
        </h2>
        <p className="text-neutral-600 max-w-3xl text-base sm:text-lg">
          Saya Alwi, web developer yang fokus membantu bisnis lokal dan UMKM membangun website yang
          jelas, rapi, dan siap digunakan sebagai alat bisnis.
        </p>
        <p className="text-neutral-600 max-w-3xl text-base sm:text-lg">
          Saya percaya website bukan sekadar tampilan, tapi bagian dari strategi komunikasi dan
          penjualan bisnis Anda.
        </p>
      </div>
      <div className="flex justify-center">
        <p className="text-center text-base md:text-lg px-3 py-1 bg-white w-fit rounded-lg shadow-md text-slate-600">
          Yang saya prioritaskan:
        </p>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {principles.map((principle, index) => (
          <Card key={index} className="p-6">
            <CardContent className="p-0 flex gap-4 items-center h-full">
              {principle.icon}
              <p>{principle.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
