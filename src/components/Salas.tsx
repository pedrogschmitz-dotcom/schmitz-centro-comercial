interface Room {
  id: string;
  floor: string;
  area: string;
  type: string;
  features: string[];
  highlight?: string;
  available: boolean;
}

const rooms: Room[] = [
  {
    id: 'S-001',
    floor: 'Térreo',
    area: '100 m²',
    type: 'Sala de frente',
    features: ['Banheiro privativo', 'Alta visibilidade', 'Fácil acesso', 'Alvarás em dia'],
    highlight: 'DESTAQUE',
    available: true,
  },
  {
    id: 'S-100',
    floor: '1º Andar',
    area: '35–40 m²',
    type: 'Sala comercial',
    features: ['Banheiro privativo', 'Ambiente arejado', 'Iluminação moderna', 'Alvarás em dia'],
    available: true,
  },
  {
    id: 'S-200',
    floor: '2º Andar',
    area: '35–40 m²',
    type: 'Sala comercial',
    features: ['Banheiro privativo', 'Ambiente tranquilo', 'Iluminação natural', 'Alvarás em dia'],
    available: true,
  },
  {
    id: 'S-ATI',
    floor: 'Ático — 4º Andar',
    area: '200+ m²',
    type: 'Unidade completa',
    features: [
      'Espaço amplo e versátil',
      'Ideal para clínica, academia ou escola',
      'Vistas privilegiadas',
      'Alvarás em dia',
    ],
    highlight: 'ÁTICO',
    available: true,
  },
];

export default function Salas() {
  return (
    <section
      id="salas"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #FAF5EC 0%, #F0E4CC 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header da seção */}
        <div className="text-center mb-14">
          <p
            className="font-sans text-[10px] uppercase tracking-[0.35em] mb-3"
            style={{ color: '#C9A84C' }}
          >
            Salas disponíveis
          </p>
          <h2
            className="font-serif text-[38px] md:text-[52px] font-light leading-tight mb-4"
            style={{ color: '#561525' }}
          >
            Espaço para o seu negócio crescer
          </h2>
          <hr className="gold-divider max-w-[200px] mx-auto mb-6" />
          <p
            className="font-sans text-[13px] leading-relaxed max-w-xl mx-auto"
            style={{ color: '#5a4a3a' }}
          >
            Salas de 35 a 40 m², com banheiro privativo, ambientes arejados e iluminados.
            Visita mediante agendamento. Sem compromisso.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>

        {/* CTA rodapé */}
        <div
          className="mt-12 text-center py-8 px-6 rounded-sm"
          style={{
            background: 'linear-gradient(145deg, #fdfaf4, #f0e4cc)',
            boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.06), 0 1px 0 rgba(255,255,255,0.8)',
            border: '1px solid rgba(0,0,0,0.06)',
          }}
        >
          <p
            className="font-sans text-[11px] uppercase tracking-widest mb-1"
            style={{ color: '#C9A84C' }}
          >
            Entre em contato
          </p>
          <p className="font-serif text-[20px] mb-4" style={{ color: '#561525' }}>
            Agende uma visita sem compromisso
          </p>
          <a
            href="https://wa.me/5548984680088?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20agendar%20uma%20visita"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-emboss inline-block text-white font-sans text-[12px] uppercase tracking-widest px-10 py-4 rounded-sm"
          >
            (48) 98468-0088 — WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function RoomCard({ room }: { room: Room }) {
  return (
    <div
      className="paper-card rounded-sm overflow-hidden group"
      style={{ transition: 'transform 0.2s, box-shadow 0.2s' }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)';
        (e.currentTarget as HTMLElement).style.boxShadow =
          '0 4px 8px rgba(0,0,0,0.18), 0 16px 40px rgba(0,0,0,0.16), inset 0 1px 0 rgba(255,255,255,0.7)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = '';
        (e.currentTarget as HTMLElement).style.boxShadow = '';
      }}
    >
      {/* Header do card */}
      <div
        className="px-6 pt-5 pb-4 flex items-start justify-between"
        style={{
          background: 'linear-gradient(160deg, #561525 0%, #3d0e19 100%)',
          boxShadow: 'inset 0 -2px 4px rgba(0,0,0,0.2)',
        }}
      >
        <div>
          <p
            className="font-sans text-[9px] uppercase tracking-[0.3em] mb-1"
            style={{ color: '#C9A84C' }}
          >
            {room.floor}
          </p>
          <h3
            className="font-serif text-[22px] font-light"
            style={{ color: '#FAF5EC', textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}
          >
            {room.type}
          </h3>
        </div>
        <div className="text-right">
          {room.highlight && (
            <span
              className="badge-emboss font-sans text-[8px] uppercase tracking-widest px-2 py-1 inline-block mb-2 rounded-sm"
            >
              {room.highlight}
            </span>
          )}
          <p
            className="font-serif text-[28px] font-light leading-none"
            style={{ color: '#E2C47A' }}
          >
            {room.area}
          </p>
        </div>
      </div>

      {/* Corpo do card */}
      <div className="px-6 py-5">
        <ul className="space-y-2 mb-5">
          {room.features.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: '#C9A84C', boxShadow: '0 0 4px rgba(201,168,76,0.4)' }}
              />
              <span
                className="font-sans text-[12px]"
                style={{ color: '#4a3a2a' }}
              >
                {f}
              </span>
            </li>
          ))}
        </ul>
        <hr className="gold-divider mb-4" />
        <a
          href={`https://wa.me/5548984680088?text=Olá,%20tenho%20interesse%20na%20sala%20${room.id}%20(${room.floor})%20e%20gostaria%20de%20agendar%20uma%20visita`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-emboss block w-full text-center text-white font-sans text-[11px] uppercase tracking-widest py-3 rounded-sm"
        >
          Tenho interesse — WhatsApp
        </a>
      </div>
    </div>
  );
}
