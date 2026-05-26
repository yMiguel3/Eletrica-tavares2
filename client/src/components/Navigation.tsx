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
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663177966073/TeyyjsBzEmTDZEnhfuwCSb/logo-tavares_21e9d486.png"
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
          <Link href="/blog" onClick={handleNavClick}>
            <span className="text-primary hover:text-accent transition-colors cursor-pointer font-medium">
              Blog
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
