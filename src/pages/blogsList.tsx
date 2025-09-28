import { useEffect, useState } from "react";
import { getBlogList } from "../utils/markdownParser";
import { motion } from "motion/react";
import MetaComponent from "../components/meta";
import BlogItem from "../components/blogItem";

interface BlogsDataType {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
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

const BlogsListPage: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogsDataType[]>([]);

  const processBlogssData = async () => {
    setBlogs(await getBlogList());
  };

  useEffect(() => {
    processBlogssData();
  }, []);

  return (
    <>
      <MetaComponent
        pageTitle="Blogs"
        pageDescription="List of blogs made by Fahad"
      />
      <div className="grid gap-12 p-8 pt-24">
        <motion.div
          className="grid w-full h-full"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {blogs.map((blog, index) => (
            <motion.div key={blog.slug} variants={itemVariants}>
              <BlogItem
                key={index}
                indexNum={(index + 1).toString().padStart(2, "0")}
                blogTags={blog.tags}
                blogTitle={blog.title}
                slug={blog.slug}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default BlogsListPage;
