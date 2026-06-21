import { Link, useLocation } from "react-router";
import { ChevronRight, BookOpen, FileCode, Zap } from "lucide-react";
import { docsPageContent } from "../constants";
import { cn } from "@/shared/shadcn/lib/utils";

export const DocsBreadcrumb = () => {
  const location = useLocation();
  const isDocsPage = location.pathname === "/docs";

  if (isDocsPage) {
    return null;
  }

  // Determine if we're on a module or capability page
  const moduleMatch = location.pathname.match(/\/docs\/modules\/([^/]+)/);
  const capabilityMatch = location.pathname.match(
    /\/docs\/capabilities\/([^/]+)/
  );

  if (!moduleMatch && !capabilityMatch) {
    return null;
  }

  const breadcrumbItems: {
    label: string;
    path: string;
    icon?: React.ReactNode;
  }[] = [
    {
      label: "Документация",
      path: "/docs",
      icon: <BookOpen className="h-4 w-4" />,
    },
  ];

  if (moduleMatch) {
    const moduleId = moduleMatch[1];
    const module = docsPageContent.modules.find((m) => m.id === moduleId);
    if (module) {
      breadcrumbItems.push({
        label: module.title,
        path: location.pathname,
        icon: <FileCode className="h-4 w-4" />,
      });
    }
  }

  if (capabilityMatch) {
    const capabilityId = capabilityMatch[1];
    const capability = docsPageContent.capabilities.find(
      (c) => c.id === capabilityId
    );
    if (capability) {
      breadcrumbItems.push({
        label: capability.title,
        path: location.pathname,
        icon: <Zap className="h-4 w-4" />,
      });
    }
  }

  return (
    <nav className="mt-5 mb-8 flex items-center gap-2 text-sm">
      {breadcrumbItems.map((item, index) => (
        <div key={item.path} className="flex items-center gap-2">
          {index > 0 && (
            <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
          )}
          {index === breadcrumbItems.length - 1 ? (
            <div className="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-1.5">
              {item.icon}
              <span className="font-medium text-foreground">{item.label}</span>
            </div>
          ) : (
            <Link
              to={item.path}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-1.5 transition-all",
                "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
};
