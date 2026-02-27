import { ArrowRight, Shield, Zap, Layers, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-[#0A0A0A]">
      {/* Cinematic Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[900px] h-[900px] bg-[#C8943E]/10 rounded-full blur-[150px] opacity-60 mix-blend-screen animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#8B1A6B]/15 rounded-full blur-[150px] opacity-50 mix-blend-screen animate-pulse" style={{ animationDuration: '10s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Main Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-[#C8943E]/30 bg-[#C8943E]/10 text-[#C8943E] text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#C8943E] animate-pulse shadow-[0_0_10px_#C8943E]" />
              Solana Venture Studio
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-7xl md:text-8xl lg:text-[7rem] font-heading font-normal leading-[0.9] mb-8 text-white tracking-tight"
            >
              BUILD THE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4A54A] via-[#C8943E] to-[#A87A2F]">
                FUTURE
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light font-body"
            >
              We architect high-performance decentralized applications. From smart contracts to full-stack ecosystems, we are the <strong className="text-white font-medium">Solana-native</strong> experts.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6"
            >
              <a 
                href="https://calendly.com/tumi-labs" 
                target="_blank"
                className="btn-primary w-full sm:w-auto flex items-center justify-center gap-3"
              >
                Start Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#work" 
                className="btn-secondary w-full sm:w-auto flex items-center justify-center"
              >
                Our Work
              </a>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 w-full max-w-md lg:max-w-none"
          >
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {[
                { label: "TVL Generated", value: "$2.5M+", icon: <Trophy /> },
                { label: "Transactions", value: "500K+", icon: <Zap /> },
                { label: "Security Incidents", value: "ZERO", icon: <Shield /> },
                { label: "Uptime", value: "99.9%", icon: <Layers /> }
              ].map((stat, i) => (
                <div key={i} className="bg-[#1A1A1A]/60 backdrop-blur-xl border border-white/5 p-6 md:p-8 rounded-2xl hover:border-[#C8943E]/30 transition-all duration-300 group hover:-translate-y-1 shadow-lg hover:shadow-[#C8943E]/5">
                  <div className="text-[#C8943E] mb-4 opacity-80 group-hover:opacity-100 transition-opacity">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-heading text-white mb-2 tracking-wide">{stat.value}</div>
                  <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 font-bold group-hover:text-gray-300 transition-colors font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}