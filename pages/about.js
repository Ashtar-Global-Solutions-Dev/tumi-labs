import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';

const values = [
  {
    title: 'Ship Fast, Ship Right',
    description: 'We move at startup speed without cutting corners. Every contract is tested, every UI is polished, every deploy is production-ready.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
  },
  {
    title: 'Solana Native',
    description: 'This is our home chain. We live and breathe the Solana ecosystem — from Anchor programs to Metaplex standards.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: 'Full-Stack Thinking',
    description: 'Great Web3 products need more than smart contracts. We think end-to-end — UX, infra, backend, and on-chain logic working together.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3" />
      </svg>
    ),
  },
  {
    title: 'Open Source DNA',
    description: 'We believe in building in public. Our work contributes back to the Solana ecosystem and the broader developer community.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
];

const expertise = [
  { area: 'Solana Programs', level: 'Core' },
  { area: 'Anchor Framework', level: 'Core' },
  { area: 'React / Next.js', level: 'Core' },
  { area: 'Node.js / Express', level: 'Core' },
  { area: 'TypeScript', level: 'Core' },
  { area: 'PostgreSQL', level: 'Core' },
  { area: 'Metaplex', level: 'Deep' },
  { area: 'Token Extensions', level: 'Deep' },
  { area: 'DeFi Protocols', level: 'Deep' },
  { area: 'AI/ML Integration', level: 'Growing' },
  { area: 'Rust', level: 'Core' },
  { area: 'Redis / Caching', level: 'Deep' },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function About() {
  return (
    <>
      <Head>
        <title>About | TumiLabs</title>
        <meta name="description" content="TumiLabs is a Solana-focused venture studio. Learn about our mission, values, and the team building the future of Web3." />
      </Head>

      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-accent/8 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-brand-pink/5 rounded-full blur-[128px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium text-accent bg-accent/10 border border-accent/20 mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              A Studio Built for{' '}
              <span className="gradient-text">Solana</span>
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              TumiLabs is a venture studio and development lab focused exclusively on
              the Solana ecosystem. We build, ship, and scale Web3 products &mdash; from
              smart contracts to full-stack applications.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Our Mission
              </h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  We exist to accelerate the Solana ecosystem by building the products,
                  infrastructure, and tools that make Web3 accessible and useful.
                </p>
                <p>
                  As a venture studio, we don&rsquo;t just write code for clients &mdash; we
                  conceptualize, build, and launch our own products while partnering
                  with teams who share our vision for a decentralized future.
                </p>
                <p>
                  Every project we take on pushes the boundary of what&rsquo;s possible on
                  Solana, whether that&rsquo;s novel DeFi mechanisms, NFT infrastructure,
                  or AI-powered Web3 applications.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="rounded-2xl glass p-8 glow">
                <div className="space-y-6">
                  <div>
                    <div className="text-4xl font-bold gradient-text mb-1">6+</div>
                    <div className="text-sm text-gray-500">Production Products Shipped</div>
                  </div>
                  <div className="h-px bg-white/5" />
                  <div>
                    <div className="text-4xl font-bold gradient-text mb-1">Solana</div>
                    <div className="text-sm text-gray-500">Exclusive Ecosystem Focus</div>
                  </div>
                  <div className="h-px bg-white/5" />
                  <div>
                    <div className="text-4xl font-bold gradient-text mb-1">Full-Stack</div>
                    <div className="text-sm text-gray-500">From Rust to React</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Values"
            title="What Drives Us"
            description="The principles behind every line of code we write."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl glass hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Expertise"
            title="Our Tech DNA"
            description="Deep experience across the Solana development stack."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {expertise.map((item, i) => (
              <motion.div
                key={item.area}
                {...fadeUp}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className="p-4 rounded-xl glass text-center hover:bg-white/[0.08] transition-all"
              >
                <div className="text-sm font-medium text-brand-white mb-1">{item.area}</div>
                <div className={`text-xs ${
                  item.level === 'Core' ? 'text-brand-pink' :
                  item.level === 'Deep' ? 'text-accent' :
                  'text-brand-frostbite'
                }`}>
                  {item.level}
                </div>
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
              Let&rsquo;s Build <span className="gradient-text">Together</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Whether you&rsquo;re a founder with an idea or a team that needs Solana expertise &mdash; we&rsquo;re here.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent hover:bg-accent-dark rounded-xl text-base font-semibold text-dark-950 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
              >
                Get in Touch
              </Link>
              <Link
                href="/work"
                className="px-8 py-4 glass rounded-xl text-base font-semibold hover:bg-white/10 transition-all duration-200"
              >
                See Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
