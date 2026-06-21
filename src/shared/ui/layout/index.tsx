import { useTheme } from "@/shared/shadcn/components/theme-provider";
import { Particles } from "@/shared/shadcn/ui/particles";
import { Navbar } from "@/widgets/app-navigation";
import { Footer } from "@/widgets/footer";
import { DocsSidebar } from "@/pages/docs/ui/docs-sidebar";
import { MobileDocsNav } from "@/pages/docs/ui/mobile-docs-nav";
import { ScrollToTop } from "@/shared/ui/scroll-to-top";
import { type ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();
  const color = theme === "dark" ? "#ffffff" : "#000000";
  const location = useLocation();
  const isAuthPage = location.pathname === "/login";
  const isDocsPage =
    location.pathname === "/docs" ||
    location.pathname.startsWith("/docs/modules/") ||
    location.pathname.startsWith("/docs/capabilities/");

  return (
    <div className="relative min-h-screen bg-background">
      <ScrollToTop />
      <Particles
        className="fixed inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
      <div className="relative z-10">
        <Navbar />
        <main className="container mx-auto px-4 pt-15 pb-12">
          {isDocsPage ? (
            <div className="mx-auto">
              <MobileDocsNav />
              <div className="flex items-start gap-8">
                <DocsSidebar />
                <div className="min-w-0 flex-1">{children}</div>
              </div>
            </div>
          ) : (
            <div className="mx-auto">{children}</div>
          )}
        </main>
        {!isAuthPage && <Footer />}
      </div>
    </div>
  );
}
