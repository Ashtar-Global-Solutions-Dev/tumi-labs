import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tumi Labs | Premier Solana Development Agency</title>
        <meta name="description" content="Expert blockchain development studio specializing in Solana smart contracts, dApps, and Web3 integration. Security-first, high-performance solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-[#050816]">
        <Navbar />
        
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Services />
          <CaseStudies />
          
          {/* Tech Stack Section (Simplified) */}
          <section id="tech-stack" className="section mb-20">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Tech Stack</h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                We use the most advanced tools in the Solana ecosystem to build high-performance applications.
              </p>
            </div>
            
            <div className="p-8 border border-white/10 rounded-xl bg-white/5 font-mono text-sm text-gray-300 overflow-x-auto">
              <pre className="whitespace-pre">
{`┌─ SMART CONTRACTS ────────────────────────────────────┐
│                                                      │
│  🦀 Rust Programming Language                       │
│    ├── Anchor Framework ⭐⭐⭐⭐⭐                 │
│    ├── Native Solana Programs                       │
│    └── Cross-Program Invocations (CPI)              │
│                                                      │
└──────────────────────────────────────────────────────┘

┌─ FRONTEND & MOBILE ──────────────────────────────────┐
│                                                      │
│  📱 Client Applications                             │
│    ├── Next.js & React (Web)                        │
│    ├── React Native (Mobile)                        │
│    ├── Solana Web3.js & Wallet Adapters             │
│    └── Tailwind CSS & Framer Motion                 │
│                                                      │
└──────────────────────────────────────────────────────┘

┌─ SECURITY & INFRASTRUCTURE ──────────────────────────┐
│                                                      │
│  🛡️ Forensics & DevOps                              │
│    ├── Chain Analysis Tools                         │
│    ├── Security Auditing Suites                     │
│    ├── Docker & CI/CD Pipelines                     │
│    └── Custom Indexing Solutions                    │
│                                                      │
└──────────────────────────────────────────────────────┘`}
              </pre>
            </div>
          </section>

          {/* About / CTA Section */}
          <section id="about" className="py-20 text-center">
            <div className="bg-gradient-to-r from-solana-400/20 to-blue-600/20 border border-solana-500/30 rounded-3xl p-12 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Build the Future?</h2>
                <p className="text-xl text-gray-300 mb-10">
                  Whether you're a startup with a vision or an enterprise looking to scale, Tumi Labs is your partner for success on Solana.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a 
                    href="https://calendly.com/tumi-labs" 
                    target="_blank" 
                    className="btn-primary text-lg px-8 py-4"
                  >
                    Schedule Free Consultation
                  </a>
                  <a href="mailto:hello@tumi-labs.com" className="btn-secondary text-lg px-8 py-4">
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
}