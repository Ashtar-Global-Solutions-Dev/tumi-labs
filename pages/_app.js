import "@/styles/globals.css";
import { Bebas_Neue, Nunito, Poppins } from 'next/font/google';

const bebas = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-heading',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-logo',
});

const poppins = Poppins({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-body',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${bebas.variable} ${nunito.variable} ${poppins.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}