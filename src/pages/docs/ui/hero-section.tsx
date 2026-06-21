import { Hero } from "@/shared/ui/hero";
import { docsPageContent } from "../constants";

export const HeroSection = () => {
  const { hero } = docsPageContent;

  return <Hero title={hero.title} subtitle={hero.subtitle} />;
};
