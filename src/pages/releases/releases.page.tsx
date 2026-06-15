import { HeroSection } from "./ui/hero-section";
import { VersionList } from "./ui/version-list";

export function ReleasesPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <HeroSection />
      <VersionList />
    </div>
  );
}
