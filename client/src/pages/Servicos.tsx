import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * Servicos Page
 * Design: Minimalist Corporate - Services listing with pricing tiers
 * Features: Service descriptions, pricing, features
 */
export default function Servicos() {
  const services = [
    {
      name: "Instalações Residenciais",
      description: "Serviços completos de instalação elétrica para residências, desde pontos de ar condicionado até iluminação e tomadas.",
      price: "A partir de R$ 150",
      features: [
        "Instalação de pontos para ar condicionado",
        "Instalação de luminárias e lustres",
        "Instalação de ventiladores",
        "Passagem de cabos e montagem de tomadas",
        "Instalação de fitas de LED"
      ],
    },
    {
      name: "Construção e Reformas",
      description: "Atuamos em todas as etapas de construção elétrica, desde o padrão de entrada até os acabamentos finais.",
      price: "Orçamento personalizado",
      features: [
        "Padrão de entrada",
        "Tubulação elétrica completa",
        "Montagem de painéis",
        "Instalação de interruptores",
        "Acabamentos finais"
      ],
    },
    {
      name: "Serviços Comerciais",
      description: "Soluções elétricas especializadas para condomínios, empresas e estabelecimentos comerciais.",
      price: "Orçamento personalizado",
      features: [
        "Manutenção em cabines elétricas",
        "Contrato de manutenção elétrica",
        "Reaperto em painéis de disjuntores",
        "Instalação de sensores de presença",
        "Instalação de luminárias de emergência"
      ],
    },
    {
      name: "Laudos e Certificações",
      description: "Emissão de laudos técnicos e certificações exigidas por lei para segurança elétrica.",
      price: "A partir de R$ 300",
      features: [
        "Laudo de SPDA (para-raios)",
        "Laudo de termográfica",
        "ART Elétrica",
        "Instalação de DPS",
        "Instalação de DR"
      ],
    },
    {
      name: "Atendimento de Emergência",
      description: "Resposta rápida e eficiente para problemas elétricos que não podem esperar.",
      price: "Consulte-nos",
      features: [
        "Disponibilidade 24/7",
        "Diagnóstico rápido",
        "Solução imediata",
        "Profissionais treinados",
        "Garantia de serviço"
      ],
    },
    {
      name: "Iluminação e Decoração",
      description: "Instalação de sistemas de iluminação modernos e decorativos para ambientes residenciais e comerciais.",
      price: "A partir de R$ 100",
      features: [
        "Fitas de LED em móveis planejados",
        "Fitas de LED em teto e paredes",
        "Luminárias e lustres variados",
        "Sensores de presença",
        "Iluminação de emergência"
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary text-white py-12">
          <div className="container">
            <h1 className="text-4xl font-bold">Nossos Serviços</h1>
            <div className="w-20 h-1 bg-accent mt-4"></div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="container py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-border rounded-sm overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Service Header */}
                <div className="bg-primary text-white p-8">
                  <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
                  <p className="text-accent text-lg font-bold">{service.price}</p>
                </div>

                {/* Service Content */}
                <div className="p-8">
                  <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-bold text-primary mb-4">Incluso:</h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3 text-sm text-gray-700">
                          <span className="text-accent font-bold mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={`https://wa.me/5516991970758?text=Olá%2C%20quero%20solicitar%20um%20orçamento%20para%20o%20serviço%20${encodeURIComponent(service.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-primary text-white py-3 font-bold rounded-sm hover:bg-opacity-90 transition-all text-center"
                  >
                    Solicitar Orçamento
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Additional Services Info */}
        <section className="bg-secondary py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Por que escolher nossos serviços?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Equipe Treinada</h3>
                  <p className="text-gray-700 text-sm">
                    Nossa equipe é formada e treinada para realizar qualquer serviço elétrico desde construção e reformas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Cobertura Regional</h3>
                  <p className="text-gray-700 text-sm">
                    Atendemos todas as cidades da região de Ribeirão Preto com profissionalismo e prontidão.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Certificações e Laudos</h3>
                  <p className="text-gray-700 text-sm">
                    Oferecemos serviços de ART Elétrica e laudos técnicos conforme exigências legais.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Atendimento 24/7</h3>
                  <p className="text-gray-700 text-sm">
                    Disponibilidade para emergências e problemas que não podem esperar.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
