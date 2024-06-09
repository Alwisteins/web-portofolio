import { ProjectsList } from "@/data/projects";
import Image from "next/image";

interface CardProjectProps {
  projects: ProjectsList[];
}

export const CardsProject = ({ projects }: CardProjectProps): JSX.Element => {
  return (
    <div className="flex flex-col sm:flex-row sm:space-x-10 space-y-3 sm:space-y-0">
      {projects.map((project) => (
        <div
          key={project.name}
          className="w-80 sm:w-[25rem] p-5 space-y-3 bg-white rounded-xl border border-slate-200"
        >
          <Image
            src={project.image}
            alt={project.name}
            width={500}
            height={80}
          />
          <div className="flex justify-between">
            <h1 className="font-semibold text-lg sm:text-xl">{project.name}</h1>
            <ul className="flex space-x-3 text-blue-600">
              <li>
                <a href={project.source}>source</a>
              </li>
              <li>
                <a href={project.demo}>demo</a>
              </li>
            </ul>
          </div>
          <p className="text-sm text-justify">{project.description}</p>
          <div className="flex space-x-2">
            {project.tech.map((src, index) => (
              <Image
                src={src}
                alt={`${index}`}
                width={20}
                height={20}
                key={index}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
