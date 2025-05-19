import {useState} from "react";
import ProjectCard from "@/app/components/Project-Section/ProjectCard";
import ProjectModal from "@/app/components/Project-Section/ProjectModal";

type Project = {
  title: string;
  description: string;
  image: string;
  github?: string;
  tech: string[];
  images: string[];
};

const ProjectsSection = ({projects}: { projects: Project[] }) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleCardClick = (idx: number) => {
    setSelected(idx);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} onClick={() => handleCardClick(idx)}/>
        ))}
      </div>

      {selected !== null && (
        <ProjectModal
          isOpen={true}
          closeModal={() => setSelected(null)}
          {...projects[selected]}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
