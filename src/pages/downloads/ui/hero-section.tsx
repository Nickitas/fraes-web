import { Hero } from "@/shared/ui/hero";
import { downloadsPageContent } from "../constants";

export const HeroSection = () => {
  const { hero } = downloadsPageContent;

  return <Hero title={hero.title} subtitle={hero.subtitle} />;
};
