export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-20 text-center">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-6">
          Contact Us
        </h1>
        <form className="bg-white rounded-lg shadow-md p-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full mb-4 p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full mb-4 p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Your Message"
            className="block w-full mb-4 p-3 border rounded-md focus:ring-2 focus:ring-purple-500"
            rows={5}
          />
          <button
            type="submit"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-purple-700"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
