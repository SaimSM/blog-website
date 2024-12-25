import Link from 'next/link';
export default function Navbar() {
  return (
    <nav className="bg-purple-600 text-white p-4 sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold">My Awesome Blog</h1>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/About" className="hover:underline">About</Link></li>
          <li><Link href="/Blog" className="hover:underline">Blog</Link></li>
          <li><Link href="/Contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
