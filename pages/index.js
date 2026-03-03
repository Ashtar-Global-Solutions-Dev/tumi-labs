import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';

const stats = [
  { value: '6+', label: 'Projects Shipped' },
  { value: 'Solana', label: 'Ecosystem Focus' },
  { value: 'Full-Stack', label: 'End-to-End Builds' },
  { value: '24/7', label: 'Builder Mentality' },
];

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: 'Smart Contracts',
    desc: 'Production-grade Solana programs built with Anchor. From token staking to complex DeFi protocols.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: 'Blockchain Forensics',
    desc: 'Deep investigation and analysis of blockchain transactions, tracing fund flows and uncovering insights.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
    title: 'AI + Web3',
    desc: 'Intelligent systems that bridge AI capabilities with blockchain infrastructure.',
  },
];

const featuredWork = [
  {
    title: 'Candy Machine V3',
    category: 'NFT Infrastructure',
    desc: 'Production-ready minting UI with 21+ guard types for Metaplex Candy Machine.',
    tags: ['Solana', 'Metaplex', 'Next.js'],
    gradient: 'from-accent to-brand-pink',
  },
  {
    title: 'Staking Protocol',
    category: 'DeFi',
    desc: 'Token staking smart contract and backend services built with Anchor on Solana.',
    tags: ['Rust', 'Anchor', 'Solana'],
    gradient: 'from-brand-pink to-accent',
  },
  {
    title: 'Solana Raffle',
    category: 'dApp',
    desc: 'Full-stack on-chain raffle platform with real-time updates and analytics.',
    tags: ['React', 'Express', 'PostgreSQL'],
    gradient: 'from-brand-frostbite to-brand-pink',
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    // Check if user has seen intro this session
    if (sessionStorage.getItem('introSeen')) {
      setShowIntro(false);
    }
  }, []);

  const handleVideoEnd = () => {
    sessionStorage.setItem('introSeen', 'true');
    setShowIntro(false);
  };

  const skipIntro = () => {
    sessionStorage.setItem('introSeen', 'true');
    setShowIntro(false);
  };

  return (
    <>
      <Head>
        <title>TumiLabs | Solana Venture Studio</title>
      </Head>

      {/* Video Intro */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center cursor-pointer overflow-hidden"
            onClick={skipIntro}
          >
            <video
              ref={videoRef}
              src="/logo-animation.mp4"
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              className="w-screen h-screen object-contain"
            />
            <button 
              onClick={skipIntro}
              className="absolute bottom-8 right-8 text-sm text-gray-500 hover:text-accent transition-colors"
            >
              Skip
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-96 h-96 bg-accent/10 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-brand-pink/10 rounded-full blur-[128px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-pink/5 rounded-full blur-[200px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: showIntro ? 0 : 1, y: showIntro ? 40 : 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: showIntro ? 0 : 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium text-brand-pink bg-brand-pink/10 border border-brand-pink/20 mb-8">
              Solana Venture Studio
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
              We Build
              <br />
              <span className="gradient-text">the Future</span>
              <br />
              of Web3
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              TumiLabs is a development studio crafting production-grade Solana
              products &mdash; from smart contracts to full-stack dApps and AI-powered Web3 solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent hover:bg-accent-dark rounded-xl text-base font-semibold text-dark-950 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 w-full sm:w-auto"
              >
                Start a Project
              </Link>
              <Link
                href="/work"
                className="px-8 py-4 glass rounded-xl text-base font-semibold hover:bg-white/10 transition-all duration-200 w-full sm:w-auto"
              >
                View Our Work
              </Link>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-brand-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="What We Do"
            title="End-to-End Web3 Development"
            description="From concept to deployed product, we handle the full stack of blockchain development."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-2xl glass hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:bg-accent/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <Link
              href="/services"
              className="text-accent hover:text-brand-white text-sm font-medium transition-colors inline-flex items-center gap-2"
            >
              View all services
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Our Work"
            title="Featured Projects"
            description="A selection of products we've built for the Solana ecosystem."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {featuredWork.map((project, i) => (
              <motion.div
                key={project.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl overflow-hidden glass hover:bg-white/[0.08] transition-all duration-300"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="p-8 -mt-8 relative">
                  <span className="text-xs font-medium text-accent">{project.category}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <Link
              href="/work"
              className="text-accent hover:text-brand-white text-sm font-medium transition-colors inline-flex items-center gap-2"
            >
              View all projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to Build on <span className="gradient-text">Solana</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
              Whether you need a smart contract, a full dApp, or a complete product &mdash;
              we&rsquo;re ready to ship it.
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent hover:bg-accent-dark rounded-xl text-base font-semibold text-dark-950 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
            >
              Let&rsquo;s Talk
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
