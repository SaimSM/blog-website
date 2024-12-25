import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Blog Post: {slug}</h1>
        <p className="text-gray-700">
          This is the content for the blog post  {`${slug}`}.
        </p>
      </div>
    </div>
  );
}
