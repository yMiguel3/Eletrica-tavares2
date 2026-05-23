import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * Projetos Page
 * Design: Minimalist Corporate - Portfolio showcase with project cards
 * Features: Project gallery, descriptions, case studies
 */
export default function Projetos() {
  const projects = [
    {
      title: "*Projeto1",
      category: "*Categoria1",
      description: "*DescricaoProjeto1",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663177966073/TeyyjsBzEmTDZEnhfuwCSb/hero-tavares-Xf4zbaa7eERkwMH8TE9yjS.webp",
    },
    {
      title: "*Projeto2",
      category: "*Categoria2",
      description: "*DescricaoProjeto2",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663177966073/TeyyjsBzEmTDZEnhfuwCSb/about-section-DzE5QBCfAdeaR3x8fkieEY.webp",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-primary text-white py-12">
          <div className="container">
            <h1 className="text-4xl font-bold">Nossos Projetos</h1>
            <div className="w-20 h-1 bg-accent mt-4"></div>

          </div>
        </section>

        {/* Projects Grid */}
        <section className="container py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white border border-border rounded-sm overflow-hidden hover:shadow-xl transition-all duration-300 p-8"
              >
                {/* Project Info */}
                <span className="inline-block bg-accent text-primary text-xs font-bold px-3 py-1 rounded-sm mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-primary mb-3">{project.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Project Stats */}
        <section className="bg-secondary py-20">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                { number: "*NumProjetos", label: "Projetos Concluídos" },
                { number: "*NumClientes", label: "Clientes Satisfeitos" },
                { number: "11+", label: "Anos de Experiência" },
              ].map((stat, index) => (
                <div key={index} className="p-8 bg-white rounded-sm border-l-4 border-accent">
                  <div className="text-4xl font-bold text-accent mb-2">{stat.number}</div>
                  <p className="text-gray-700 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="container py-20 text-center">
          <h2 className="text-3xl font-bold text-primary mb-6">Tem um projeto em mente?</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Entre em contato
          </p>
          <a
            href="https://wa.me/5516991970758"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-white px-10 py-3 font-bold rounded-sm hover:bg-opacity-90 transition-all"
          >
            Iniciar Projeto
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
