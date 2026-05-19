import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Salas from './components/Salas';
import Diferenciais from './components/Diferenciais';
import Galeria from './components/Galeria';
import Localizacao from './components/Localizacao';
import FAQ from './components/FAQ';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <Salas />
        <Diferenciais />
        <Galeria />
        <Localizacao />
        <FAQ />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
