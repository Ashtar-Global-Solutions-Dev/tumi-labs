import Head from 'next/head';
import dynamic from 'next/dynamic';
import Hero from '../components/Hero';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import TechStack from '../components/TechStack';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

// Disable SSR for Navbar to prevent hydration mismatch
const Navbar = dynamic(() => import('../components/Navbar'), { ssr: false });

export default function Home() {
  return (
    <>
      <Head>
        <title>Tumi Labs | Premier Solana Development Agency</title>
        <meta name="description" content="Expert blockchain development studio specializing in Solana smart contracts, dApps, and Web3 integration. Security-first, high-performance solutions." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-[#0A0A0A] overflow-x-hidden selection:bg-[#C8943E] selection:text-black">
        <Navbar />
        
        <Hero />
        
        <div className="relative z-10">
          <Services />
          <CaseStudies />
          <TechStack />

          {/* About / CTA Section */}
          <section id="about" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-[#1A1A1A] to-black border border-white/10 rounded-[2rem] p-12 md:p-24 relative overflow-hidden group text-center"
              >
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8943E]/10 rounded-full blur-[100px] group-hover:bg-[#C8943E]/20 transition-colors duration-700" />
                
                <div className="relative z-10 max-w-4xl mx-auto">
                  <h2 className="text-5xl md:text-7xl font-bold mb-8 font-heading tracking-wide text-white leading-none">
                    Ready to <br />
                    <span className="text-[#C8943E]">Build the Future?</span>
                  </h2>
                  <p className="text-xl text-gray-400 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                    Whether you're a startup with a vision or an enterprise looking to scale, Tumi Labs is your partner for success on Solana.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-6">
                    <a 
                      href="https://calendly.com/tumi-labs" 
                      target="_blank" 
                      className="bg-[#C8943E] text-black px-10 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(200,148,62,0.3)]"
                    >
                      Schedule Consultation
                    </a>
                    <a 
                      href="mailto:hello@tumi-labs.com" 
                      className="border border-white/20 text-white px-10 py-4 rounded-xl font-bold uppercase tracking-wider hover:bg-white/5 hover:border-white/40 transition-all duration-300"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </div>

        <Footer />
      </main>
    </>
  );
}