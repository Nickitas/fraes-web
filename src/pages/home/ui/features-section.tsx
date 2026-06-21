import { homePageContent } from "../constants";

export const FeaturesSection = () => {
  const { features } = homePageContent;

  return (
    <section className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <div key={feature.title} className="rounded-lg border p-4 sm:p-6">
            <div className="mb-4">
              <Icon className="size-10 sm:size-12" />
            </div>
            <h3 className="mb-2 text-lg font-semibold sm:text-xl">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground sm:text-base">
              {feature.description}
            </p>
          </div>
        );
      })}
    </section>
  );
};
