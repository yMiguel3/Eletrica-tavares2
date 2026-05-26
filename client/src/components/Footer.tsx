/**
 * Footer Component
 * Design: Minimalist Corporate - Navy blue footer with golden yellow accent
 * Features: Clean footer with contact info and copyright
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white mt-20 pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Quick Links */}
          <div>
            <h3 className="text-accent font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-300 hover:text-accent transition-colors">Home</a></li>
              <li><a href="/historia" className="text-gray-300 hover:text-accent transition-colors">História</a></li>
              <li><a href="/servicos" className="text-gray-300 hover:text-accent transition-colors">Serviços</a></li>
              <li><a href="/projetos" className="text-gray-300 hover:text-accent transition-colors">Projetos</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-accent font-bold mb-4">Contato</h3>
            <div className="text-sm text-gray-300 space-y-3">
              <div>
                <strong>Celular:</strong>{" "}
                <a
                  href="https://wa.me/5516991970758"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  (16) 99197-0758
                </a>
              </div>
              <div>
                <strong>Email:</strong>{" "}
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=eletricatavares@outlook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  eletricatavares@outlook.com
                </a>
              </div>
              <div>
                <strong>Localização:</strong>{" "}
                <a
                  href="https://www.google.com/maps/search/Rua+Orlando+Mauro+198+Jd+California+Ribeirão+Preto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-accent transition-colors"
                >
                  Rua Orlando Mauro 198, Jd California, Ribeirão Preto
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-accent/30 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {currentYear} Tavares. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
