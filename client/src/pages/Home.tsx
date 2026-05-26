import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * Home Page
 * Design: Minimalist Corporate - Hero section with generated background image
 * Features: Welcome message, featured services preview, call-to-action
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section
          className="relative w-full h-48 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663177966073/TeyyjsBzEmTDZEnhfuwCSb/hero-tavares-Xf4zbaa7eERkwMH8TE9yjS.webp')`,
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </section>

        {/* Featured Services Preview */}
        <section id="servicos" className="container py-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Nossos Serviços</h2>
            <div className="w-20 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-secondary p-8 rounded-sm border-l-4 border-accent hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent rounded-sm mb-4 flex items-center justify-center">
                <span className="text-primary font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Instalações Residenciais</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Serviços completos de instalação elétrica para residências, desde pontos de ar condicionado até iluminação e tomadas.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-sm border-l-4 border-accent hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent rounded-sm mb-4 flex items-center justify-center">
                <span className="text-primary font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Construção e Reformas</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Atuamos em todas as etapas de construção elétrica, desde o padrão de entrada até os acabamentos finais.
              </p>
            </div>
            <div className="bg-secondary p-8 rounded-sm border-l-4 border-accent hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-accent rounded-sm mb-4 flex items-center justify-center">
                <span className="text-primary font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Serviços Comerciais</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Soluções elétricas especializadas para condomínios, empresas e estabelecimentos comerciais.
              </p>
            </div>
          </div>

          {/* Button to Services Page */}
          <div className="text-center">
            <a
              href="/servicos"
              className="inline-block bg-accent text-primary px-8 py-3 font-bold rounded-sm hover:bg-opacity-90 transition-all"
            >
              Explorar Serviços
            </a>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary text-white py-16">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-4">Pronto para começar?</h2>
            <a
              href="https://wa.me/5516991970758"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-primary px-10 py-3 font-bold rounded-sm hover:bg-opacity-90 transition-all"
            >
              Entrar em Contato
            </a>
            <p className="text-gray-200 text-sm mt-4">*Nosso Whatsapp</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
