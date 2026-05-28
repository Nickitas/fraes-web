import { HeroSection } from "./ui/hero-section";
import { FeaturesSection } from "./ui/features-section";
import { ScientificSection } from "./ui/scientific-section";
import { CommandsSection } from "./ui/commands-section";
import { Meteors } from "@/shared/shadcn/ui/meteors";

export function HomePage() {
  return (
    <div className="space-y-12 sm:space-y-16">
      <div className="relative overflow-x-hidden">
        <HeroSection />
        <Meteors />
      </div>
      <FeaturesSection />
      <ScientificSection />
      <CommandsSection />
    </div>
  );
}
