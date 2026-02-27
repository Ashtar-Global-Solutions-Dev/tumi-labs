import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 relative flex items-end justify-center pb-1">
              <div className="absolute inset-0 border-[3px] border-t-[#C8943E] border-x-transparent border-b-transparent rounded-full transform -rotate-45" />
              <div className="absolute inset-2 border-[3px] border-t-white border-x-transparent border-b-transparent rounded-full transform -rotate-45" />
              <div className="flex gap-[3px] h-3">
                <div className="w-[3px] bg-[#C8943E] h-full rounded-full" />
                <div className="w-[3px] bg-white h-full rounded-full" />
                <div className="w-[3px] bg-[#C8943E] h-full rounded-full" />
              </div>
            </div>
            
            <Link href="/" className="text-3xl font-bold tracking-tight" style={{ fontFamily: "'Nunito', sans-serif" }}>
              <span className="text-[#C8943E]">tumi</span>
              <span className="text-white">labs</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-12">
              {['Services', 'Work', 'About'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-400 hover:text-[#C8943E] font-medium text-sm uppercase tracking-[0.15em] transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
              <a 
                href="https://calendly.com/tumi-labs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#C8943E] text-black px-6 py-2.5 rounded font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300 shadow-[0_0_20px_rgba(200,148,62,0.2)]"
              >
                Start Project
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#C8943E] hover:text-white transition-colors"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0A0A] border-b border-[#C8943E]/20 overflow-hidden"
          >
            <div className="px-6 pt-4 pb-8 space-y-6 flex flex-col">
              {['Services', 'Work', 'About'].map((item) => (
                <Link 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-gray-300 block text-2xl font-bold tracking-wide hover:text-[#C8943E]"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <a 
                href="https://calendly.com/tumi-labs" 
                className="text-[#C8943E] block text-2xl font-bold tracking-wide mt-4"
              >
                Start Project →
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}