import { Hero } from "@/shared/ui/hero";
import { installationPageContent } from "../constants";

export const HeroSection = () => {
  const { hero } = installationPageContent;

  return <Hero title={hero.title} subtitle={hero.subtitle} />;
};
