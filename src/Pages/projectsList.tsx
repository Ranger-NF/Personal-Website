import { useEffect, useState } from "react";
import ProjectItem from "../components/projectItem";
import { getProjectList } from "../utils/markdownParser";
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
