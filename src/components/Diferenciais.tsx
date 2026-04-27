const diferenciais = [
  {
    icon: '📍',
    title: 'Localização estratégica',
    desc: 'No coração do Kobrasol, o bairro mais populoso de São José. Alto fluxo de pessoas, próximo a farmácias, mercado e ponto de ônibus na porta.',
  },
  {
    icon: '🏛️',
    title: 'Tradição familiar',
    desc: 'Gerenciado pela família Schmitz há mais de 35 anos. Isso significa relação direta com o proprietário, flexibilidade e confiança que condomínios corporativos não têm.',
  },
  {
    icon: '✅',
    title: 'Alvarás 100% em dia',
    desc: 'Toda a documentação regularizada. Você aluga com segurança jurídica e pode exercer sua atividade profissional sem impedimentos.',
  },
  {
    icon: '🚿',
    title: 'Banheiro privativo',
    desc: 'Cada sala possui banheiro próprio. Conforto e privacidade para você e seus clientes — sem compartilhamento.',
  },
  {
    icon: '☀️',
    title: 'Ambientes arejados',
    desc: 'Salas amplas, com iluminação natural e boa ventilação. Um espaço agradável para trabalhar e receber clientes com qualidade.',
  },
  {
    icon: '🏢',
    title: 'Único centro comercial da região',
    desc: 'O único edifício com mix diversificado de serviços no Kobrasol: saúde, estética, direito, contabilidade e mais. Sinergia que beneficia todos os locatários.',
  },
];

export default function Diferenciais() {
  return (
    <section
      id="diferenciais"
      className="py-24 px-6"
      style={{
        background: 'linear-gradient(160deg, #3d0e19 0%, #561525 50%, #4a1120 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grain overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.05 }}>
        <svg width="100%" height="100%"><filter id="g2"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter><rect width="100%" height="100%" filter="url(#g2)" /></svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] mb-3" style={{ color: '#C9A84C' }}>
            Por que escolher o Schmitz
          </p>
          <h2 className="font-serif text-[38px] md:text-[52px] font-light leading-tight mb-4" style={{ color: '#FAF5EC' }}>
            Solidez que se vê.<br />
            <span style={{ color: '#C9A84C' }}>Localização que se sente.</span>
          </h2>
          <hr className="gold-divider max-w-[200px] mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {diferenciais.map((d, i) => (
            <div
              key={i}
              className="rounded-sm p-6 group"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
                border: '1px solid rgba(201,168,76,0.2)',
                boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.08)',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.5)';
                (e.currentTarget as HTMLElement).style.background =
                  'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.04) 100%)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(201,168,76,0.2)';
                (e.currentTarget as HTMLElement).style.background =
                  'linear-gradient(145deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)';
              }}
            >
              <div
                className="w-10 h-10 rounded-sm flex items-center justify-center mb-4 text-xl"
                style={{
                  background: 'linear-gradient(145deg, rgba(201,168,76,0.2), rgba(201,168,76,0.08))',
                  border: '1px solid rgba(201,168,76,0.3)',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
                }}
              >
                {d.icon}
              </div>
              <h3 className="font-serif text-[18px] mb-2" style={{ color: '#FAF5EC' }}>
                {d.title}
              </h3>
              <p className="font-sans text-[12px] leading-relaxed" style={{ color: 'rgba(240,228,204,0.65)' }}>
                {d.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Citação */}
        <div
          className="mt-14 text-center py-8 px-6 rounded-sm"
          style={{
            borderLeft: '3px solid #C9A84C',
            background: 'rgba(0,0,0,0.2)',
            boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.05)',
          }}
        >
          <p className="font-serif text-[22px] md:text-[26px] font-light italic" style={{ color: 'rgba(240,228,204,0.9)' }}>
            "Trabalhamos com você por anos, não por contrato."
          </p>
          <p className="font-sans text-[10px] uppercase tracking-widest mt-3" style={{ color: '#C9A84C' }}>
            Centro Comercial Schmitz
          </p>
        </div>
      </div>
    </section>
  );
}
