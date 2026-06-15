import { Hero } from "@/shared/ui/hero";
import { TextAnimate } from "@/shared/shadcn/ui/text-animate";
import { releasesPageContent } from "../constants";

export const HeroSection = () => {
  const { hero } = releasesPageContent;

  return (
    <div className="space-y-4">
      <Hero title={hero.title} subtitle={hero.subtitle} />
      <TextAnimate
        animation="fadeIn"
        by="word"
        delay={0.4}
        className="max-w-2xl text-sm text-muted-foreground sm:text-base"
      >
        {hero.description}
      </TextAnimate>
    </div>
  );
};
