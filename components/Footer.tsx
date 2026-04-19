import Link from 'next/link';
import { Mail } from 'lucide-react';
import { FaXTwitter, FaYoutube, FaGithub } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-xl font-black text-gray-900">
              YTTO<span className="text-red-600">SCRIPT</span>
            </Link>

            <p className="mt-4 text-gray-500 text-sm leading-relaxed">
              The world's fastest and most reliable YouTube to script converter.
              Helping creators repurpose content with AI-powered accuracy.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X / Twitter"
                className="text-gray-400 hover:text-black transition-colors"
              >
                <FaXTwitter size={20} />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-gray-400 hover:text-red-600 transition-colors"
              >
                <FaYoutube size={20} />
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-gray-900 transition-colors"
              >
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/" className="hover:text-red-600 transition-colors">Transcript Generator</Link></li>
              <li><Link href="/how-it-works" className="hover:text-red-600 transition-colors">How it Works</Link></li>
              <li><Link href="/blog" className="hover:text-red-600 transition-colors">Creator Resources</Link></li>
              <li><Link href="/api-docs" className="hover:text-red-600 transition-colors">Developer API</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li><Link href="/privacy-policy" className="hover:text-red-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-red-600 transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-red-600 transition-colors">Cookie Policy</Link></li>
              <li><Link href="/disclaimer" className="hover:text-red-600 transition-colors">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">
              Support
            </h4>
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
              <Mail size={16} />
              <span>support@yttoscript.com</span>
            </div>
            <p className="text-xs text-gray-400">
              Average response time: 24 hours.
            </p>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {currentYear} YTTOScript. All rights reserved. Made for Content Creators.
          </p>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-xs font-medium text-gray-500 uppercase tracking-tighter">
              System Status: Optimal
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}