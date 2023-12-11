import fs from "fs";
import path from "path";

import matter from "gray-matter";
import {MDXRemote} from "next-mdx-remote/rsc";
import rehypeHighlight from "rehype-highlight";

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join("blog"));

  const paths = files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));

  return paths;
}

const options = {
  mdxOptions: {
    remarkPlugins: [],
    rehypePlugins: [rehypeHighlight],
  },
};

function getPost({slug}: {slug: string}) {
  const markdownFile = fs.readFileSync(path.join("blog", slug + ".mdx"), "utf-8");

  const {data: frontMatter, content} = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

export default function Page({params}: any) {
  const post = getPost(params);

  return (
    <article className="prose prose-sm md:prose-base lg:prose-lg  dark:!prose-invert mx-auto">
      {/* @ts-ignore */}
      <MDXRemote options={options} source={post.content} />
    </article>
  );
}
