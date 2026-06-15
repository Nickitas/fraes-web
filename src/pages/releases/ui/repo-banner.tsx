import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";
import { RippleButton } from "@/shared/shadcn/ui/ripple-button";
import { RetroGrid } from "@/shared/shadcn/ui/retro-grid";
import { releasesPageContent } from "../constants";

export const RepoBanner = () => {
  const { githubRepo, repoSection } = releasesPageContent;

  return (
    <section className="relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-br from-background to-muted/20">
      <div className="pointer-events-none absolute inset-0">
        <RetroGrid
          angle={65}
          cellSize={50}
          opacity={0.15}
          lightLineColor="#3b82f6"
          darkLineColor="#8b5cf6"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/90 to-transparent" />

      <div className="relative z-10 flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1">
            <SiGithub className="size-3.5 text-primary" />
            <span className="text-xs font-medium text-primary">
              {repoSection.badge}
            </span>
          </div>

          <div>
            <h2 className="text-xl font-bold sm:text-2xl">{repoSection.title}</h2>
            <p className="mt-1 max-w-xl text-sm text-muted-foreground sm:text-base">
              {repoSection.description}
            </p>
          </div>

          <a
            href={githubRepo.baseUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            {githubRepo.owner}/{githubRepo.name}
            <ExternalLink className="size-3.5" />
          </a>
        </div>

        <a
          href={githubRepo.baseUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto"
        >
          <RippleButton className="group w-full sm:w-auto">
            <span className="inline-flex items-center gap-2">
              {repoSection.buttonText}
              <ExternalLink className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </RippleButton>
        </a>
      </div>
    </section>
  );
};
