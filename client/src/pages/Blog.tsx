import { useState } from "react";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "5 Sinais de Alerta que Sua Instalação Elétrica Precisa de Manutenção",
      excerpt: "Aprenda a identificar problemas elétricos antes que se tornem perigosos.",
      category: "Segurança",
      content: "Disjuntores que desligam frequentemente, tomadas quentes, luzes piscando e cheiros estranhos são sinais de que sua instalação elétrica precisa de revisão urgente. A manutenção preventiva pode evitar acidentes graves e economizar dinheiro a longo prazo. Não ignore esses sinais! Procure um profissional qualificado para avaliar sua instalação.",
    },
    {
      id: 2,
      title: "Como Economizar Energia em Sua Casa: Dicas Práticas",
      excerpt: "Reduza sua conta de luz com essas estratégias simples e eficazes.",
      category: "Economia",
      content: "Usar lâmpadas LED, desligar aparelhos em standby, instalar disjuntores inteligentes e fazer manutenção regular dos equipamentos são formas comprovadas de reduzir o consumo de energia em até 30%. Pequenas mudanças nos hábitos diários podem gerar grandes economias ao longo do ano. Começe hoje mesmo a implementar essas dicas!",
    },
    {
      id: 3,
      title: "Entenda a Importância do Aterramento Elétrico",
      excerpt: "Proteção essencial para você e sua família.",
      category: "Técnico",
      content: "O aterramento é um sistema de segurança fundamental que protege contra choques elétricos e danos a equipamentos. Todo imóvel deve ter um sistema de aterramento adequado e verificado regularmente por profissionais qualificados. Este é um aspecto crítico da segurança elétrica que não deve ser negligenciado.",
    },
    {
      id: 4,
      title: "Reforma Elétrica: Quando é Necessário Fazer?",
      excerpt: "Saiba quando sua casa ou empresa precisa de uma atualização elétrica.",
      category: "Reformas",
      content: "Imóveis com mais de 20 anos, aqueles que vão receber novos equipamentos de alta potência, ou que apresentam problemas recorrentes devem passar por uma reforma elétrica completa para garantir segurança e eficiência. Uma reforma bem planejada pode aumentar a segurança, a eficiência energética e o valor do imóvel.",
    },
  ];

  const selectedPostData = blogPosts.find((post) => post.id === selectedPost);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />

      <main className="flex-1">
        {/* Blog Header */}
        <section className="bg-primary py-20">
          <div className="container">
            <h1 className="text-5xl font-bold text-white text-center mb-4">
              Blog da Elétrica Tavares
            </h1>
            <p className="text-xl text-white text-center opacity-90">
              Dicas, artigos e informações sobre segurança e eficiência elétrica
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="container py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-sm border-l-4 border-accent overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-accent bg-secondary px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-primary mb-3 hover:text-accent transition-colors cursor-pointer">
                    {post.title}
                  </h2>

                  <p className="text-gray-700 mb-6 line-clamp-3">
                    {post.content}
                  </p>

                  <button
                    onClick={() => setSelectedPost(post.id)}
                    className="inline-block px-6 py-2 bg-accent text-white font-semibold rounded-sm hover:bg-opacity-90 transition-all cursor-pointer"
                  >
                    Ler Mais
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />

      {/* Modal */}
      {selectedPost && selectedPostData && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white rounded-sm max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-accent bg-secondary px-3 py-1 rounded-full">
                  {selectedPostData.category}
                </span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="text-2xl font-bold text-gray-500 hover:text-primary transition-colors cursor-pointer"
                >
                  ✗
                </button>
              </div>

              <h1 className="text-4xl font-bold text-primary mb-4">
                {selectedPostData.title}
              </h1>

              <div className="text-gray-700 text-lg leading-relaxed">
                {selectedPostData.content}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2 bg-primary text-white font-semibold rounded-sm hover:bg-opacity-90 transition-all cursor-pointer"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
