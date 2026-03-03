import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import SectionHeading from '@/components/SectionHeading';

const stats = [
  { value: '9', label: 'Products Shipped to Mainnet' },
  { value: 'Core', label: 'Contributors to Honeycomb Protocol' },
  { value: '1', label: 'Client Token Listed on Binance' },
  { value: '$2M+', label: 'TVL Secured for Clients' },
];

const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
    title: 'Smart Contracts',
    desc: 'Production-grade Solana programs that don\'t break at scale. We\'ve written staking contracts securing $2M+ and DeFi protocols handling thousands of daily transactions.',
    link: '/work#defi',
    linkText: 'See our DeFi work →',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z" />
        </svg>
    ),
    title: 'Full-Stack dApps',
    desc: 'From Anchor programs to React frontends to indexers — one team, one codebase, one throat to choke. No finger-pointing between contractors.',
    link: '/work',
    linkText: 'See shipped dApps →',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: 'Forensics & Recovery',
    desc: 'Lost access to a wallet? Need to trace funds? Our forensics team has recovered assets for clients and traced transactions across multiple chains.',
    link: '/services#blockchain-forensics',
    linkText: 'Get emergency help →',
    urgent: true,
  },
];

const featuredWork = [
  {
    title: 'Honeycomb Protocol',
    category: 'Web3 Gaming Infrastructure',
    desc: 'We\'re core contributors to the leading gaming infrastructure on Solana.',
    impact: 'Powers multiple games, players, and NFTs across the ecosystem.',
    tags: ['Rust', 'Anchor', 'Unity C#'],
    gradient: 'from-accent to-brand-turquoise',
    link: '/work',
  },
  {
    title: 'Hololaunch',
    category: 'Decentralized Token Launchpad',
    desc: 'Built the full launchpad with staking, ICO, and lottery modules.',
    impact: 'Client token listed on Binance.',
    tags: ['Rust', 'Anchor', 'PostgreSQL'],
    gradient: 'from-accent to-brand-pink',
    highlight: true,
  },
  {
    title: 'LiquidProp',
    category: 'Real Estate Tokenization',
    desc: 'First-to-market decentralized real estate marketplace on Solana.',
    impact: '$100 minimum fractional property ownership.',
    tags: ['Solana', 'Anchor', 'React'],
    gradient: 'from-brand-pink to-accent',
    link: 'https://liquidprop-marketplace.vercel.app',
  },
];

const testimonials = [
  {
    quote: "TumiLabs shipped our mainnet contracts in 6 weeks when our previous team couldn't deliver in 6 months. They're now our go-to for anything Solana.",
    author: "Web3 Founder",
    role: "DeFi Protocol",
  },
  {
    quote: "The forensics team recovered funds we thought were gone forever. Worth every penny.",
    author: "Crypto Investor",
    role: "Recovery Client",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Home() {
  const [showIntro, setShowIntro] = useState(null); // null = checking
  const videoRef = useRef(null);

  useEffect(() => {
    // Check if user has seen intro this session
    const seen = sessionStorage.getItem('introSeen');
    setShowIntro(!seen);
  }, []);

  const handleVideoEnd = () => {
    // Hold on final frame for 1 second before fading out
    setTimeout(() => {
      sessionStorage.setItem('introSeen', 'true');
      setShowIntro(false);
    }, 1000);
  };

  const skipIntro = () => {
    sessionStorage.setItem('introSeen', 'true');
    setShowIntro(false);
  };

  return (
    <>
      <Head>
        <title>TumiLabs | Solana Development Studio — Ship Production-Ready Products</title>
        <meta name="description" content="The Solana studio behind Honeycomb Protocol and a Binance-listed token. We ship production-ready smart contracts, dApps, and Web3 products on schedule." />
      </Head>

      {/* Video Intro */}
      <AnimatePresence>
        {showIntro === true && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
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
              onClick={skipIntro}
              className="w-screen h-screen object-contain cursor-pointer"
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
            animate={{ opacity: showIntro === false ? 1 : 0, y: showIntro === false ? 0 : 40 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium text-brand-pink bg-brand-pink/10 border border-brand-pink/20 mb-8">
              The Solana Studio Behind $2M+ in Shipped Products
            </span>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95] mb-8">
              Your Solana Product.
              <br />
              <span className="gradient-text">Production-Ready.</span>
              <br />
              On Schedule.
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              We&rsquo;re the development studio that shipped Honeycomb Protocol&rsquo;s gaming infrastructure, 
              got Hololaunch listed on Binance, and delivered 9 production Solana products. 
              <span className="text-brand-white font-medium"> Now we&rsquo;re ready for yours.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 bg-accent hover:bg-accent-dark rounded-xl text-base font-semibold text-dark-950 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25 w-full sm:w-auto"
              >
                Get Your Free Architecture Review
              </Link>
              <Link
                href="/work"
                className="px-8 py-4 glass rounded-xl text-base font-semibold hover:bg-white/10 transition-all duration-200 w-full sm:w-auto group"
              >
                See Our 9 Case Studies
                <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
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

      {/* Services Preview - What We Build */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="What We Build"
            title="Solana Products, Shipped"
            description="From contracts to frontends to recovery — one team handles it all."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group p-8 rounded-2xl glass hover:bg-white/[0.08] transition-all duration-300 ${service.urgent ? 'ring-1 ring-brand-red/30' : ''}`}
              >
                <div className={`w-12 h-12 rounded-xl ${service.urgent ? 'bg-brand-red/10 text-brand-red' : 'bg-accent/10 text-accent'} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.desc}</p>
                {service.link && (
                  <Link 
                    href={service.link}
                    className={`text-sm font-medium transition-colors ${service.urgent ? 'text-brand-red hover:text-brand-white' : 'text-accent hover:text-brand-white'}`}
                  >
                    {service.linkText}
                  </Link>
                )}
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

      {/* Featured Work - Products We've Shipped */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Our Work"
            title="Products We've Shipped"
            description="Not pitched — shipped. Live on mainnet."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {featuredWork.map((project, i) => (
              <motion.div
                key={project.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative rounded-2xl overflow-hidden glass hover:bg-white/[0.08] transition-all duration-300 ${project.highlight ? 'ring-1 ring-accent/50' : ''}`}
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity`} />
                <div className="p-8 -mt-8 relative">
                  <span className="text-xs font-medium text-accent">{project.category}</span>
                  <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{project.desc}</p>
                  
                  {/* Impact Statement */}
                  <div className="mb-4 p-3 rounded-lg bg-accent/5 border border-accent/10">
                    <span className="text-xs uppercase tracking-wider text-gray-500">Impact</span>
                    <p className="text-sm text-brand-white font-medium">{project.impact}</p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs rounded-full bg-white/5 text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.highlight && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-accent text-dark-950">
                      Binance Listed
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp} className="text-center mt-12">
            <Link
              href="/work"
              className="text-accent hover:text-brand-white text-sm font-medium transition-colors inline-flex items-center gap-2"
            >
              View all 9 case studies
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Social Proof - Testimonials */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeUp} className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium text-accent bg-accent/10 border border-accent/20 mb-6">
              What Clients Say
            </span>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-8 rounded-2xl glass"
              >
                <svg className="w-10 h-10 text-accent/30 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
                <p className="text-lg text-brand-white leading-relaxed mb-6">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <div className="font-semibold text-brand-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div {...fadeUp}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Ready to Ship Your <span className="gradient-text">Solana Product</span>?
            </h2>
            <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
              Book a free 20-minute call. We&rsquo;ll review your project, tell you if we&rsquo;re a fit, 
              and give you an honest timeline and budget range. <span className="text-brand-white">No pitch decks. No sales pressure.</span>
            </p>
            <Link
              href="/contact"
              className="inline-flex px-8 py-4 bg-accent hover:bg-accent-dark rounded-xl text-base font-semibold text-dark-950 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
            >
              Book Your Free Architecture Call →
            </Link>
            
            {/* Risk Reversal */}
            <div className="mt-8 p-4 rounded-xl glass max-w-lg mx-auto">
              <p className="text-sm text-gray-400">
                <span className="text-brand-white font-medium">Not sure yet?</span> We offer a paid Discovery Phase 
                that delivers a full technical architecture doc — <span className="text-accent">yours to keep</span> whether you hire us or not.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
