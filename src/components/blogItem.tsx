import { IconArrowRight } from "@tabler/icons-react";
import "./components.css";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface BlogItemProps {
  indexNum: string;
  blogTitle: string;
  blogTags?: string[];
  slug?: string;
}

const BlogItem: React.FC<BlogItemProps> = ({
  indexNum,
  blogTitle,
  blogTags = [],
  slug,
}) => {
  const tagCount = blogTags?.length;

  const path = useLocation();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      <div
        onClick={() => navigate("/blog/" + slug, { state: { from: path } })}
        className="group items-center py-4 hover:cursor-pointer"
      >
        {/* desktop view */}
        <div className="hidden md:grid md:grid-cols-[0.5fr_1.5fr_0.5fr] items-center">
          <div className="project-num text-[var(--tertiary)] transition">
            BLOG /{indexNum}
          </div>
          <div className="blog-title text-[var(--text)] group-hover:scale-105 transition ">
            {blogTitle}.
          </div>

          <div className="flex justify-end p-4">
            <IconArrowRight className="text-[var(--tertiary)] w-10 h-10 group-hover:scale-125 transition" />
          </div>
        </div>

        {/* mobile view */}
        <div className="grid grid-rows-[1fr_3fr] md:hidden items-center">
          {/* top texts */}
          <div className="grid grid-cols-[1fr_3fr]">
            <div className="project-num text-[var(--tertiary)] transition">
              BLOG /{indexNum}
            </div>
            <div className="project-tags flex justify-end gap-1">
              {blogTags?.map((tag, index) => {
                return (
                  <div className="project-tag text-[var(--tertiary)]">
                    {tag.toUpperCase()} {index == tagCount - 1 ? " " : "•"}
                  </div>
                );
              })}
            </div>
          </div>
          {/* Bottom text */}
          <div className="grid grid-cols-[3fr_1fr] pt-1">
            <div className="blog-title text-[var(--text)] group-hover:scale-105 transition ">
              {blogTitle.toUpperCase()} .
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full" />
    </div>
  );
};

export default BlogItem;
