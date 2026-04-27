import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Salas from './components/Salas';
import Diferenciais from './components/Diferenciais';
import Galeria from './components/Galeria';
import Localizacao from './components/Localizacao';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Salas />
        <Diferenciais />
        <Galeria />
        <Localizacao />
        <Contato />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
