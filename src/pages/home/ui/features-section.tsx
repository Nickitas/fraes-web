import { homePageContent } from "../constants";

export const FeaturesSection = () => {
  const { features } = homePageContent;

  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between gap-4"><div><p className="text-xs font-medium tracking-[0.2em] text-primary uppercase">Возможности</p><h2 className="mt-2 text-2xl font-bold sm:text-3xl">Инструменты для исследования побережья</h2></div><span className="hidden text-sm text-muted-foreground sm:block">v2.0 · scientific workflow</span></div>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
          <div key={feature.title} className="group relative overflow-hidden rounded-2xl border bg-gradient-to-br from-background to-muted/30 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg sm:p-6">
            <span className="absolute top-4 right-4 font-mono text-xs text-muted-foreground/50">0{index + 1}</span>
            <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110"><Icon className="size-6 sm:size-7" /></div>
            <div className="mb-3 h-1 w-8 rounded-full bg-primary/40 transition-all group-hover:w-14" />
            <h3 className="mb-2 text-lg font-semibold sm:text-xl">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground sm:text-base">
              {feature.description}
            </p>
          </div>
          );
        })}
      </div>
    </section>
  );
};
