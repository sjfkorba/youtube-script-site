import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-black text-gray-900">
          YTTO<span className="text-red-600">SCRIPT</span>
        </Link>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/about" className="hover:text-red-600">About Us</Link>
          <Link href="/privacy-policy" className="hover:text-red-600">Privacy</Link>
          <Link href="/terms" className="hover:text-red-600">Terms</Link>
          <Link href="/how-it-works" className="hover:text-red-600">How It Works</Link>
        </div>
      </div>
    </nav>
  );
}