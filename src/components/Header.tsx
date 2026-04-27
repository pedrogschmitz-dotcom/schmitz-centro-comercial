import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#salas', label: 'Salas' },
    { href: '#diferenciais', label: 'Diferenciais' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#localizacao', label: 'Localização' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? 'linear-gradient(180deg, #3d0e19 0%, #561525 100%)'
          : 'linear-gradient(180deg, rgba(61,14,25,0.92) 0%, rgba(86,21,37,0.85) 100%)',
        boxShadow: scrolled
          ? '0 2px 16px rgba(0,0,0,0.5), inset 0 -1px 0 rgba(201,168,76,0.4)'
          : '0 1px 8px rgba(0,0,0,0.3)',
        backdropFilter: 'blur(6px)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col leading-none group">
          <span
            className="font-sans text-[10px] tracking-[0.25em] uppercase"
            style={{ color: '#C9A84C', letterSpacing: '0.25em' }}
          >
            CENTRO COMERCIAL
          </span>
          <span
            className="font-serif text-[22px] font-semibold tracking-[0.15em] uppercase"
            style={{
              color: '#e8e8e8',
              textShadow: '0 1px 2px rgba(0,0,0,0.6)',
              letterSpacing: '0.15em',
            }}
          >
            SCHMITZ
          </span>
        </a>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-sans text-[11px] uppercase tracking-widest transition-colors duration-200"
              style={{ color: 'rgba(240,228,204,0.8)' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#C9A84C')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(240,228,204,0.8)')}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/5548984680088?text=Olá,%20gostaria%20de%20agendar%20uma%20visita"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-emboss text-white font-sans text-[11px] uppercase tracking-widest px-5 py-2 rounded-sm"
          >
            Agendar visita
          </a>
        </nav>

        {/* Hamburguer mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden border-t"
          style={{
            background: 'linear-gradient(180deg, #3d0e19 0%, #2a0a13 100%)',
            borderColor: 'rgba(201,168,76,0.3)',
          }}
        >
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-sans text-[12px] uppercase tracking-widest py-2"
                style={{
                  color: 'rgba(240,228,204,0.85)',
                  borderBottom: '1px solid rgba(201,168,76,0.15)',
                }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="https://wa.me/5548984680088?text=Olá,%20gostaria%20de%20agendar%20uma%20visita"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-emboss text-white font-sans text-[11px] uppercase tracking-widest px-5 py-3 rounded-sm text-center"
            >
              Agendar visita via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
