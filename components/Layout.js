import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-dark-950 grid-bg">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
