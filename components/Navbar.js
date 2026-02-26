import Link from 'next/link';
import { Menu, X, Github, Twitter, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0e27]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold font-sans">
              <span className="text-white">Tumi</span>
              <span className="text-solana-500">Labs</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="#services" className="text-gray-300 hover:text-white transition-colors">Services</Link>
              <Link href="#case-studies" className="text-gray-300 hover:text-white transition-colors">Work</Link>
              <Link href="#tech-stack" className="text-gray-300 hover:text-white transition-colors">Tech</Link>
              <Link href="#about" className="text-gray-300 hover:text-white transition-colors">About</Link>
              <a 
                href="https://calendly.com/tumi-labs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-solana-400 to-solana-500 text-black px-5 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-solana-500/20 transition-all transform hover:-translate-y-0.5"
              >
                Start Project
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0e27] border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link href="#case-studies" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Work</Link>
            <Link href="#tech-stack" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Tech</Link>
            <Link href="#about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <a href="https://calendly.com/tumi-labs" className="text-solana-500 block px-3 py-2 rounded-md text-base font-medium">Start Project</a>
          </div>
        </div>
      )}
    </nav>
  );
}