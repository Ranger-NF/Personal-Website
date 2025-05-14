import { useEffect, useState } from "react";
import ProjectItem from "../components/projectItem";
import { getProjectList } from "../utils/markdownParser";
import { motion } from "motion/react";
import MetaComponent from "../components/meta";

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

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ProjectsListPage: React.FC = () => {
  const [projects, setProjects] = useState<ProjectsDataType[]>([]);

  const processProjectsData = async () => {
    setProjects(await getProjectList());
  };

  useEffect(() => {
    processProjectsData();
  }, []);

  return (
    <>
      <MetaComponent
        pageTitle="Projects"
        pageDescription="List of projects made by Fahad"
      />
      <div className="grid gap-12 p-8 pt-24">
        <motion.div
          className="grid w-full h-full"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div key={project.slug} variants={itemVariants}>
              <ProjectItem
                key={index}
                indexNum={(index + 1).toString().padStart(2, "0")}
                projectTags={project.tags}
                projectName={project.title}
                slug={project.slug}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default ProjectsListPage;
