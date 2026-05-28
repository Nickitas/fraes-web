import { Hero } from "@/shared/ui/hero";
import { SITE_CONFIG } from "@/shared/config/site";
import { homePageContent } from "../constants";
import { Globe } from "@/shared/shadcn/components/ui/globe";

export const HeroSection = () => {
  const { hero } = homePageContent;

  const visualContent = (
    <div className="relative top-10">
      <span className="pointer-events-none absolute top-0 left-1/2 z-0 -translate-x-1/2 bg-linear-to-b from-black/70 to-transparent bg-clip-text text-center text-7xl leading-none font-semibold whitespace-pre-wrap text-transparent dark:from-white/50">
        FRAES
      </span>
      <Globe />
    </div>
  );

  return (
    <Hero
      title={SITE_CONFIG.name}
      subtitle={hero.subtitle}
      description={SITE_CONFIG.description}
      badges={hero.badges}
      ctaButtons={hero.ctaButtons}
      version={SITE_CONFIG.version}
      visualContent={visualContent}
    />
  );
};
