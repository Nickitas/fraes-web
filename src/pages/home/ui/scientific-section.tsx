import { WarpBackground } from "@/shared/shadcn/ui/warp-background";
import { homePageContent } from "../constants";

export const ScientificSection = () => {
  const { scientificContext } = homePageContent;
  return (
    <WarpBackground>
      <section className="rounded-lg border bg-muted p-4 sm:p-6 lg:p-8">
        <h2 className="mb-4 text-xl font-semibold sm:text-2xl">
          {scientificContext.title}
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          {scientificContext.content(scientificContext.dissertationTitle)}
        </p>
      </section>
    </WarpBackground>
  );
};
