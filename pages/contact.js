import { motion } from 'framer-motion';
import Head from 'next/head';
import { useState } from 'react';

const projectTypes = [
  'Smart Contract',
  'dApp / Frontend',
  'DeFi Protocol',
  'NFT Project',
  'Blockchain Forensics',
  'Wallet Recovery',
  'AI Integration',
  'Consulting',
  'Other',
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Contact() {
  const [selectedType, setSelectedType] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Contact | TumiLabs</title>
        <meta name="description" content="Get in touch with TumiLabs. Let's discuss your Solana project — smart contracts, dApps, blockchain forensics, wallet recovery, or full product builds." />
      </Head>

      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-frostbite/5 rounded-full blur-[128px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium text-accent bg-accent/10 border border-accent/20 mb-6">
              Contact
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Let&rsquo;s <span className="gradient-text">Build</span> Something
            </h1>
            <p className="text-lg text-gray-400 leading-relaxed">
              Tell us about your project. We&rsquo;ll get back to you within 24 hours
              to discuss how we can help bring it to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div {...fadeUp} className="md:col-span-3">
              {submitted ? (
                <div className="rounded-2xl glass p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-turquoise/10 flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-brand-turquoise" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">Message Sent</h3>
                  <p className="text-gray-400">
                    Thanks for reaching out. We&rsquo;ll review your project and get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3">
                      Project Type
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setSelectedType(type)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                            selectedType === type
                              ? 'bg-accent text-dark-950'
                              : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all appearance-none"
                    >
                      <option value="" className="bg-dark-800">Select a range</option>
                      <option value="10-25k" className="bg-dark-800">$10k - $25k</option>
                      <option value="25-50k" className="bg-dark-800">$25k - $50k</option>
                      <option value="50-100k" className="bg-dark-800">$50k - $100k</option>
                      <option value="100k+" className="bg-dark-800">$100k+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Tell Us About Your Project
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all resize-none"
                      placeholder="Describe your project, timeline, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-accent hover:bg-accent-dark rounded-xl text-base font-semibold text-dark-950 transition-all duration-200 hover:shadow-lg hover:shadow-accent/25"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Info */}
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-2 space-y-8"
            >
              <div className="rounded-2xl glass p-8">
                <h3 className="text-lg font-semibold mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-300">Email</div>
                      <a href="mailto:hello@tumilabs.xyz" className="text-sm text-accent hover:text-brand-white transition-colors">
                        hello@tumilabs.xyz
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-300">X (Twitter)</div>
                      <a href="https://x.com/tumilabs" target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:text-brand-white transition-colors">
                        @tumilabs
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-300">Response Time</div>
                      <div className="text-sm text-gray-500">Within 24 hours</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl glass p-8">
                <h3 className="text-lg font-semibold mb-4">What Happens Next?</h3>
                <ol className="space-y-4">
                  {[
                    'We review your project details',
                    'Schedule a discovery call',
                    'Deliver a proposal with scope & timeline',
                    'Kick off development',
                  ].map((step, i) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-xs text-accent">
                        {i + 1}
                      </span>
                      <span className="text-sm text-gray-400">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
