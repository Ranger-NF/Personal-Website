import "./page.css";

import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getProjectData } from "../utils/markdownParser";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
import TextTransition from "../components/transitionText";

import { motion } from "motion/react";

interface ProjectsDataType {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
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
    return (
      <div className="flex min-h-screen w-full justify-center text-center pt-40">
        <p className="text-[var(--tertiary)]">Loading project...</p>
      </div>
    );
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="flex flex-col gap-6 p-4 md:p-8 min-h-screen overflow-x-hidden">
      {project.images && (
        <div className="flex justify-center md:max-h-[60vh] w-full pt-30">
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
                      <SwiperSlide
                        key={index}
                        className="max-h-[40vh] md:h-full md:!w-auto p-5"
                      >
                        <img
                          src={projectImg}
                          loading="lazy"
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
                        loading="lazy"
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
      <div className="flex h-fit pt-18 md:pt-0 md:justify-center">
        <div className="flex flex-col gap-6 md:justify-between w-full md:max-w-6xl">
          <div className="flex justify-between">
            {project.tags.map((tag) => {
              return (
                <p className="text-[var(--tertiary)] font-light">
                  {tag.toUpperCase()}
                </p>
              );
            })}
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <TextTransition
              styleName="project-page-name text-left"
              revealSpeed={1}
              text={project.title.toUpperCase() + " ."}
            />
            <div className="flex justify-end overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="project-page-summary text-end"
              >
                {project.summary.toUpperCase()}
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <hr className="flex flex-col md:hidden h-full justify-end" />
    </div>
  );
};

export default ProjectPage;
