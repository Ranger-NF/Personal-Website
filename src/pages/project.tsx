import "./page.css";

import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getProjectData } from "../utils/markdownParser";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

interface ProjectsDataType {
  slug: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  githubLink: string | null;
  externalLink: string | null;
  coverImage: string | null;
  images: string[] | null;
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
    <div className="grid gap-12 p-8 max-h-dvh">
      {project.images && (
        <div className="flex justify-center max-h-[60vh] w-full pt-30">
          <div className="w-full max-w-screen-xl">
            <Swiper
              slidesPerView="auto"
              spaceBetween={30}
              loop={true}
              speed={4000}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                reverseDirection: true,
              }}
              modules={[Autoplay]}
              className="w-full h-full"
            >
              {project.images.length > 1
                ? [...project.images, ...project.images, ...project.images].map(
                    (projectImg, index) => (
                      <SwiperSlide key={index} className="!w-auto p-5">
                        <img
                          src={projectImg}
                          className="h-full object-contain rounded-md shadow-lg"
                          style={{ width: "auto", height: "100%" }}
                        />
                      </SwiperSlide>
                    ),
                  )
                : project.images.map((projectImg, index) => (
                    <SwiperSlide key={index} className="!w-auto">
                      <img
                        src={projectImg}
                        className="h-full object-contain rounded-md"
                        style={{ width: "auto", height: "100%" }}
                      />
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="flex h-fit md:justify-center">
        <div className="flex flex-col md:grid md:grid-cols-[2.5fr_2fr_2fr] text-center md:justify-between w-full md:max-w-6xl">
          <div className="project-page-name">
            {project.title.toUpperCase()} .
          </div>
          <div></div>
          <div className="project-page-summary p-10 md:text-end">
            {project.summary.toUpperCase()}
          </div>
        </div>
      </div>

      {/* <hr /> */}
    </div>
  );
};

export default ProjectPage;
