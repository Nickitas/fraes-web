import { Link } from "react-router";
import { installationPageContent } from "../constants";
import { ROUTES } from "@/shared/config/routes";
import { RippleButton } from "@/shared/shadcn/ui/ripple-button";
import { RetroGrid } from "@/shared/shadcn/ui/retro-grid";
import { ArrowRight } from "lucide-react";

export const HelpSection = () => {
  const { helpSection } = installationPageContent;

  return (
    <section className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background to-muted/20">
      {/* Retro Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <RetroGrid
          angle={65}
          cellSize={50}
          opacity={0.3}
          lightLineColor="#3b82f6"
          darkLineColor="#8b5cf6"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 p-6 sm:p-8">
        {/* Icon/Badge */}
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
          <div className="size-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-medium text-primary">Нужна помощь?</span>
        </div>

        <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
          {helpSection.title}
        </h2>

        <p className="mb-6 max-w-2xl text-muted-foreground sm:text-lg">
          {helpSection.description}
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <Link to={ROUTES.downloads} className="w-full sm:w-auto">
            <RippleButton className="group w-full sm:w-auto">
              <span className="flex items-center gap-2">
                {helpSection.ctaButton}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </RippleButton>
          </Link>
        </div>
      </div>

      {/* Decorative corner */}
      <div className="absolute bottom-0 right-0 size-32 bg-gradient-to-tl from-primary/20 to-transparent opacity-50" />
    </section>
  );
};
