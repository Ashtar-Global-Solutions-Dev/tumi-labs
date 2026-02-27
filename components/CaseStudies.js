import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CaseStudies() {
  const projects = [
    {
      title: "Honeycomb Protocol",
      type: "Infrastructure",
      desc: "Comprehensive NFT ecosystem enabling staking, missions, and guild management for communities.",
      tags: ["Rust", "Anchor", "Microservices"],
      stat: "100k+ Transactions",
      link: "https://honeycomb.protocol"
    },
    {
      title: "Sol Patrol",
      type: "Gaming",
      desc: "Real-time GameFi engine with WebSocket architecture and automated on-chain state management.",
      tags: ["Game Engine", "WebSockets", "Node.js"],
      stat: "Real-time Gameplay",
      link: "#"
    },
    {
      title: "Ocean Explorers",
      type: "NFT Innovation",
      desc: "Pioneering cNFT (Compressed NFT) platform reducing minting costs by 99% for mass-scale assets.",
      tags: ["State Compression", "Metaplex", "React"],
      stat: "1M+ Assets",
      link: "#"
    },
    {
      title: "ProLeague",
      type: "eSports",
      desc: "High-stakes tournament platform with automated smart contract payouts and matchmaking.",
      tags: ["Escrow Contracts", "Matchmaking", "Security"],
      stat: "$500k+ Volume",
      link: "#"
    },
    {
      title: "Beholders",
      type: "DeFi",
      desc: "Advanced DeFi protocol with custom indexing infrastructure and complex yield strategies.",
      tags: ["DeFi Logic", "Indexers", "Analytics"],
      stat: "Custom Indexing",
      link: "#"
    },
    {
      title: "Raffles On-Chain",
      type: "Utility",
      desc: "Provably fair raffle system using on-chain randomness (VRF) for transparent prize distribution.",
      tags: ["Verifiable Randomness", "Security", "Audit"],
      stat: "100% On-Chain",
      link: "#"
    }
  ];

  return (
    <section id="work" className="py-32 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <span className="text-[#C8943E] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Selected Work</span>
            <h2 className="text-5xl md:text-7xl font-heading text-white leading-none">
              Featured <br />
              Projects
            </h2>
          </div>
          <a href="https://github.com/Ashtar-Global-Solutions-Dev" target="_blank" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors border-b border-gray-700 hover:border-white pb-1">
            View full portfolio <ArrowUpRight size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-[#111] rounded-2xl overflow-hidden border border-white/5 hover:border-[#C8943E]/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="p-8 h-full flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-500 border border-white/10 px-3 py-1 rounded-full group-hover:border-[#C8943E]/30 group-hover:text-[#C8943E] transition-colors">
                    {project.type}
                  </span>
                  <ExternalLink size={20} className="text-gray-600 group-hover:text-white transition-colors" />
                </div>

                <h3 className="text-2xl font-heading text-white mb-3 group-hover:text-[#C8943E] transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.desc}
                </p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, j) => (
                      <span key={j} className="text-[10px] uppercase tracking-wider text-gray-500 bg-white/5 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-[#C8943E] text-xs font-bold uppercase tracking-wider">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#C8943E]" />
                    {project.stat}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}