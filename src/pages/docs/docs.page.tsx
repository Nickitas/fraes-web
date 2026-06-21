import { HeroSection } from "./ui/hero-section";
import { DocsOverview } from "./ui/docs-overview";

export function DocsPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <HeroSection />
      <DocsOverview />
    </div>
  );
}
