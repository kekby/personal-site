import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post } from '../entities/post';

export const postsDirectory = path.join(process.cwd(), 'posts');

export const getSortedPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData: Post[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);

    return {
      ...matterResult.data,
      id,
      date: matterResult.data.date,
    } as Post;
  });

  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1;
    } if (a > b) {
      return -1;
    }
    return 0;
  });
};
