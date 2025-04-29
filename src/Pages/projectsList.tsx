import { useEffect, useState } from "react";
import MobileMenu from "../components/mobileMenu";
import PageDirectButton from "../components/pageDirects";
import ProjectItem from "../components/projectItem";
import { getProjectList } from "../utils/markdownParser";
import { IconArrowLeft } from "@tabler/icons-react";

interface ProjectsDataType {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  githubLink: string | null;
  externalLink: string | null;
  coverImage: string | null;
}

const ProjectsListPage: React.FC = () => {
  const [projects, setProjects] = useState<ProjectsDataType[]>([]);

  const processProjectsData = async () => {
    setProjects(await getProjectList());
  };

  useEffect(() => {
    processProjectsData();
  }, []);

  return (
    <div className="grid gap-12 m-8 w-full">
      <div className="flex flex-row justify-between">
        <a className="flex justify-start pt-1" href="\">
          <IconArrowLeft className="text-[var(--tertiary)] w-10 h-10 group-hover:scale-105" />
        </a>
        <img src="/logo.png" width={50} height={50} className="h-12 w-12" />
        <div className="md:hidden p-3">
          <MobileMenu />
        </div>

        <div className="page-directs hidden md:flex h-max items-center gap-16">
          {/* <a>about</a> */}
          <a href="www.linkedin.com/in/just-fahad/">linkedin</a>
          <PageDirectButton text="github" link="https://github.com/Ranger-NF" />
        </div>
      </div>

      <div className="grid w-full h-full">
        {projects.map((project, index) => {
          return (
            <ProjectItem
              indexNum={(index + 1).toString().padStart(2, "0")}
              projectTags={project.tags}
              projectName={project.title}
              slug={project.slug}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsListPage;
