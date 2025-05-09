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

    if (data.isPrivate) continue;

    posts.push({
      slug: filename,
      title: data.title,
      date: data.date,
      summary: data.summary,
      tags: data.tags || [],
      githubLink: data.githubLink || null,
      externalLink: data.externalLink || null,
      coverImage: data.cover?.image || null,
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

    const allImages = import.meta.glob(
      "../assets/images/projects/**/*.{webp,png,jpg,jpeg}",
      {
        query: "?url",
        import: "default",
        eager: true,
      },
    );

    const imageUrls = Object.entries(allImages)
      .filter(([path]) => path.includes(data.imagesFolder))
      .map(([, url]) => (url as string).replace("/public/", "/"));

    // Return the project data
    return {
      slug,
      title: data.title,
      date: data.date,
      summary: data.summary,
      tags: data.tags || [],
      githubLink: data.githubLink || null,
      externalLink: data.externalLink || null,
      coverImage: data.cover?.image || null,
      images: imageUrls || null,
      content: content,
    };
  } catch (error) {
    console.error(`Error loading project with slug: ${slug}`, error);
    return null;
  }
}
