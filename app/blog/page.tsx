import Link from "next/link";
import { posts } from "@/data/posts";
import Navbar from "@/app/(home)/components/Navbar";
import Footer from "@/app/(home)/components/Footer";
import Title from "@/app/(home)/components/Title";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto p-5">
        <Navbar />

        <main className="mt-10 animate-move-up">
          <Title
            text="Blog ✍️"
            isButton={false}
            className="flex flex-col items-center justify-center -rotate-6"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-20">
            {sorted.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="rounded-md cursor-pointer transition-transform transform hover:scale-105 bg-gray-900 text-white overflow-hidden h-full flex flex-col">
                  {/* Top accent bar */}
                  <div className="h-1 bg-green-500" />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs border border-green-500/40 text-green-400 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h2 className="text-xl font-bold mb-3 leading-snug">{post.title}</h2>
                    <p className="text-gray-300 text-sm leading-relaxed flex-1">{post.summary}</p>

                    <div className="mt-5 flex items-center justify-between">
                      <time className="text-gray-500 text-xs">{formatDate(post.date)}</time>
                      <span className="text-green-500 text-sm font-medium group-hover:translate-x-1 transition-transform">
                        Read →
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-32 text-gray-500">
              <p className="text-2xl mb-2">No posts yet</p>
              <p className="text-sm">Add posts to <code className="text-gray-400">data/posts.ts</code> to get started.</p>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  );
}
