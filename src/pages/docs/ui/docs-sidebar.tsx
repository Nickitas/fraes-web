import { useLocation, Link } from "react-router";
import { docsPageContent } from "../constants";
import { cn } from "@/shared/shadcn/lib/utils";
import { TableOfContents } from "./table-of-contents";
import { FileCode, Zap } from "lucide-react";

export const DocsSidebar = () => {
  const location = useLocation();
  const isDocsPage = location.pathname === "/docs";
  const isDetailPage =
    location.pathname.startsWith("/docs/modules/") ||
    location.pathname.startsWith("/docs/capabilities/");

  // Hide sidebar on main docs page
  if (isDocsPage) {
    return null;
  }

  return (
    <aside
      className="hidden w-72 shrink-0 pr-8 lg:block"
      style={{
        position: "sticky",
        top: "5rem",
        alignSelf: "flex-start",
        maxHeight: "calc(100vh - 6rem)",
        overflowY: "auto",
      }}
    >
      <nav className="scrollbar-thin scrollbar-thumb-muted-foreground/20 space-y-4 pr-2 hover:scrollbar-thumb-muted-foreground/40">
        {/* Modules Section */}
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
                    "flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all",
                    "hover:bg-muted/50",
                    location.pathname === `/docs/modules/${module.id}`
                      ? "bg-muted/50 font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "h-1.5 w-1.5 shrink-0 rounded-full",
                      module.status === "stable"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    )}
                  />
                  {module.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Capabilities Section */}
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
                    "block rounded-lg px-4 py-2 text-sm transition-all",
                    "hover:bg-muted/50",
                    location.pathname === `/docs/capabilities/${capability.id}`
                      ? "bg-muted/50 font-medium text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {capability.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Table of Contents on detail pages */}
        {isDetailPage && (
          <>
            <div className="border-t border-border/50 pt-8">
              <TableOfContents />
            </div>
          </>
        )}
      </nav>
    </aside>
  );
};
