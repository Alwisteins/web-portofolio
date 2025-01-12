import { CardsProject } from "@/components/CardProject";
import { projectsList } from "@/data/projects";

export default function Projects() {
  return (
    <div id='projects' className="py-16 px-10 space-y-10">
      <h1 className="text-center sm:text-5xl text-3xl font-bold">
        Projects
      </h1>
      <CardsProject projects={projectsList} />
    </div>
  );
}
