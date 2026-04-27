import { useState } from 'react';

export default function Hero() {
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [isSecondaryHovered, setIsSecondaryHovered] = useState(false);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
      style={{ background: '#3d0e19' }}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={`${import.meta.env.BASE_URL}images/fachada.jpeg`}
        style={{
          opacity: isLogoHovered ? 1 : 0.45,
          transition: 'opacity 0.28s ease',
        }}
        src={`${import.meta.env.BASE_URL}videos/fachada-predio-boomerang.mp4`}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, rgba(61,14,25,0.75) 0%, rgba(86,21,37,0.72) 40%, rgba(122,31,46,0.68) 70%, rgba(74,17,32,0.82) 100%)',
          opacity: isLogoHovered ? 0 : 1,
          transition: 'opacity 0.28s ease',
        }}
      />

      {/* Grain texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.06 }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </div>

      {/* Vinheta radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.5) 100%)',
        }}
      />

      {/* Linha decorativa topo */}
      <div
        className="absolute top-0 left-0 right-0 h-1"
        style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, #E2C47A, #C9A84C, transparent)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-24 pb-16">
        {/* Label superior */}
        <p
          className="font-sans text-[10px] md:text-[11px] tracking-[0.4em] uppercase mb-6 animate-fade-in-up"
          style={{ color: '#C9A84C' }}
        >
          Kobrasol · São José / SC
        </p>

        {/* Placa inox principal */}
        <div
          className="inox-plate inline-block px-8 md:px-14 py-6 md:py-8 rounded-sm mb-8 animate-fade-in-up animate-delay-100"
          onMouseEnter={() => setIsLogoHovered(true)}
          onMouseLeave={() => setIsLogoHovered(false)}
          style={{ cursor: 'pointer' }}
        >
          <p
            className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] uppercase mb-1"
            style={{ color: '#6E6E6E' }}
          >
            CENTRO COMERCIAL
          </p>
          <h1
            className="font-serif text-[44px] md:text-[72px] tracking-[0.2em] font-semibold uppercase leading-none"
            style={{
              color: '#2a2a2a',
              textShadow: '0 1px 0 rgba(255,255,255,0.5), 0 -1px 0 rgba(0,0,0,0.2)',
            }}
          >
            SCHMITZ
          </h1>
        </div>

        {/* Slogan */}
        <p
          className="font-serif text-[22px] md:text-[32px] font-light italic mb-3 animate-fade-in-up animate-delay-200"
          style={{ color: 'rgba(240,228,204,0.92)' }}
        >
          Seu endereço no Kobrasol.
        </p>

        <hr className="gold-divider max-w-xs mx-auto mb-6 animate-fade-in-up animate-delay-200" />

        <p
          className="font-sans text-[13px] md:text-[14px] leading-relaxed mb-10 max-w-xl mx-auto animate-fade-in-up animate-delay-300"
          style={{ color: 'rgba(240,228,204,0.7)' }}
        >
          27 salas comerciais · 4 andares · Av. Delamar José da Silva, 85<br />
          O único centro comercial da região. Desde os anos 80.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-400">
          <a
            href="https://wa.me/5548984680088?text=Olá,%20gostaria%20de%20agendar%20uma%20visita%20às%20salas"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-emboss text-white font-sans text-[12px] uppercase tracking-widest px-8 py-4 rounded-sm w-full sm:w-auto text-center"
          >
            📱 Agendar visita — WhatsApp
          </a>
          <a
            href="#salas"
            className="btn-bordeaux text-white font-sans text-[12px] uppercase tracking-widest px-8 py-4 rounded-sm w-full sm:w-auto text-center"
            onMouseEnter={() => setIsSecondaryHovered(true)}
            onMouseLeave={() => setIsSecondaryHovered(false)}
            style={{
              background: isSecondaryHovered
                ? 'linear-gradient(180deg, #45101d 0%, #2b0811 100%)'
                : 'linear-gradient(180deg, #6b1c2b 0%, #4f1421 100%)',
              border: '1px solid rgba(201,168,76,0.4)',
              borderBottomWidth: '3px',
              transition: 'background 0.2s ease',
            }}
          >
            Ver salas disponíveis
          </a>
        </div>

        {/* Stats */}
        <div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px animate-fade-in-up animate-delay-500"
          style={{ background: 'rgba(201,168,76,0.2)' }}
        >
          {[
            { value: '27', label: 'Salas comerciais' },
            { value: '4', label: 'Andares' },
            { value: '35+', label: 'Anos no Kobrasol' },
            { value: '100%', label: 'Alvarás em dia' },
          ].map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center py-6 px-4"
              style={{ background: 'rgba(61,14,25,0.6)' }}
            >
              <span
                className="font-serif text-[36px] md:text-[44px] font-light leading-none"
                style={{ color: '#C9A84C' }}
              >
                {s.value}
              </span>
              <span
                className="font-sans text-[10px] uppercase tracking-widest mt-1"
                style={{ color: 'rgba(240,228,204,0.6)' }}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Seta scroll */}
      <a
        href="#salas"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        style={{ color: 'rgba(201,168,76,0.6)' }}
        aria-label="Ver mais"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
