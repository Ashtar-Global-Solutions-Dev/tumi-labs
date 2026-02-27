import Link from 'next/link';
import { Github, Twitter, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-24 mb-20">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-bold tracking-tight inline-block mb-6" style={{ fontFamily: "'Nunito', sans-serif" }}>
              <span className="text-[#C8943E]">tumi</span>
              <span className="text-white">labs</span>
            </Link>
            <p className="text-gray-400 text-lg leading-relaxed max-w-sm mb-8">
              Premier Solana development agency building the future of decentralized finance, gaming, and infrastructure.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Twitter size={20} />, href: "https://twitter.com/TumiLabs" },
                { icon: <Github size={20} />, href: "https://github.com/Ashtar-Global-Solutions-Dev" },
                { icon: <MessageCircle size={20} />, href: "https://discord.gg/tumilabs" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#C8943E] hover:text-black transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Services</h4>
            <ul className="space-y-4">
              {['Smart Contracts', 'dApp Development', 'Forensics & Recovery', 'Audits', 'Consulting'].map((item) => (
                <li key={item}>
                  <Link href="#services" className="text-gray-500 hover:text-[#C8943E] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-8">Company</h4>
            <ul className="space-y-4">
              {['About Us', 'Case Studies', 'Careers', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href="#about" className="text-gray-500 hover:text-[#C8943E] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © 2026 Ashtar Global Solutions. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-gray-600">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}