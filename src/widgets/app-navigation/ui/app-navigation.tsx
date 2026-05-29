import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ROUTES } from "@/shared/config/routes";
import { DesktopNavigation } from "./components/desktop-navigation";
import { Brand } from "./components/brand";
import { DesktopActions } from "./components/desktop-actions";
import { MobileMenu } from "./components/mobile-menu";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed z-50 w-screen border-b bg-background">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Brand
            setMobileMenuOpen={() => setMobileMenuOpen(false)}
            to={ROUTES.home}
          />
          <DesktopNavigation isActive={isActive} />
        </div>

        <DesktopActions />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Открыть меню"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <MobileMenu
          isActive={isActive}
          setMobileMenuOpen={() => setMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}
