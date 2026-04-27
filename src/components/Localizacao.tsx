export default function Localizacao() {
  const endereco = 'Av. Delamar Jose da Silva, 85 - Kobrasol, Sao Jose - SC, 88102-101';
  const mapsUrl =
    `https://maps.google.com/maps?q=${encodeURIComponent(endereco)}&t=&z=17&ie=UTF8&iwloc=&output=embed`;
  const mapsDirectUrl =
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(endereco)}`;

  return (
    <section
      id="localizacao"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #FAF5EC 0%, #F0E4CC 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] mb-3" style={{ color: '#C9A84C' }}>
            Endereço
          </p>
          <h2 className="font-serif text-[38px] md:text-[52px] font-light leading-tight mb-4" style={{ color: '#561525' }}>
            Onde nos encontrar
          </h2>
          <hr className="gold-divider max-w-[200px] mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          {/* Info */}
          <div className="lg:col-span-1 space-y-4">
            {/* Placa endereço */}
            <div
              className="paper-card rounded-sm px-6 py-6"
            >
              <p className="font-sans text-[9px] uppercase tracking-[0.3em] mb-2" style={{ color: '#C9A84C' }}>
                Endereço
              </p>
              <p className="font-serif text-[20px] font-light leading-snug mb-1" style={{ color: '#561525' }}>
                Av. Delamar José da Silva, 85
              </p>
              <p className="font-sans text-[12px]" style={{ color: '#6a5a4a' }}>
                Kobrasol · São José / SC<br />
                CEP 88102-101
              </p>
            </div>

            {/* Pontos próximos */}
            <div className="paper-card rounded-sm px-6 py-5 space-y-3">
              <p className="font-sans text-[9px] uppercase tracking-[0.3em] mb-2" style={{ color: '#C9A84C' }}>
                Próximo a
              </p>
              {[
                { icon: '🚌', text: 'Ponto de ônibus na porta' },
                { icon: '💊', text: 'Farmácias ao redor' },
                { icon: '🛒', text: 'Supermercado próximo' },
                { icon: '🛣️', text: 'Fácil acesso à BR-101' },
                { icon: '🅿️', text: 'Estacionamento disponível' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3">
                  <span className="text-base">{item.icon}</span>
                  <span className="font-sans text-[12px]" style={{ color: '#4a3a2a' }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Botões */}
            <a
              href={mapsDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-bordeaux block w-full text-center text-white font-sans text-[11px] uppercase tracking-widest py-4 rounded-sm"
            >
              🗺️ Abrir no Google Maps
            </a>
            <a
              href="https://wa.me/5548984680088?text=Olá,%20preciso%20de%20informações%20sobre%20como%20chegar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-emboss block w-full text-center text-white font-sans text-[11px] uppercase tracking-widest py-4 rounded-sm"
            >
              📱 Falar pelo WhatsApp
            </a>
          </div>

          {/* Mapa */}
          <div
            className="lg:col-span-2 rounded-sm overflow-hidden"
            style={{
              boxShadow: '0 4px 8px rgba(0,0,0,0.15), 0 16px 40px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.4)',
              border: '3px solid rgba(255,255,255,0.8)',
              outline: '1px solid rgba(0,0,0,0.1)',
            }}
          >
            <iframe
              title="Mapa Centro Comercial Schmitz"
              src={mapsUrl}
              width="100%"
              height="420"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
