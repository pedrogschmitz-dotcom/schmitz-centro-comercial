const faqItems = [
  {
    question: 'Onde fica o Centro Comercial Schmitz?',
    answer:
      'Na Av. Delamar José da Silva, 85, Kobrasol, São José/SC, CEP 88102-101. O endereço fica em uma região de alto fluxo e fácil acesso.',
  },
  {
    question: 'Quais tamanhos de salas estão disponíveis?',
    answer:
      'Há salas padrão entre 35 e 40 m², sala térrea com cerca de 100 m² e ático com mais de 200 m², conforme disponibilidade no momento.',
  },
  {
    question: 'As salas têm banheiro privativo?',
    answer:
      'Sim. As unidades contam com banheiro privativo, trazendo mais conforto para profissionais e clientes.',
  },
  {
    question: 'Como agendar uma visita?',
    answer:
      'Você pode falar direto pelo WhatsApp no número (48) 98468-0088 e agendar uma visita sem compromisso.',
  },
  {
    question: 'O centro comercial é regularizado?',
    answer:
      'Sim. O edifício trabalha com documentação e alvarás em dia para oferecer segurança ao locatário.',
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-24 px-6"
      style={{ background: 'linear-gradient(180deg, #FAF5EC 0%, #F0E4CC 100%)' }}
      aria-labelledby="faq-title"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-sans text-[10px] uppercase tracking-[0.35em] mb-3" style={{ color: '#C9A84C' }}>
            Dúvidas frequentes
          </p>
          <h2 id="faq-title" className="font-serif text-[38px] md:text-[52px] font-light leading-tight mb-4" style={{ color: '#561525' }}>
            Perguntas sobre locação
          </h2>
          <hr className="gold-divider max-w-[220px] mx-auto mb-4" />
          <p className="font-sans text-[13px]" style={{ color: '#5a4a3a' }}>
            Informações objetivas para quem busca sala comercial no Kobrasol.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item) => (
            <details key={item.question} className="paper-card rounded-sm px-5 py-4">
              <summary className="font-serif text-[22px] cursor-pointer" style={{ color: '#561525' }}>
                {item.question}
              </summary>
              <p className="font-sans text-[13px] leading-relaxed mt-3" style={{ color: '#4a3a2a' }}>
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
