import { motion } from 'framer-motion';

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-32 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <span className="text-[#C8943E] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Our Engine</span>
          <h2 className="text-5xl md:text-7xl font-heading text-white mb-6 leading-none">
            Built on <br />
            <span className="text-gray-600">The Edge</span>
          </h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          {/* Terminal Window */}
          <div className="bg-[#121212] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-[#1A1A1A] px-4 py-3 flex items-center gap-2 border-b border-white/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-4 text-xs text-gray-500 font-mono">user@tumilabs:~/stack</div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-10 font-mono text-sm md:text-base overflow-x-auto">
              <pre className="whitespace-pre text-[#C8943E]/90 leading-relaxed">
{`┌─ SMART CONTRACTS ────────────────────────────────────┐
│                                                      │
│  🦀 Rust Programming Language                       │
│    ├── Anchor Framework ⭐⭐⭐⭐⭐                 │
│    ├── Native Solana Programs                       │
│    └── Cross-Program Invocations (CPI)              │
│                                                      │
└──────────────────────────────────────────────────────┘

┌─ FRONTEND & MOBILE ──────────────────────────────────┐
│                                                      │
│  📱 Client Applications                             │
│    ├── Next.js & React (Web)                        │
│    ├── React Native (Mobile)                        │
│    ├── Solana Web3.js & Wallet Adapters             │
│    └── Tailwind CSS & Framer Motion                 │
│                                                      │
└──────────────────────────────────────────────────────┘

┌─ SECURITY & INFRASTRUCTURE ──────────────────────────┐
│                                                      │
│  🛡️ Forensics & DevOps                              │
│    ├── Chain Analysis Tools                         │
│    ├── Security Auditing Suites                     │
│    ├── Docker & CI/CD Pipelines                     │
│    └── Custom Indexing Solutions                    │
│                                                      │
└──────────────────────────────────────────────────────┘`}
              </pre>
              <div className="mt-6 flex items-center gap-2 text-gray-500">
                <span className="text-green-500">➜</span>
                <span>ready to deploy...</span>
                <span className="w-2 h-4 bg-gray-500 animate-pulse" />
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}