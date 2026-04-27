export default function Footer() {
  return (
    <footer
      style={{
        background: 'linear-gradient(180deg, #2a0a13 0%, #1a0609 100%)',
        borderTop: '1px solid rgba(201,168,76,0.2)',
      }}
    >
      {/* Linha dourada */}
      <div className="h-px" style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, #E2C47A, #C9A84C, transparent)' }} />

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Marca */}
          <div>
            <p className="font-sans text-[9px] uppercase tracking-[0.3em] mb-1" style={{ color: '#C9A84C' }}>
              CENTRO COMERCIAL
            </p>
            <p className="font-serif text-[28px] tracking-[0.15em] uppercase mb-4" style={{ color: '#e8e8e8' }}>
              SCHMITZ
            </p>
            <p className="font-sans text-[12px] leading-relaxed" style={{ color: 'rgba(240,228,204,0.5)' }}>
              O único centro comercial do Kobrasol.<br />
              Seu endereço no Kobrasol desde os anos 80.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="font-sans text-[9px] uppercase tracking-[0.3em] mb-4" style={{ color: '#C9A84C' }}>
              Navegação
            </p>
            <ul className="space-y-2">
              {[
                { href: '#salas', label: 'Salas disponíveis' },
                { href: '#diferenciais', label: 'Diferenciais' },
                { href: '#galeria', label: 'Galeria' },
                { href: '#localizacao', label: 'Localização' },
                { href: '#contato', label: 'Contato' },
              ].map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="font-sans text-[12px] transition-colors"
                    style={{ color: 'rgba(240,228,204,0.5)' }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#C9A84C')}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(240,228,204,0.5)')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="font-sans text-[9px] uppercase tracking-[0.3em] mb-4" style={{ color: '#C9A84C' }}>
              Contato
            </p>
            <div className="space-y-3">
              <div>
                <p className="font-sans text-[10px] uppercase tracking-wider mb-0.5" style={{ color: 'rgba(240,228,204,0.4)' }}>
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/5548984680088"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-[14px] font-medium"
                  style={{ color: '#25D366' }}
                >
                  (48) 98468-0088
                </a>
              </div>
              <div>
                <p className="font-sans text-[10px] uppercase tracking-wider mb-0.5" style={{ color: 'rgba(240,228,204,0.4)' }}>
                  Endereço
                </p>
                <p className="font-sans text-[12px]" style={{ color: 'rgba(240,228,204,0.6)' }}>
                  Av. Delamar José da Silva, 85<br />
                  Kobrasol · São José/SC · CEP 88102-101
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px mb-6" style={{ background: 'rgba(201,168,76,0.15)' }} />

        <div className="flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-sans text-[10px]" style={{ color: 'rgba(240,228,204,0.3)' }}>
            © {new Date().getFullYear()} Centro Comercial Schmitz — Todos os direitos reservados
          </p>
          <p className="font-sans text-[10px]" style={{ color: 'rgba(240,228,204,0.3)' }}>
            Kobrasol · São José / SC · Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
