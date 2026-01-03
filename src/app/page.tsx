import Hero from "@/section/hero";
import Work from "@/section/work";
import Service from "@/section/service";
import About from "@/section/about";
import CTA from "@/section/CTA";

export default function Page() {
  return (
    <main className="bg-[#FFEFDF]">
      <Hero />
      <Work />
      <Service />
      <About />
      <CTA />
    </main>
  );
}
