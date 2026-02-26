import Link from 'next/link';
import { Github, Twitter, Linkedin, MessageCircle, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold font-sans block mb-4">
              <span className="text-white">Tumi</span>
              <span className="text-solana-500">Labs</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Expert Solana development agency building the future of decentralized applications. Operated by Ashtar Global Solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Github size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><MessageCircle size={20} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-solana-400 transition-colors">Smart Contract Dev</Link></li>
              <li><Link href="#" className="hover:text-solana-400 transition-colors">dApp Development</Link></li>
              <li><Link href="#" className="hover:text-solana-400 transition-colors">Blockchain Integration</Link></li>
              <li><Link href="#" className="hover:text-solana-400 transition-colors">Web3 Consultation</Link></li>
              <li><Link href="#" className="hover:text-solana-400 transition-colors">Blockchain Forensics</Link></li>
              <li><Link href="#" className="hover:text-solana-400 transition-colors">Asset Recovery</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#" className="hover:text-solana-400 transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-solana-400 transition-colors">Technical Blog</Link></li>
              <li><Link href="#" className="hover:text-solana-400 transition-colors">Developer Docs</Link></li>
              <li><Link href="#" className="hover:text-solana-400 transition-colors">Open Source</Link></li>
              <li><Link href="#" className="hover:text-solana-400 transition-colors">Security Guide</Link></li>
            </ul>
          </div>

          {/* Emergency CTA */}
          <div>
            <h3 className="text-white font-semibold mb-6">Emergency Recovery</h3>
            <p className="text-gray-400 text-sm mb-4">
              Lost access to significant digital assets? Time is critical.
            </p>
            <a 
              href="mailto:emergency@tumi-labs.com" 
              className="flex items-center justify-center w-full bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-2 rounded-lg text-sm font-medium hover:bg-red-500/20 transition-colors"
            >
              Contact Emergency Team
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 Tumi Labs. Built on Solana. Secured by expertise.
          </p>
          <p className="text-gray-600 text-xs mt-4 md:mt-0">
            Cryptocurrency development involves technical and financial risks.
          </p>
        </div>
      </div>
    </footer>
  );
}