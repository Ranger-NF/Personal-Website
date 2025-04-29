import "./page.css";

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProjectData } from "../utils/markdownParser";
import { IconArrowLeft } from "@tabler/icons-react";
import MobileMenu from "../components/mobileMenu";
import PageDirectButton from "../components/pageDirects";

interface ProjectsDataType {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  githubLink: string | null;
  externalLink: string | null;
  coverImage: string | null;
}

const ProjectPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectsDataType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      if (!slug) {
        navigate("/projects");
        return;
      }

      try {
        const projectData = await getProjectData(slug);
        if (!projectData) {
          navigate("/projects");
          return;
        }
        setProject(projectData);
      } catch (error) {
        console.error(`Failed to load project: ${slug}`, error);
        navigate("/projects");
      } finally {
        setLoading(false);
      }
    };

    loadProject();
  }, [slug, navigate]);

  if (loading) {
    return <div>Loading project...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="grid gap-12 m-8 w-full">
      <div className="flex flex-row justify-between">
        <a className="flex justify-start pt-1" href="/projects/">
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

      {/* Content */}
      <div className="flex justify-between flex-col[1fr_2fr]">
        <div className="project-page-name">{project.title.toUpperCase()} .</div>
        <div className="project-page-summary text-end">
          {project.summary.toUpperCase()}
        </div>
      </div>

      <hr />
      <p>PAGE WORK IN PROGRESS</p>
    </div>
  );
};

export default ProjectPage;
