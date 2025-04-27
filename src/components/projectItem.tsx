import "./components.css";
import { IconArrowRight } from "@tabler/icons-react";
import React from "react";

interface ProjectItemProps {
  indexNum: string;
  projectName: string;
  projectTags?: string[];
  link?: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  indexNum,
  projectName,
  projectTags,
  link,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <a
        className="group grid grid-cols-[0.5fr_1fr_1fr_0.5fr] items-center"
        href={link}
      >
        <div className="project-num text-[var(--tertiary)] transition">
          PROJECT /{indexNum}
        </div>
        <div className="project-name text-[var(--text)] group-hover:scale-105 transition ">
          {projectName.toUpperCase()} .
        </div>
        <div className="flex justify-end">
          {projectTags?.map((tag) => {
            return (
              <div className="project-tag text-[var(--tertiary)] ">
                {tag.toUpperCase()}
              </div>
            );
          })}
        </div>
        <div className="flex justify-end p-4">
          <IconArrowRight className="text-[var(--tertiary)] w-10 h-10 group-hover:scale-105" />
        </div>
      </a>
      <hr className="w-full" />
    </div>
  );
};

export default ProjectItem;
