import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { projects } from "@/data/projects";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function Work() {
  return (
    <section id="work" className="py-16 px-10">
      <div className="flex flex-col items-center text-center gap-4 mb-6">
        <h2 className="text-[#425849] text-2xl md:text-4xl font-bold">Featured Work</h2>
        <p className="text-neutral-600 max-w-3xl text-base sm:text-lg">
          Beberapa website yang saya bangun untuk bantu bisnis tampil profesional dan mudah
          ditemukan di Google.
        </p>
      </div>
      <div
        className={`${poppins.className} grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center`}>
        {projects.map((project) => (
          <Link
            href={`/work/${project.slug}`}
            key={project.slug}
            className="w-full max-w-xl space-y-4 cursor-pointer group">
            <Image
              src={project.image}
              alt={project.title}
              width={500}
              height={500}
              className="group-hover:scale-95 transition-transform w-full rounded-2xl border border-white object-cover"
            />

            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
              <h3 className="text-lg font-medium leading-snug sm:w-1/2">{project.title}</h3>

              <div className="flex flex-wrap gap-2 text-xs text-neutral-600">
                <span className="px-3 py-1 rounded-full bg-white/70">{project.category}</span>
                <span className="px-3 py-1 rounded-full bg-white/70">{project.businessType}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
