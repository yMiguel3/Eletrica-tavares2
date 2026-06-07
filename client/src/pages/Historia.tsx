import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * Historia Page
 * Design: Minimalist Corporate - About section with image and timeline
 * Features: Company history, mission, values
 */
export default function Historia() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary text-white py-12">
          <div className="container">
            <h1 className="text-4xl font-bold">Nossa História</h1>
            <div className="w-20 h-1 bg-accent mt-4"></div>
          </div>
        </section>

        {/* Sobre Nós Content */}
        <section className="container py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="h-96 rounded-sm shadow-lg bg-primary flex items-center justify-center">
              <h3 className="text-5xl font-bold text-accent">Sobre Nós</h3>
            </div>

            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Quem Somos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Elétrica Tavares iniciou suas atividades em dezembro de 2014. Nasceu do sonho de oferecer atendimento elétrico especializado ao consumidor residencial que se encontrava muitas vezes esquecido e deixado de lado pelos concorrentes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Começou atendendo pequenos chamados de consumidores que reclamavam de chamados abertos e não atendidos. Aos poucos foi ganhando credibilidade do mercado e ampliou seus atendimentos para condomínios e consequentemente para suas respectivas imobiliárias.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Hoje atende também empresas que descobriram na Elétrica Tavares a solução para os problemas relacionados à parte elétrica, ganhando a confiança delas principalmente em atender com prontidão diante de emergências.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="bg-secondary py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Missão e Valores</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Mission */}
              <div className="bg-white p-8 rounded-sm border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary mb-4">Missão</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Oferecer atendimento elétrico exclusivo e especializado, compreendendo que cada caso é único e depende da infraestrutura do local. Utilizamos uma linguagem simplificada para que o cliente possa compreender todo o passo a passo do serviço a ser desenvolvido.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white p-8 rounded-sm border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary mb-4">Visão</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Ser a empresa de referência em atendimento elétrico especializado, reconhecida pela qualidade, prontidão e confiança junto aos consumidores residenciais, condomínios e empresas.
                </p>
              </div>

              {/* Values */}
              <div className="bg-white p-8 rounded-sm border-l-4 border-accent">
                <h3 className="text-xl font-bold text-primary mb-4">Valores</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Excelência no atendimento, confiabilidade, prontidão em emergências, transparência na comunicação e respeito ao cliente. Cada problema é único e merece uma solução personalizada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="container py-20">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Marcos Importantes</h2>

          <div className="space-y-8 max-w-2xl mx-auto">
            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold">
                  1
                </div>
                <div className="w-1 h-12 bg-accent mt-2"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold text-primary mb-2">Dezembro de 2014</h3>
                <p className="text-gray-700">
                  Fundação da Elétrica Tavares com o objetivo de oferecer atendimento elétrico especializado ao consumidor residencial.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold">
                  2
                </div>
                <div className="w-1 h-12 bg-accent mt-2"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold text-primary mb-2">2015-2016</h3>
                <p className="text-gray-700">
                  Consolidação no mercado residencial através de atendimento de qualidade e resolução de chamados abertos. Ganho de credibilidade junto aos consumidores.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold">
                  3
                </div>
                <div className="w-1 h-12 bg-accent mt-2"></div>
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold text-primary mb-2">2017-2019</h3>
                <p className="text-gray-700">
                  Expansão para atendimento de condomínios e imobiliárias. Ampliação da equipe e dos serviços oferecidos. Consolidação da marca no mercado.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-primary font-bold">
                  4
                </div>
              </div>
              <div className="pb-8">
                <h3 className="text-xl font-bold text-primary mb-2">2020 - Presente</h3>
                <p className="text-gray-700">
                  Atendimento a empresas que descobriram na Elétrica Tavares a solução para problemas elétricos. Reconhecimento pela prontidão em emergências e excelência no atendimento.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-secondary py-20">
          <div className="container">
            <h2 className="text-3xl font-bold text-primary text-center mb-12">Por que escolher a Elétrica Tavares?</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Atendimento Especializado</h3>
                  <p className="text-gray-700 text-sm">
                    Cada caso é único. Oferecemos soluções personalizadas para sua infraestrutura específica.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Prontidão em Emergências</h3>
                  <p className="text-gray-700 text-sm">
                    Resposta rápida e eficiente para problemas elétricos que não podem esperar.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Linguagem Simplificada</h3>
                  <p className="text-gray-700 text-sm">
                    Explicamos todo o passo a passo do serviço de forma clara e compreensível.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent rounded-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-primary mb-2">Confiança Comprovada</h3>
                  <p className="text-gray-700 text-sm">
                    Mais de 10 anos atendendo residências, condomínios e empresas com excelência.
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
