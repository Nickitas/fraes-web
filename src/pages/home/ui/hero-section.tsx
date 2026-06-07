import { Hero } from "@/shared/ui/hero";
import { SITE_CONFIG } from "@/shared/config/site";
import { Globe } from "@/shared/shadcn/components/ui/globe";
import { homePageContent } from "../constants";

export const HeroSection = () => {
  const { hero } = homePageContent;

  const visualContent = (
    <div className="relative top-0">
      <Globe className="z-10" />
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
      morphingTexts={["CLI-App", SITE_CONFIG.name]}
    />
  );
};
