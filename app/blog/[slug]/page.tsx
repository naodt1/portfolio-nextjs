import { posts } from "@/data/posts";
import Navbar from "@/app/(home)/components/Navbar";
import Footer from "@/app/(home)/components/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function renderContent(content: string) {
  return content.split("\n\n").map((block, i) => {
    if (block.startsWith("# ")) {
      return (
        <h2 key={i} className="text-2xl font-bold mt-10 mb-4 text-white">
          {block.slice(2)}
        </h2>
      );
    }
    if (block.startsWith("## ")) {
      return (
        <h3 key={i} className="text-xl font-bold mt-8 mb-3 text-white">
          {block.slice(3)}
        </h3>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="list-disc list-inside space-y-2 text-gray-300 mb-6 ml-2">
          {items.map((item, j) => (
            <li key={j}>{item.slice(2)}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="text-gray-300 leading-relaxed mb-6">
        {block}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto p-5">
        <Navbar />

        <main className="animate-move-up mt-10">
          <div className="max-w-3xl mx-auto">
            {/* Back link */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors text-sm mb-10"
            >
              <ArrowLeft className="w-4 h-4" />
              All posts
            </Link>

            {/* Header */}
            <div className="mb-10">
              <div className="flex flex-wrap gap-2 mb-5">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs border border-green-500/40 text-green-400 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-5">{post.title}</h1>

              <div className="flex items-center gap-4">
                <time className="text-gray-500 text-sm">{formatDate(post.date)}</time>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-indigo-500 flex items-center justify-center text-xs font-bold text-black">
                    N
                  </div>
                  <span className="text-gray-400 text-sm">Naod Tadele</span>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex gap-0 mb-10">
              <div className="h-1 w-40 bg-green-500 rounded-full" />
              <div className="h-1 w-40 bg-indigo-500 rounded-full translate-x-2" />
            </div>

            {/* Summary */}
            <p className="text-lg text-gray-300 italic border-l-2 border-green-500 pl-5 mb-10 leading-relaxed">
              {post.summary}
            </p>

            {/* Body */}
            <div className="prose-custom">{renderContent(post.content)}</div>

            {/* Footer nav */}
            <div className="border-t border-gray-800 mt-16 pt-10 flex items-center justify-between">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-green-500 transition-colors text-sm"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to blog
              </Link>
              <Link
                href="mailto:business@naodtadele.com"
                className="text-sm text-gray-400 hover:text-green-500 transition-colors"
              >
                Got thoughts? Email me →
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
