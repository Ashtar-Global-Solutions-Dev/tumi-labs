import { ExternalLink, Github } from 'lucide-react';

export default function CaseStudies() {
  const projects = [
    {
      title: "Honeycomb Protocol",
      category: "NFT Ecosystem",
      desc: "A complete NFT staking and guild management ecosystem. Handles complex on-chain interactions while providing smooth off-chain services for profile management and community building.",
      tech: ["Rust", "Anchor", "Node.js", "Next.js"],
      stats: ["NFT Staking", "Guild System", "Profile Mgmt"],
      color: "from-orange-400 to-amber-500"
    },
    {
      title: "Sol Patrol",
      category: "Gaming Platform",
      desc: "Interactive gaming platform combining real-time gameplay with blockchain mechanics. Features automated game states, on-chain asset verification, and high-performance chat infrastructure.",
      tech: ["Solana Game Logic", "WebSocket", "Cron Jobs"],
      stats: ["Real-time Gaming", "Asset Ownership", "Live Chat"],
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Ocean Explorers",
      category: "cNFT Platform",
      desc: "Innovative expedition system leveraging Compressed NFTs (cNFTs) for cost-effective, large-scale asset distribution. Reduced minting costs by over 95% while maintaining full utility.",
      tech: ["cNFTs", "Metaplex", "IPFS", "React"],
      stats: ["95% Cost Reduction", "Massive Scale", "Engaging UX"],
      color: "from-cyan-400 to-blue-500"
    },
    {
      title: "ProLeague",
      category: "Tournament System",
      desc: "Sophisticated tournament infrastructure with automated smart contracts for matchmaking and prize distribution. Ensures fair play and transparent operations for competitive gaming.",
      tech: ["Smart Contracts", "Matchmaking", "Microservices"],
      stats: ["Automated Payouts", "Fair Play", "Scalable"],
      color: "from-red-400 to-pink-500"
    },
    {
      title: "Raffles",
      category: "On-Chain Raffle",
      desc: "Fully decentralized raffle system ensuring provable fairness via Chainlink VRF. Handles ticket sales, winner selection, and prize distribution entirely on-chain.",
      tech: ["Chainlink VRF", "Rust", "Event Monitoring"],
      stats: ["Provably Fair", "Auto Distribution", "Secure"],
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Beholders",
      category: "DeFi Protocol",
      desc: "Advanced DeFi platform with complex state management and real-time data synchronization. Features custom indexers and high-performance APIs for seamless financial operations.",
      tech: ["DeFi Logic", "Data Indexing", "High-Perf API"],
      stats: ["Complex State", "Real-time Sync", "Secure DeFi"],
      color: "from-purple-400 to-violet-500"
    }
  ];

  return (
    <section id="case-studies" className="section bg-white/5 rounded-3xl my-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Real-world applications solving complex challenges on Solana.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div key={i} className="group relative bg-[#0a0e27] border border-white/10 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-1">
            {/* Gradient Header */}
            <div className={`h-2 bg-gradient-to-r ${project.color}`} />
            
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-gray-500 border border-white/10 px-2 py-1 rounded">
                  {project.category}
                </span>
                <div className="flex gap-2">
                  <Github size={16} className="text-gray-600 hover:text-white cursor-pointer transition-colors" />
                  <ExternalLink size={16} className="text-gray-600 hover:text-white cursor-pointer transition-colors" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                {project.desc}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, j) => (
                  <span key={j} className="text-xs bg-white/5 text-gray-300 px-2 py-1 rounded">
                    {t}
                  </span>
                ))}
              </div>

              {/* Stats/Features */}
              <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5">
                {project.stats.map((s, k) => (
                  <div key={k} className="text-center">
                    <span className="text-[10px] font-medium text-solana-400 block truncate">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="https://github.com/Ashtar-Global-Solutions-Dev" target="_blank" className="btn-secondary inline-flex items-center gap-2">
          <Github size={18} /> View More on GitHub
        </a>
      </div>
    </section>
  );
}