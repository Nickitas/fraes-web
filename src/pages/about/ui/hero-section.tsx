import { Hero } from "@/shared/ui/hero";
import { aboutPageContent } from "../constants";

export const HeroSetion = () => {
  const { hero } = aboutPageContent;

  return <Hero title={hero.title} subtitle={hero.subtitle} />;
};
