const faqItems = [
  {
    question: 'Onde fica o Centro Comercial Schmitz?',
    answer:
      'Na Av. Delamar José da Silva, 85, Kobrasol, São José/SC, CEP 88102-101. Kobrasol é o principal centro comercial de São José, com fácil acesso por ônibus e próximo à Grande Florianópolis.',
  },
  {
    question: 'O aluguel é direto com o proprietário?',
    answer:
      'Sim. O aluguel no Centro Comercial Schmitz é direto com o proprietário, sem intermediação de imobiliária. Isso garante mais flexibilidade, agilidade e relação direta com a gestão familiar do prédio.',
  },
  {
    question: 'O que está incluído no valor do aluguel?',
    answer:
      'O valor mensal inclui o aluguel da sala, o condomínio e o IPTU. A água também está incluída. O locatário paga apenas a energia elétrica da sua sala.',
  },
  {
    question: 'Quais tamanhos de salas estão disponíveis?',
    answer:
      'Há salas padrão de 35 a 40 m² com banheiro privativo, salas no térreo com maior visibilidade, e um ático com mais de 200 m² para locação como espaço único. Consulte a disponibilidade atual pelo WhatsApp.',
  },
  {
    question: 'O prédio tem elevador?',
    answer:
      'O prédio não possui elevador. As salas estão distribuídas em térreo, 1º, 2º e 3º andares, além de ático. Para quem necessita de acesso facilitado, indicamos as salas do térreo.',
  },
  {
    question: 'Quais tipos de negócios funcionam no prédio?',
    answer:
      'O Centro Comercial Schmitz tem um mix diversificado: ótica, salão de beleza, manicure, estúdio fotográfico, brechó, escritório de advocacia e outros profissionais liberais.',
  },
  {
    question: 'Como agendar uma visita?',
    answer:
      'Basta entrar em contato pelo WhatsApp (48) 98468-0088. As visitas são agendadas de segunda a sexta das 8h às 18h e sábados das 8h às 12h, sem compromisso.',
  },
  {
    question: 'O prédio tem estacionamento?',
    answer:
      'O prédio não possui estacionamento próprio. No entanto, há estacionamentos rotativos próximos e a localização central facilita o acesso a pé e por transporte público.',
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
