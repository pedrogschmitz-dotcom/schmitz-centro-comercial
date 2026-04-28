import { useState } from 'react';

export default function Contato() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ nome: '', telefone: '', interesse: '', mensagem: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Olá! Me chamo ${form.nome}.\n` +
      `Interesse: ${form.interesse || 'Sala comercial'}\n` +
      `Telefone: ${form.telefone}\n` +
      (form.mensagem ? `Mensagem: ${form.mensagem}` : '')
    );
    window.open(`https://wa.me/5548984680088?text=${text}`, '_blank', 'noopener noreferrer');
    setSent(true);
  };

  return (
    <section
      id="contato"
      className="py-24 px-6"
      style={{
        background: 'linear-gradient(160deg, #3d0e19 0%, #561525 50%, #4a1120 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grain */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.05 }}>
        <svg width="100%" height="100%"><filter id="g3"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#g3)" /></svg>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] mb-3" style={{ color: '#C9A84C' }}>
            Agende uma visita
          </p>
          <h2 className="font-serif text-[38px] md:text-[52px] font-light leading-tight mb-4" style={{ color: '#FAF5EC' }}>
            Entre em contato
          </h2>
          <hr className="gold-divider max-w-[200px] mx-auto mb-4" />
          <p className="font-sans text-[13px]" style={{ color: 'rgba(240,228,204,0.65)' }}>
            Visita sem compromisso. Fale diretamente com o proprietário.
          </p>
        </div>

        {/* Formulário skeuomorphic */}
        <div
          className="rounded-sm px-8 py-8"
          style={{
            background: 'linear-gradient(145deg, #fdfaf4 0%, #f5ecda 50%, #ede0c4 100%)',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2), 0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.7)',
            border: '1px solid rgba(0,0,0,0.08)',
          }}
        >
          {sent ? (
            <div className="text-center py-10">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl"
                style={{
                  background: 'linear-gradient(145deg, #2de070, #1aad57)',
                  boxShadow: '0 4px 16px rgba(37,211,102,0.4), inset 0 1px 0 rgba(255,255,255,0.3)',
                }}
              >
                ✓
              </div>
              <h3 className="font-serif text-[24px] mb-2" style={{ color: '#561525' }}>
                WhatsApp aberto!
              </h3>
              <p className="font-sans text-[12px]" style={{ color: '#6a5a4a' }}>
                Conclua o envio pelo WhatsApp. Em breve entraremos em contato.
              </p>
              <button
                onClick={() => setSent(false)}
                className="mt-6 font-sans text-[11px] uppercase tracking-widest"
                style={{ color: '#C9A84C' }}
              >
                Enviar outra mensagem
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-widest mb-1.5" style={{ color: '#6a5a4a' }}>
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="nome"
                    required
                    value={form.nome}
                    onChange={handleChange}
                    placeholder="Seu nome completo"
                    className="input-deboss w-full px-4 py-3 rounded-sm font-sans text-[13px]"
                    style={{ color: '#2a1a0a' }}
                  />
                </div>
                <div>
                  <label className="block font-sans text-[10px] uppercase tracking-widest mb-1.5" style={{ color: '#6a5a4a' }}>
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    name="telefone"
                    required
                    value={form.telefone}
                    onChange={handleChange}
                    placeholder="(48) 99999-9999"
                    className="input-deboss w-full px-4 py-3 rounded-sm font-sans text-[13px]"
                    style={{ color: '#2a1a0a' }}
                  />
                </div>
              </div>

              <div>
                <label className="block font-sans text-[10px] uppercase tracking-widest mb-1.5" style={{ color: '#6a5a4a' }}>
                  Interesse
                </label>
                <select
                  name="interesse"
                  value={form.interesse}
                  onChange={handleChange}
                  className="input-deboss w-full px-4 py-3 rounded-sm font-sans text-[13px]"
                  style={{ color: '#2a1a0a' }}
                >
                  <option value="">Selecione o tipo de sala</option>
                  <option value="Sala térrea (aprox. 100 m²)">Sala térrea — aprox. 100 m²</option>
                  <option value="Sala padrão (35–40 m²)">Sala padrão — 35 a 40 m²</option>
                  <option value="Ático (200+ m²)">Ático — 200+ m²</option>
                  <option value="Quero conhecer as opções">Quero conhecer as opções</option>
                </select>
              </div>

              <div>
                <label className="block font-sans text-[10px] uppercase tracking-widest mb-1.5" style={{ color: '#6a5a4a' }}>
                  Mensagem (opcional)
                </label>
                <textarea
                  name="mensagem"
                  value={form.mensagem}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Informações adicionais, ramo de atividade..."
                  className="input-deboss w-full px-4 py-3 rounded-sm font-sans text-[13px] resize-none"
                  style={{ color: '#2a1a0a' }}
                />
              </div>

              <button
                type="submit"
                className="btn-emboss w-full text-white font-sans text-[12px] uppercase tracking-widest py-4 rounded-sm"
              >
                📱 Enviar pelo WhatsApp
              </button>

              <p className="text-center font-sans text-[10px]" style={{ color: '#8a7a6a' }}>
                Você será redirecionado ao WhatsApp para concluir o envio.
              </p>
            </form>
          )}
        </div>

        {/* Contato direto */}
        <div className="mt-8 text-center">
          <p className="font-sans text-[11px] uppercase tracking-widest mb-2" style={{ color: 'rgba(240,228,204,0.5)' }}>
            Contato direto
          </p>
          <a
            href="https://wa.me/5548984680088"
            target="_blank"
            rel="noopener noreferrer"
            className="font-serif text-[32px] font-light"
            style={{ color: '#C9A84C', textDecoration: 'none' }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#E2C47A')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#C9A84C')}
          >
            (48) 98468-0088
          </a>
          <div className="flex items-center justify-center gap-4 mt-2">
            <a
              href="tel:+5548984680088"
              className="font-sans text-[10px] uppercase tracking-widest"
              style={{ color: 'rgba(240,228,204,0.45)' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#C9A84C')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(240,228,204,0.45)')}
            >
              Ligar
            </a>
            <span style={{ color: 'rgba(240,228,204,0.2)' }}>·</span>
            <a
              href="https://wa.me/5548984680088"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-[10px] uppercase tracking-widest"
              style={{ color: 'rgba(240,228,204,0.45)' }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#25D366')}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = 'rgba(240,228,204,0.45)')}
            >
              WhatsApp
            </a>
          </div>
          <p className="font-sans text-[10px] mt-1" style={{ color: 'rgba(240,228,204,0.4)' }}>
            Av. Delamar José da Silva, 85 · Kobrasol · São José/SC
          </p>
        </div>
      </div>
    </section>
  );
}
