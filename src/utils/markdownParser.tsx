import matter from "gray-matter";
import { Buffer } from "buffer";

declare global {
  interface Window {
    Buffer: typeof Buffer;
  }
}

window.Buffer = Buffer;

export async function getProjectList() {
  const posts = [];
  const markdownFiles = import.meta.glob("../../content/projects/*.md", {
    query: "?raw",
    import: "default",
    eager: true,
  });

  for (const path in markdownFiles) {
    const fileContent = markdownFiles[path];
    const filename = path.split("/").pop()!.replace(".md", "");
    const { data } = matter(fileContent);

    posts.push({
      slug: filename,
      title: data.title,
      date: data.date,
      summary: data.summary,
      tags: data.tags || [],
      githubLink: data.githubLink || null,
      externalLink: data.externalLink || null,
      coverImage: data.coverImage || null,
    });
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export async function getProjectData(slug: string) {
  try {
    const markdownFiles = import.meta.glob("../../content/projects/*.md", {
      query: "?raw",
      import: "default",
      eager: true,
    });

    const filePath = Object.keys(markdownFiles).find(
      (path) => path.split("/").pop()!.replace(".md", "") === slug,
    );

    if (!filePath) {
      return null;
    }

    const fileContent = markdownFiles[filePath];

    // Parse the front matter
    const { data, content } = matter(fileContent);

    // Return the project data
    return {
      slug,
      title: data.title,
      date: data.date,
      summary: data.summary,
      githubLink: data.githubLink || null,
      externalLink: data.externalLink || null,
      coverImage: data.coverImage || null,
      content: content,
    };
  } catch (error) {
    console.error(`Error loading project with slug: ${slug}`, error);
    return null;
  }
}
