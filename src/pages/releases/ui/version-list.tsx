import { releasesPageContent } from "../constants";
import { RepoBanner } from "./repo-banner";
import { VersionCard } from "./version-card";

export const VersionList = () => {
  const { releases } = releasesPageContent;

  return (
    <section className="space-y-8">
      <RepoBanner />

      <div>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-medium tracking-wider text-primary uppercase">
              Хронология
            </p>
            <h2 className="text-xl font-bold sm:text-2xl">Все версии</h2>
          </div>
          <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
            {releases.length} {releases.length === 1 ? "релиз" : "релиза"}
          </span>
        </div>

        <ol className="relative space-y-6">
          <div
            aria-hidden="true"
            className="absolute top-3 bottom-3 left-3 w-px bg-border sm:left-5"
          />

          {releases.map((release, index) => (
            <VersionCard key={release.version} release={release} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
};
