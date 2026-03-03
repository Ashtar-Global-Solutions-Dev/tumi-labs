import Link from 'next/link';

const footerLinks = {
  Company: [
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/contact', label: 'Contact' },
  ],
  Services: [
    { href: '/services#smart-contracts', label: 'Smart Contracts' },
    { href: '/services#dapps', label: 'dApp Development' },
    { href: '/services#blockchain-forensics', label: 'Blockchain Forensics' },
    { href: '/services#wallet-recovery', label: 'Wallet Recovery' },
  ],
  Connect: [
    { href: 'https://x.com/tumilabs', label: 'X (Twitter)', external: true },
    { href: 'https://github.com/tumilabs', label: 'GitHub', external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-dark-950">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <img 
                src="/logo.svg" 
                alt="TumiLabs" 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Building the future of Web3.
              <br />
              Solana venture studio & development lab.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-brand-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-500 hover:text-accent transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-gray-500 hover:text-accent transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} TumiLabs. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-sm text-gray-600">
            <span>Built on</span>
            <span className="text-brand-pink font-medium">Solana</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
