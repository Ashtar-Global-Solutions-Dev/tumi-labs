import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import SectionHeading from '@/components/SectionHeading';

const categories = ['All', 'Infrastructure', 'DeFi / RWA', 'AI', 'Gaming'];

const categoryGradients = {
  Infrastructure: 'from-accent to-brand-turquoise',
  'DeFi / RWA': 'from-brand-pink to-accent',
  AI: 'from-brand-turquoise to-brand-pink',
  Gaming: 'from-brand-frostbite to-accent',
};

const categoryColors = {
  Infrastructure: 'text-accent bg-accent/10',
  'DeFi / RWA': 'text-brand-pink bg-brand-pink/10',
  AI: 'text-brand-turquoise bg-brand-turquoise/10',
  Gaming: 'text-brand-frostbite bg-brand-frostbite/10',
};

const projects = [
  {
    title: 'Honeycomb Protocol',
    category: 'Infrastructure',
    subtitle: 'Web3 Gaming Infrastructure on Solana',
    description:
      'Core contributor to the leading Web3 gaming infrastructure on Solana. Built foundational components powering on-chain game economies, asset management, and game engine integrations.',
    tags: ['Rust', 'Anchor', 'TypeScript', 'Unity C#', 'Yellowstone gRPC'],
    highlights: [
      'hive-control — Core protocol control layer',
      'nectar-utilities — Staking utilities & rewards',
      'asset-hub — Digital asset management',
      'Unity-SDK — Game engine integration',
      'toolkit — Core Rust toolkit',
      'Compressed accounts indexer (DAS fork)',
    ],
    image: '/projects/honeycomb.jpg',
    link: 'https://docs.honeycombprotocol.com',
    linkLabel: 'Docs',
  },
  {
    title: 'Hololaunch',
    category: 'Infrastructure',
    subtitle: 'Decentralized Token Launchpad — Binance-listed',
    description:
      'Built a sophisticated Solana-based decentralized launchpad for the Holoworld team. Features staking rewards, lottery-based token distribution, and full ICO functionality. The client\'s token achieved a Binance listing.',
    tags: ['Rust', 'Anchor 0.31', 'TypeScript', 'Express.js', 'PostgreSQL', 'Prisma', 'Yellowstone gRPC'],
    highlights: [
      'Staking Module — Rewards with points & claiming',
      'Launchpad Module — Lottery-based token distribution',
      'ICO Module — Full offering system with whitelist, vesting & raffles',
      'Real-time blockchain indexer via Yellowstone gRPC',
      'TSOA/Swagger API documentation',
    ],
    image: '/projects/hololaunch.jpg',
    link: 'https://www.hololaunch.ai',
    linkLabel: 'Live Site',
    detail: {
      label: 'Notable',
      value: '$200M+ raised · Binance listed',
    },
  },
  {
    title: 'GameShift',
    category: 'Infrastructure',
    subtitle: 'Solana Game Integration Platform',
    description:
      'Contributed to Solana\'s game integration platform enabling seamless Web3 functionality in games. Built core infrastructure, SDK development, wallet adapters, and payments reference implementations.',
    tags: ['TypeScript', 'Solana Web3.js', 'React'],
    highlights: [
      'Core platform infrastructure',
      'Modular TypeScript wallet adapters',
      'Payments reference implementation',
      'Developer documentation',
    ],
    image: '/projects/gameshift.jpg',
    link: 'https://www.gameshift.dev',
    linkLabel: 'Live Site',
  },
  {
    title: 'LiquidProp',
    category: 'DeFi / RWA',
    subtitle: 'Decentralized Real Estate Marketplace',
    description:
      'First-to-market decentralized real estate marketplace on Solana. Enables fractional ownership of U.S. rental properties with $100 minimum investment and fully permissionless trading of property tokens.',
    tags: ['Solana', 'Anchor', 'TypeScript', 'React', 'SPL Tokens'],
    highlights: [
      '$100 fractional property shares as SPL tokens',
      'Permissionless marketplace for property token trading',
      'Smart contract-based instant P2P transactions',
      'Rent distribution via micropayments',
      'Real U.S. rental properties on-chain',
    ],
    image: '/projects/liquidprop.jpg',
    link: 'https://liquidprop-marketplace.vercel.app',
    linkLabel: 'Live App',
  },
  {
    title: 'KEK Platform',
    category: 'DeFi / RWA',
    subtitle: 'AI Platform Staking Infrastructure',
    description:
      'Staking infrastructure for KEK, an AI platform by Arman. Features tiered reward rates, configurable lock periods, and early unstaking penalties built on Solana with Anchor.',
    tags: ['TypeScript', 'Rust', 'Solana', 'Anchor', 'AI'],
    highlights: [
      'Tiered reward system (10-20% APY)',
      'Configurable lock periods',
      'Early unstaking penalties',
      'Token22 support',
    ],
  },
  {
    title: 'Raffles Platform',
    category: 'Infrastructure',
    subtitle: 'On-Chain Community Raffle System',
    description:
      'Full-stack on-chain raffle system deployed across multiple NFT communities. Provides fair, verifiable raffles with real-time updates and admin tooling.',
    tags: ['TypeScript', 'React', 'Next.js', 'Express.js', 'PostgreSQL', 'Solana'],
    highlights: [
      'On-chain raffle creation & ticket purchasing',
      'Verifiable random winner selection',
      'Admin dashboard for community managers',
      'Deployed for 5+ communities (WiseCats, FujiLions, Drippies, Wobblebug)',
    ],
  },
  {
    title: 'AgentsCan',
    category: 'AI',
    subtitle: 'AI Agent ↔ Mobile Document Bridge',
    description:
      'Cloud API connecting AI agents (LangChain, n8n, custom bots) with mobile devices for physical document scanning. When an AI agent needs a document, the request routes to a paired iOS device for scanning, with PDF + OCR results delivered back in real time.',
    tags: ['Node.js', 'TypeScript', 'Fastify 5', 'PostgreSQL', 'Drizzle ORM', 'Swift'],
    highlights: [
      'AI Agent → API → iOS scanner pipeline',
      'API key auth for agents, device auth for mobile',
      'Webhook delivery with auto-cleanup & TTL',
      'Rate limiting (100 req/min)',
      '32 tests passing across 7 test files',
    ],
    architecture: [
      { label: 'AI Agent', sub: '(n8n, LangChain)', arrow: 'HTTP' },
      { label: 'AgentsCan API', sub: '(Fastify + PG)', arrow: 'Push' },
      { label: 'iOS App', sub: '(Scanner + OCR)', arrow: null },
    ],
  },
  {
    title: 'Proleague Tournament',
    category: 'Gaming',
    subtitle: 'On-Chain Esports System',
    description:
      'On-chain esports tournament system with Honeycomb Protocol integration. Enables decentralized tournament management, prize pool distribution, and matchmaking on Solana.',
    tags: ['TypeScript', 'Solana', 'Anchor', 'Honeycomb hive-control'],
    highlights: [
      'Tournament creation & management',
      'On-chain prize pool distribution',
      'Matchmaking system',
      'Honeycomb Protocol integration',
      'SPL token support',
    ],
    image: '/projects/proleague.jpg',
    link: 'https://proleague.gg',
    linkLabel: 'Live Site',
  },
  {
    title: 'BonkSpin',
    category: 'Gaming',
    subtitle: 'IRL Activation at Solana Breakpoint',
    description:
      'Live IRL activation tool for the $BONK community, deployed at Solana Breakpoint Lisbon. Interactive spin wheel with real-time $BONK token prizes, creating buzz and engagement at the conference.',
    tags: ['TypeScript', 'React', 'Solana Web3.js', 'IRL Event'],
    highlights: [
      'Live at Solana Breakpoint Lisbon',
      'Real-time $BONK token prizes',
      'Interactive spin wheel mechanics',
      'Provably fair on-chain results',
      'Community engagement activation',
    ],
    detail: {
      label: 'Event',
      value: 'Breakpoint Lisbon 2024',
    },
  },
];

const techStack = [
  { name: 'Solana', category: 'Blockchain' },
  { name: 'Rust', category: 'Language' },
  { name: 'Anchor', category: 'Framework' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Fastify', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'Prisma', category: 'ORM' },
  { name: 'Drizzle', category: 'ORM' },
  { name: 'Unity', category: 'Game Engine' },
  { name: 'Swift', category: 'Mobile' },
  { name: 'Yellowstone gRPC', category: 'Indexer' },
  { name: 'Metaplex', category: 'Protocol' },
  { name: 'Redis', category: 'Cache' },
  { name: 'Go', category: 'Language' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

function ArchitectureDiagram({ architecture }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto py-4">
      {architecture.map((node, i) => (
        <div key={node.label} className="flex items-center gap-2 flex-shrink-0">
          <div className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-center min-w-[120px]">
            <div className="text-sm font-medium text-brand-white">{node.label}</div>
            <div className="text-xs text-gray-500 mt-0.5">{node.sub}</div>
          </div>
          {node.arrow && (
            <div className="flex flex-col items-center gap-0.5 flex-shrink-0">
              <span className="text-[10px] text-gray-600">{node.arrow}</span>
              <svg className="w-6 h-3 text-gray-600" fill="none" viewBox="0 0 24 12" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M0 6h20m0 0l-4-4m4 4l-4 4" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const gradient = categoryGradients[project.category] || 'from-accent to-brand-pink';
  const catColor = categoryColors[project.category] || 'text-accent bg-accent/10';

  return (
    <motion.div
      {...fadeUp}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group rounded-2xl glass hover:bg-white/[0.08] transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="grid md:grid-cols-5 gap-0">
        <div className={`md:col-span-2 h-full min-h-[200px] relative overflow-hidden ${!project.image ? `bg-gradient-to-br ${gradient} opacity-15 group-hover:opacity-25` : ''} transition-opacity`}>
          {project.image && (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover object-top opacity-60 group-hover:opacity-80 transition-opacity"
            />
          )}
          {project.detail && (
            <div className="absolute bottom-4 left-4 right-4">
              <div className="px-3 py-2 rounded-lg bg-black/60 backdrop-blur-sm border border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-gray-400">{project.detail.label}</span>
                <div className="text-sm font-semibold text-accent">{project.detail.value}</div>
              </div>
            </div>
          )}
        </div>
        <div className="md:col-span-3 p-8 md:p-10">
          <div className="flex items-center gap-3 mb-1">
            <span className={`text-xs font-medium px-3 py-1 rounded-full ${catColor}`}>
              {project.category}
            </span>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-xs text-gray-500 hover:text-accent transition-colors flex items-center gap-1"
              >
                {project.linkLabel || 'Link'}
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            )}
          </div>

          <h3 className="text-2xl font-semibold mb-1">{project.title}</h3>
          <p className="text-sm text-gray-500 mb-4">{project.subtitle}</p>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mb-6">
                  <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Key Deliverables</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-sm text-gray-400">
                        <svg className="w-4 h-4 text-brand-pink flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.architecture && (
                  <div className="mb-6">
                    <h4 className="text-xs uppercase tracking-wider text-gray-500 mb-3">Architecture</h4>
                    <ArchitectureDiagram architecture={project.architecture} />
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-500">
                  {tag}
                </span>
              ))}
            </div>
            <button className="text-gray-600 hover:text-accent transition-colors ml-4 flex-shrink-0">
              <motion.svg
                animate={{ rotate: expanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
              </motion.svg>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      <Head>
        <title>Work | TumiLabs</title>
        <meta
          name="description"
          content="Explore 9 case studies from TumiLabs — infrastructure, DeFi, RWA, AI, and gaming products shipped on Solana."
        />
      </Head>

      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-pink/8 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/8 rounded-full blur-[128px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium text-accent bg-accent/10 border border-accent/20 mb-6">
              Portfolio — 9 Case Studies
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Shipped <span className="gradient-text">Products</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Real products, live on Solana. From gaming infrastructure and DeFi protocols
              to real estate tokenization and AI-powered platforms — across 175+ repositories
              and 4 organizations.
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-8"
          >
            {[
              { value: '175+', label: 'Repositories' },
              { value: '4', label: 'GitHub Orgs' },
              { value: '9', label: 'Case Studies' },
              { value: 'Binance', label: 'Client Token Listed' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl font-bold text-brand-white">{stat.value}</div>
                <div className="text-xs text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-16 z-30 bg-dark-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-accent text-dark-950'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-brand-white'
                }`}
              >
                {cat}
                {cat !== 'All' && (
                  <span className="ml-1.5 text-xs opacity-60">
                    {projects.filter((p) => p.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.title} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              No projects in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Tech Stack"
            title="Tools We Use"
            description="Battle-tested technologies for building reliable Web3 products."
          />

          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="px-6 py-3 rounded-xl glass text-sm font-medium text-gray-300 hover:text-brand-white hover:bg-white/[0.08] transition-all"
              >
                <span className="text-gray-600 text-xs mr-2">{tech.category}</span>
                {tech.name}
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
              Want to Be Our Next <span className="gradient-text">Case Study</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Let&rsquo;s build something worth showcasing.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent hover:bg-accent-dark rounded-xl text-base font-semibold text-dark-950 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
            >
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
