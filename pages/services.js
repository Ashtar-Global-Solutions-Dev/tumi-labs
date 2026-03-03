import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';

const builderServices = [
  {
    id: 'smart-contracts',
    title: 'Smart Contract Development',
    description: 'Production-grade Solana programs that don\'t break at scale. We\'ve written staking contracts securing $2M+ and DeFi protocols handling thousands of daily transactions.',
    features: [
      'Anchor/Rust program development',
      'Token programs & SPL extensions',
      'Staking & rewards mechanisms',
      'Access control & guard systems',
      'On-chain governance',
      'Program upgradability patterns',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    gradient: 'from-accent to-brand-pink',
  },
  {
    id: 'dapps',
    title: 'dApp Development',
    description: 'From Anchor programs to React frontends to indexers — one team, one codebase, one throat to choke. No finger-pointing between contractors.',
    features: [
      'React / Next.js frontends',
      'Wallet adapter integration',
      'Real-time on-chain data',
      'Transaction building & signing',
      'Responsive, accessible UI',
      'Backend API development',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
      </svg>
    ),
    gradient: 'from-brand-pink to-brand-frostbite',
  },
  {
    id: 'defi',
    title: 'DeFi Solutions',
    description: 'Custom decentralized finance protocols — staking, lending, swaps, and yield strategies designed for performance and security.',
    features: [
      'Staking & delegation protocols',
      'Liquidity pool mechanics',
      'Yield optimization strategies',
      'Token economics design',
      'Oracle integration',
      'Risk management systems',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    gradient: 'from-brand-pink to-accent',
  },
  {
    id: 'nft',
    title: 'NFT & Digital Assets',
    description: 'End-to-end NFT infrastructure — minting, marketplaces, custom guard systems, and metadata management on Metaplex.',
    features: [
      'Candy Machine configuration',
      'Custom mint guards (21+ types)',
      'Collection management',
      'Metadata & storage (Arweave/IPFS)',
      'Marketplace integration',
      'Royalty enforcement',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
      </svg>
    ),
    gradient: 'from-brand-frostbite to-accent',
  },
  {
    id: 'ai',
    title: 'AI Integration',
    description: 'Intelligent systems bridging AI with blockchain — from AI-powered agents to automated workflows and smart APIs.',
    features: [
      'AI agent development',
      'API design & integration',
      'Automated workflow systems',
      'Real-time webhook delivery',
      'Machine learning pipelines',
      'Intelligent document processing',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    gradient: 'from-accent to-brand-pink',
  },
  {
    id: 'consulting',
    title: 'Technical Consulting',
    description: 'Strategic guidance on Solana architecture, tokenomics, and technical decisions to help you build with confidence.',
    features: [
      'Architecture review',
      'Tokenomics modeling',
      'Security best practices',
      'Performance optimization',
      'Technical due diligence',
      'Team augmentation',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
    gradient: 'from-brand-pink to-brand-pink',
  },
];

const crisisServices = [
  {
    id: 'blockchain-forensics',
    title: 'Blockchain Forensics',
    description: 'Professional investigation and analysis of blockchain transactions. We uncover hidden patterns, trace illicit flows, and provide court-ready forensic reports.',
    features: [
      'On-chain investigation & analysis',
      'Address clustering & attribution',
      'Cross-chain transaction mapping',
      'Forensic report generation',
      'Exchange & mixer identification',
      'Compliance & AML support',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    gradient: 'from-brand-red to-accent',
  },
  {
    id: 'transaction-tracing',
    title: 'Transaction Tracing',
    description: 'Advanced tracking of fund flows across wallets, chains, and protocols. We follow the money trail wherever it leads.',
    features: [
      'Multi-chain fund flow analysis',
      'Wallet relationship mapping',
      'DeFi protocol interaction tracing',
      'Bridge & cross-chain tracking',
      'Real-time monitoring alerts',
      'Visual transaction flow diagrams',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
      </svg>
    ),
    gradient: 'from-brand-red to-brand-frostbite',
  },
  {
    id: 'wallet-recovery',
    title: 'Wallet Recovery',
    description: 'Expert assistance recovering access to lost or locked cryptocurrency wallets. We use advanced techniques to restore access to your digital assets.',
    features: [
      'Locked wallet access recovery',
      'Hardware wallet troubleshooting',
      'Multi-sig recovery coordination',
      'Key derivation path analysis',
      'Corrupted wallet file repair',
      'Secure recovery procedures',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    gradient: 'from-brand-frostbite to-brand-red',
  },
  {
    id: 'seedphrase-recovery',
    title: 'Seedphrase Recovery',
    description: 'Specialized recovery services for lost or partially forgotten seed phrases. We help you regain access to your funds with secure, confidential processes.',
    features: [
      'Partial seedphrase reconstruction',
      'BIP39 wordlist analysis',
      'Passphrase recovery assistance',
      'Multi-wallet derivation scanning',
      'Secure air-gapped recovery',
      'Confidential & encrypted process',
    ],
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    gradient: 'from-brand-red to-accent',
  },
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    desc: 'We dive deep into your vision, requirements, and technical landscape. Free 20-minute call to see if we\'re a fit.',
  },
  {
    step: '02',
    title: 'Architecture',
    desc: 'Design the system architecture, smart contract structure, and technical stack. You get a full doc to keep.',
  },
  {
    step: '03',
    title: 'Build',
    desc: 'Rapid, iterative development with continuous testing. Weekly demos and transparent progress updates.',
  },
  {
    step: '04',
    title: 'Ship & Support',
    desc: 'Mainnet deployment, monitoring setup, and ongoing support. We don\'t disappear after launch.',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

function ServiceCard({ service, crisis = false }) {
  return (
    <motion.div
      id={service.id}
      {...fadeUp}
      className={`group p-8 rounded-2xl glass hover:bg-white/[0.08] transition-all duration-300 ${crisis ? 'ring-1 ring-brand-red/20' : ''}`}
    >
      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} bg-opacity-10 flex items-center justify-center text-white/90 mb-6`}>
        {service.icon}
      </div>
      <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>
      <ul className="grid grid-cols-2 gap-2">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
            <span className={`w-1 h-1 rounded-full ${crisis ? 'bg-brand-red' : 'bg-accent'} flex-shrink-0`} />
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Services() {
  return (
    <>
      <Head>
        <title>Services | TumiLabs — Solana Development Done Right</title>
        <meta name="description" content="Solana development, done right. Smart contracts, dApps, DeFi, NFTs, AI integration — plus emergency blockchain forensics and wallet recovery." />
      </Head>

      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-pink/8 rounded-full blur-[128px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium text-accent bg-accent/10 border border-accent/20 mb-6">
              Services
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Solana Development,{' '}
              <span className="gradient-text">Done Right</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Whether you&rsquo;re launching a token, building a dApp, or recovering lost funds — 
              <span className="text-brand-white font-medium"> we&rsquo;ve done it before.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* For Builders Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium text-accent bg-accent/10 border border-accent/20 mb-4">
              For Builders
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">Projects Needing Development</h2>
            <p className="text-gray-400 mt-2">Full-stack Solana products from contracts to frontends.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {builderServices.map((service, i) => (
              <motion.div
                key={service.id}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* For Crisis Situations Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-brand-red/[0.02]" />
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium text-brand-red bg-brand-red/10 border border-brand-red/20 mb-4">
              For Crisis Situations
            </span>
            <h2 className="text-2xl md:text-3xl font-bold">Emergency & Forensics</h2>
            <p className="text-gray-400 mt-2">Lost funds? Locked wallet? We can help.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {crisisServices.map((service, i) => (
              <motion.div
                key={service.id}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <ServiceCard service={service} crisis />
              </motion.div>
            ))}
          </div>

          {/* Emergency CTA */}
          <motion.div 
            {...fadeUp}
            className="mt-12 p-6 rounded-2xl glass ring-1 ring-brand-red/30 text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Need Emergency Help?</h3>
            <p className="text-gray-400 mb-4">
              Time-sensitive recovery cases get priority. Reach out now.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-6 py-3 bg-brand-red hover:bg-brand-red/80 rounded-xl text-base font-semibold text-white transition-all duration-200"
            >
              Get Emergency Help →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Our Process"
            title="How We Work"
            description="A proven approach to delivering high-quality Web3 products on time."
          />

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <motion.div
                key={item.step}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <span className="text-5xl font-bold text-accent/10">{item.step}</span>
                <h3 className="text-lg font-semibold mt-2 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-accent/20 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-gray-400 text-lg mb-6 max-w-xl mx-auto">
              Book a free 20-minute call. We&rsquo;ll tell you if we&rsquo;re a fit and give you an honest assessment.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent hover:bg-accent-dark rounded-xl text-base font-semibold text-dark-950 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
            >
              Get Your Free Architecture Review →
            </Link>
            
            {/* Risk Reversal */}
            <div className="mt-8 p-4 rounded-xl glass max-w-lg mx-auto">
              <p className="text-sm text-gray-400">
                <span className="text-brand-white font-medium">Paid Discovery Phase available:</span> Get a full technical architecture doc — 
                yours to keep whether you hire us or not.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
