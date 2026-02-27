import { Code, Smartphone, Link as LinkIcon, Users, Search, Activity, Key, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Services() {
  const coreServices = [
    {
      icon: <Code size={32} />,
      title: "Smart Contracts",
      desc: "Secure, gas-efficient Solana programs built with Anchor. From DeFi protocols to NFT standards.",
    },
    {
      icon: <Smartphone size={32} />,
      title: "dApp Development",
      desc: "Full-stack Web3 applications with seamless wallet integration and responsive React frontends.",
    },
    {
      icon: <LinkIcon size={32} />,
      title: "Integrations",
      desc: "Bridge Web2 and Web3. We integrate blockchain payments and data into existing enterprise systems.",
    },
    {
      icon: <Users size={32} />,
      title: "Consultation",
      desc: "Strategic guidance on tokenomics, technical architecture, and ecosystem growth.",
    }
  ];

  const securityServices = [
    {
      icon: <Search size={28} />,
      title: "Blockchain Forensics",
      desc: "Transaction tracing & graph analysis.",
    },
    {
      icon: <Activity size={28} />,
      title: "Asset Tracing",
      desc: "Cross-chain fund tracking & recovery.",
    },
    {
      icon: <Key size={28} />,
      title: "Wallet Recovery",
      desc: "Seed phrase & private key restoration.",
    }
  ];

  return (
    <section id="services" className="py-32 relative bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-20 md:mb-32 max-w-3xl">
          <span className="text-[#C8943E] font-bold tracking-[0.2em] text-sm uppercase mb-4 block">Our Expertise</span>
          <h2 className="text-5xl md:text-7xl font-heading text-white mb-6 leading-none">
            End-to-End <br />
            <span className="text-gray-500">Solana Solutions</span>
          </h2>
        </div>

        {/* Development Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {coreServices.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-10 bg-[#111] border border-white/5 hover:border-[#C8943E]/30 rounded-3xl transition-all duration-500 hover:bg-[#161616]"
            >
              <div className="w-16 h-16 bg-[#C8943E]/10 rounded-2xl flex items-center justify-center text-[#C8943E] mb-8 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-3xl font-heading text-white mb-4 group-hover:text-[#C8943E] transition-colors">{service.title}</h3>
              <p className="text-gray-400 text-lg leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Security Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-[#1A1A1A] to-[#111] border border-white/5 rounded-3xl p-10 md:p-12"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
            <div>
              <h3 className="text-3xl font-heading text-white mb-2">Security & Recovery</h3>
              <p className="text-gray-400">Advanced forensic services for high-stakes situations.</p>
            </div>
            <a href="mailto:emergency@tumi-labs.com" className="inline-flex items-center text-[#C8943E] font-bold uppercase tracking-wider hover:text-white transition-colors">
              Contact Emergency Team <ChevronRight size={18} className="ml-2" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {securityServices.map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="text-gray-500 mt-1">{item.icon}</div>
                <div>
                  <h4 className="text-xl font-heading text-white mb-2">{item.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}