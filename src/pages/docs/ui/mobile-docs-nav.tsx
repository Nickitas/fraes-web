import { useState } from "react";
import { Menu, X, BookOpen, FileCode, Zap } from "lucide-react";
import { Link, useLocation } from "react-router";
import { docsPageContent } from "../constants";
import { Button } from "@/shared/shadcn/components/ui/button";
import { cn } from "@/shared/shadcn/lib/utils";

export const MobileDocsNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Toggle Button */}
      <Button
        variant="outline"
        size="icon"
        className="mb-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
      </Button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mb-6 overflow-hidden rounded-xl border-2 border-border/50 bg-gradient-to-br from-background to-muted/20 lg:hidden">
          <nav className="space-y-6 p-4">
            <Link
              to="/docs"
              className={cn(
                "flex items-center gap-3 rounded-lg px-4 py-3 transition-all",
                isActive("/docs")
                  ? "bg-muted/50 font-medium text-foreground"
                  : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
              )}
              onClick={() => setIsOpen(false)}
            >
              <BookOpen className="h-5 w-5" />
              <span>Документация</span>
            </Link>

            <div className="space-y-3">
              <div className="flex items-center gap-2 px-4">
                <FileCode className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-semibold text-foreground/80 uppercase">
                  Модули
                </h3>
              </div>
              <ul className="space-y-1">
                {docsPageContent.modules.map((module) => (
                  <li key={module.id}>
                    <Link
                      to={`/docs/modules/${module.id}`}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-4 py-3 transition-all",
                        isActive(`/docs/modules/${module.id}`)
                          ? "bg-muted/50 font-medium text-foreground"
                          : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      <span
                        className={cn(
                          "h-2 w-2 shrink-0 rounded-full",
                          module.status === "stable"
                            ? "bg-green-500"
                            : "bg-yellow-500"
                        )}
                      />
                      <span>{module.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 px-4">
                <Zap className="h-4 w-4 text-primary" />
                <h3 className="text-sm font-semibold text-foreground/80 uppercase">
                  Возможности
                </h3>
              </div>
              <ul className="space-y-1">
                {docsPageContent.capabilities.map((capability) => (
                  <li key={capability.id}>
                    <Link
                      to={`/docs/capabilities/${capability.id}`}
                      className={cn(
                        "block rounded-lg px-4 py-3 transition-all",
                        isActive(`/docs/capabilities/${capability.id}`)
                          ? "bg-muted/50 font-medium text-foreground"
                          : "text-muted-foreground hover:bg-muted/30 hover:text-foreground"
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {capability.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
