import Link from "next/link";

const posts = [
  { id: 1, title: "Learn Next.js", slug: "learn-nextjs" },
  { id: 2, title: "Why Tailwind CSS?", slug: "why-tailwind" },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto py-16">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-purple-700">
          Our Blog
        </h1>
        <ul className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <li
              key={post.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <Link
                href={`/Blog/${post.slug}`}
                className="text-2xl font-bold text-purple-600 hover:text-purple-800"
              >
                {post.title}
              </Link>
              <p className="mt-2 text-gray-600">
                Discover more about {post.title.toLowerCase()}.
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
