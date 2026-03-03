import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';

const projects = [
  {
    title: 'Candy Machine V3 UI',
    category: 'NFT Infrastructure',
    description: 'A production-ready minting interface for Metaplex Candy Machine V3 with support for 21+ guard types. Features multi-mint capabilities, countdown timers, NFT previews, and responsive design.',
    tags: ['Next.js', 'Solana', 'Metaplex', 'Web3.js'],
    gradient: 'from-accent to-brand-pink',
    highlights: ['21+ guard types supported', 'Multi-mint interface', 'Real-time countdown'],
  },
  {
    title: 'MPL Candy Guard',
    category: 'Smart Contract',
    description: 'A modular Solana smart contract for NFT mint access control, separating guard logic from core minting. Built with Anchor, featuring 15+ configurable guards with pre and post-mint action hooks.',
    tags: ['Rust', 'Anchor', 'Solana', 'TypeScript SDK'],
    gradient: 'from-brand-pink to-brand-frostbite',
    highlights: ['15+ configurable guards', 'Modular architecture', 'TypeScript SDK'],
  },
  {
    title: 'Staking Protocol',
    category: 'DeFi',
    description: 'A token staking smart contract and backend services built with Anchor on Solana. Includes delegation mechanisms, reward distribution, and migration tooling for protocol upgrades.',
    tags: ['Rust', 'Anchor', 'Node.js', 'Solana'],
    gradient: 'from-brand-pink to-accent',
    highlights: ['On-chain staking', 'Delegation services', 'Migration scripts'],
  },
  {
    title: 'Solana Raffle',
    category: 'dApp',
    description: 'A full-stack on-chain raffle platform with real-time updates, analytics dashboards, and a comprehensive UI component library. Features WebSocket support for live updates and Recharts-powered analytics.',
    tags: ['React', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    gradient: 'from-brand-frostbite to-accent',
    highlights: ['Real-time WebSocket updates', 'Analytics dashboard', 'Full component library'],
  },
  {
    title: 'AgentScan API',
    category: 'AI + Web3',
    description: 'Backend service connecting AI agents with mobile document scanning devices. Features scan request brokerage, API key authentication with SHA-256 hashing, real-time webhooks, and rate limiting.',
    tags: ['Fastify', 'PostgreSQL', 'Drizzle ORM', 'TypeScript'],
    gradient: 'from-accent to-brand-pink',
    highlights: ['AI agent integration', 'Real-time webhooks', '32 unit tests'],
  },
  {
    title: 'DME Automation',
    category: 'Full-Stack Platform',
    description: 'A comprehensive workflow automation platform for Durable Medical Equipment. Includes claims tracking, Medicare compliance engine, allowable calculator, and EDI integration with dark mode UI.',
    tags: ['Next.js', 'Express', 'Prisma', 'Redis'],
    gradient: 'from-brand-pink to-brand-pink',
    highlights: ['Claims tracking timeline', 'Medicare compliance', 'EDI integration'],
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
  { name: 'Redis', category: 'Cache' },
  { name: 'Metaplex', category: 'Protocol' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Work() {
  return (
    <>
      <Head>
        <title>Work | TumiLabs</title>
        <meta name="description" content="Explore our portfolio of Solana projects — smart contracts, dApps, DeFi protocols, and full-stack platforms." />
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
              Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Shipped <span className="gradient-text">Products</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Real products, live on Solana. From NFT minting infrastructure to DeFi
              protocols and AI-powered platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-8">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group rounded-2xl glass hover:bg-white/[0.08] transition-all duration-300 overflow-hidden"
              >
                <div className="grid md:grid-cols-5 gap-0">
                  <div className={`md:col-span-2 h-full min-h-[200px] bg-gradient-to-br ${project.gradient} opacity-15 group-hover:opacity-25 transition-opacity`} />
                  <div className="md:col-span-3 p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-xs font-medium text-accent px-3 py-1 rounded-full bg-accent/10">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">{project.description}</p>

                    <div className="mb-6">
                      <ul className="space-y-2">
                        {project.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-center gap-2 text-sm text-gray-400">
                            <svg className="w-4 h-4 text-brand-pink flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-500">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
