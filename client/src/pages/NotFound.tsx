import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

/**
 * NotFound Page (404)
 * Design: Minimalist Corporate - Error page with navigation back to home
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      <main className="flex-1 flex items-center justify-center">
        <div className="text-center py-20 px-4">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-primary mb-4">Página não encontrada</h2>
          <p className="text-gray-700 mb-8 max-w-md mx-auto">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mb-8"></div>
          <Link href="/">
            <button className="bg-primary text-white px-8 py-3 font-bold rounded-sm hover:bg-opacity-90 transition-all">
              Voltar para Home
            </button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
