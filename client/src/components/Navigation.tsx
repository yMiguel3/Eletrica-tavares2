import { Link } from "wouter";

/**
 * Navigation Component
 * Design: Minimalist Corporate - Navy blue header with golden yellow accent line
 * Features: Clean horizontal navigation with logo and menu items
 */
export default function Navigation() {
  const handleNavClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <nav className="sticky top-0 z-50 bg-white border-b-4 border-accent shadow-sm">
      <div className="container py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <Link href="/" onClick={handleNavClick}>
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="/manus-storage/pasted_file_PvAalF_image_d886345f.png"
              alt="Elétrica Tavares"
              className="h-10 w-auto"
            />
          </div>
        </Link>

        {/* Menu Items */}
        <div className="flex gap-8 items-center">
          <Link href="/" onClick={handleNavClick}>
            <span className="text-primary hover:text-accent transition-colors cursor-pointer font-medium">
              Home
            </span>
          </Link>
          <Link href="/historia" onClick={handleNavClick}>
            <span className="text-primary hover:text-accent transition-colors cursor-pointer font-medium">
              História
            </span>
          </Link>
          <Link href="/servicos" onClick={handleNavClick}>
            <span className="text-primary hover:text-accent transition-colors cursor-pointer font-medium">
              Serviços
            </span>
          </Link>
          <Link href="/dicas" onClick={handleNavClick}>
            <span className="text-primary hover:text-accent transition-colors cursor-pointer font-medium">
              Dicas
            </span>
          </Link>
          <Link href="/feedback" onClick={handleNavClick}>
            <span className="text-primary hover:text-accent transition-colors cursor-pointer font-medium">
              Feedback
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
