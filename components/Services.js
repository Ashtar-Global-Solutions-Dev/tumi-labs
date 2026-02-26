import { Code, Smartphone, Link as LinkIcon, Users, Search, Activity, Key } from 'lucide-react';

export default function Services() {
  const coreServices = [
    {
      icon: <Code size={32} />,
      title: "Smart Contract Development",
      desc: "Expert Solana program development with Anchor framework. Secure, gas-efficient, and auditable code for DeFi, NFTs, and DAOs.",
      features: ["Rust + Anchor", "Token Standards (SPL, Metaplex)", "DeFi Protocols", "Cross-Program Invocations"]
    },
    {
      icon: <Smartphone size={32} />,
      title: "dApp Development",
      desc: "Full-stack Web3 applications that users love. Seamless wallet integration and responsive interfaces built with React and Next.js.",
      features: ["Next.js & React", "Solana Web3.js", "Wallet Integration", "Real-time Updates"]
    },
    {
      icon: <LinkIcon size={32} />,
      title: "Blockchain Integration",
      desc: "Bridge traditional systems with Solana. We integrate Web3 functionality into existing enterprise applications without disruption.",
      features: ["Payment Systems", "Legacy Integration", "Custom RPC Setup", "Data Indexing"]
    },
    {
      icon: <Users size={32} />,
      title: "Web3 Consultation",
      desc: "Strategic guidance for your Web3 journey. From tokenomics design to technical architecture, we help you navigate the ecosystem.",
      features: ["Technical Architecture", "Tokenomics Design", "Security Audits", "Go-to-Market Strategy"]
    }
  ];

  const securityServices = [
    {
      icon: <Search size={32} />,
      title: "Blockchain Forensics",
      desc: "Professional investigation of on-chain activities. We trace funds, analyze patterns, and provide legal-grade forensic reports.",
      features: ["Transaction Tracing", "Address Clustering", "Compliance Checks", "Expert Witness"]
    },
    {
      icon: <Activity size={32} />,
      title: "Transaction & Asset Tracing",
      desc: "Recover lost or stolen assets through sophisticated tracing. We track movements across networks and coordinate with exchanges.",
      features: ["Stolen Asset Recovery", "Cross-Chain Tracking", "Exchange Coordination", "Real-time Monitoring"]
    },
    {
      icon: <Key size={32} />,
      title: "Wallet & Seedphrase Recovery",
      desc: "Technical recovery services for inaccessible wallets. We use advanced cryptographic techniques to recover lost access.",
      features: ["Partial Seed Recovery", "Corrupted Wallet Repair", "Hardware Wallet Recovery", "Secure Process"]
    }
  ];

  return (
    <section id="services" className="section">
      {/* Core Services */}
      <div className="mb-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Development Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            End-to-end blockchain development solutions built specifically for the Solana ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {coreServices.map((service, i) => (
            <div key={i} className="card group">
              <div className="text-solana-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-sm text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-solana-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Security Services */}
      <div>
        <div className="text-center mb-16">
          <span className="text-solana-400 font-semibold tracking-wider text-sm uppercase">New Specialized Services</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">Security & Recovery</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Advanced forensic and recovery services for individuals and enterprises.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {securityServices.map((service, i) => (
            <div key={i} className="card group border-solana-500/20 bg-solana-500/5 hover:bg-solana-500/10">
              <div className="text-solana-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">{service.desc}</p>
              <ul className="space-y-2">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center text-xs text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-solana-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}