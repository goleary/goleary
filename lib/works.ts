import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";
import { WorkProps } from "../types";

const worksDirectory = path.join(process.cwd(), "works");

export function getSortedWorksData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(worksDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(worksDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...(matterResult.data as WorkProps),
    };
  });
  // Sort posts by toDate
  return allPostsData.sort((a, b) => {
    if (a.toDate < b.toDate) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllWorksIds() {
  const fileNames = fs.readdirSync(worksDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getWorkData(id: string) {
  const fullPath = path.join(worksDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...(matterResult.data as { toDate: string; title: string }),
  };
}
