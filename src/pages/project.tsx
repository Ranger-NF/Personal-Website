import "./page.css";

import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getProjectData } from "../utils/markdownParser";

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
  const path = useLocation();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectsDataType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProject = async () => {
      if (!slug) {
        navigate("/projects", { state: { from: path } });
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
  }, [slug, path]);

  if (loading) {
    return <div>Loading project...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="grid gap-12 m-8 ">
      {project.coverImage && (
        <div className="flex justify-center">
          <img loading="lazy" src={"/" + project.coverImage} className="h-48" />
        </div>
      )}
      {/* Content */}
      <div className="flex justify-center">
        <div className="grid grid-cols-[2.5fr_2fr_2fr] justify-between md:max-w-6xl">
          <div className="project-page-name">
            {project.title.toUpperCase()} .
          </div>
          <div></div>
          <div className="project-page-summary text-end">
            {project.summary.toUpperCase()}
          </div>
        </div>
      </div>

      {/* <hr /> */}
    </div>
  );
};

export default ProjectPage;
