import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ROUTES } from "@/shared/config/routes";
import { DesktopNavigation } from "./components/desktop-navigation";
import { Brand } from "./components/brand";
import { DesktopActions } from "./components/desktop-actions";
import { MobileMenu } from "./components/mobile-menu";
import { AnimatedThemeToggler } from "@/shared/shadcn/ui/animated-theme-toggler";
import { ScrollProgress } from "@/shared/shadcn/ui/scroll-progress";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed z-50 w-screen border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Brand
            setMobileMenuOpen={() => setMobileMenuOpen(false)}
            to={ROUTES.home}
          />
          <DesktopNavigation isActive={isActive} />
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4">
            <AnimatedThemeToggler className="relative size-9 rounded-lg border p-2" />
            <DesktopActions />
          </div>

          {/* Animated Mobile Menu Button */}
          <button
            className="group relative flex size-10 items-center justify-center rounded-lg border border-border/50 bg-background transition-all hover:border-border hover:bg-muted md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
          >
            <div className="relative">
              <Menu
                className={`absolute size-6 transition-all duration-300 ${
                  mobileMenuOpen
                    ? "scale-0 rotate-90 opacity-0"
                    : "scale-100 rotate-0 opacity-100"
                }`}
              />
              <X
                className={`size-6 transition-all duration-300 ${
                  mobileMenuOpen
                    ? "scale-100 rotate-0 opacity-100"
                    : "scale-0 -rotate-90 opacity-0"
                }`}
              />
            </div>
            {/* Button glow effect */}
            <div className="absolute inset-0 rounded-lg bg-primary/5 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
          </button>
        </div>
      </div>

      {/* Mobile Menu with animation */}
      <MobileMenu
        isActive={isActive}
        isOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <ScrollProgress />
    </nav>
  );
}
