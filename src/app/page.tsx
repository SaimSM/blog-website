import Link from "next/link";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100">
      <div className="max-w-6xl mx-auto py-20 text-center">
        <h1 className="text-5xl font-extrabold text-purple-700 mb-4">
          Welcome to My Blog
        </h1>
        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
          Discover amazing articles about web development, design, and more.
          Explore the blog to learn and grow!
        </p>
        <div className="mt-8">
          <Link
            href="/Blog"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700"
          >
            Go to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
