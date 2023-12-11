import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ListItem from "@/components/list-item";

export default function Home() {
  const blogDir = "blog";

  const files = fs.readdirSync(path.join(blogDir));

  const blogs = files.map((filename) => {
    const fileContent = fs.readFileSync(path.join(blogDir, filename), "utf-8");

    const { data: frontMatter } = matter(fileContent);
    return {
      meta: frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  const sortedPosts = blogs?.sort((a, b) => {
    if (!a.meta.date || !b.meta.date) {
    }

    const dateA = new Date(a.meta.date);
    const dateB = new Date(b.meta.date);

    if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
    }

    return dateB.getTime() - dateA.getTime();
  });

  return (
    <main className="flex flex-col">
      <div className="border-b-2 pb-2 flex items-center justify-between text-sm text-muted-foreground font-semibold">
        <div className="flex items-center gap-4">
          <span className="w-[48px]">date</span>
          <span>title</span>
        </div>
        <span>tags</span>
      </div>
      <div className="w-full">
        {sortedPosts?.map((post) => (
          <ListItem
            key={post.slug}
            date={post?.meta.date}
            slug={post.slug}
            tags={post?.meta.tags}
            title={post.meta.title}
          />
        ))}
      </div>
    </main>
  );
}
