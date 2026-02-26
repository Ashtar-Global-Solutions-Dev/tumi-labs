import { ArrowRight, Shield, Zap, Layers, Trophy } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-72 h-72 bg-solana-400/20 rounded-full blur-[100px]" />
        <div className="absolute top-[30%] right-[10%] w-96 h-96 bg-solana-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-solana-500/30 bg-solana-500/10 text-solana-400 text-sm font-medium mb-6">
            Premier Solana Development Agency
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Build the Future <br />
            <span className="gradient-text">on Solana</span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-10 leading-relaxed">
            From concept to mainnet deployment, we're your trusted partner for Solana development. Smart contracts, dApps, and Web3 integrations built by the team that understands Solana's unique architecture.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://calendly.com/tumi-labs" 
              target="_blank"
              className="w-full sm:w-auto btn-primary flex items-center justify-center gap-2"
            >
              Start Your Project <ArrowRight size={18} />
            </a>
            <a 
              href="#case-studies" 
              className="w-full sm:w-auto btn-secondary"
            >
              View Case Studies
            </a>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/5 py-12 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">17+</div>
            <div className="text-sm text-gray-500">Production Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">$2.5M+</div>
            <div className="text-sm text-gray-500">Total Value Locked</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">Zero</div>
            <div className="text-sm text-gray-500">Security Incidents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-1">99.9%</div>
            <div className="text-sm text-gray-500">Service Uptime</div>
          </div>
        </div>

        {/* Value Props */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Zap className="text-solana-500" size={24} />,
              title: "Solana-Native",
              desc: "Built for speed, optimized for scale using native architecture."
            },
            {
              icon: <Shield className="text-solana-500" size={24} />,
              title: "Security First",
              desc: "Zero security incidents across 17+ production projects."
            },
            {
              icon: <Layers className="text-solana-500" size={24} />,
              title: "End-to-End",
              desc: "From Rust smart contracts to React Native mobile apps."
            },
            {
              icon: <Trophy className="text-solana-500" size={24} />,
              title: "Proven Expertise",
              desc: "Trusted by leading protocols in the Solana ecosystem."
            }
          ].map((item, i) => (
            <div key={i} className="card group hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-solana-500/10 transition-colors">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}