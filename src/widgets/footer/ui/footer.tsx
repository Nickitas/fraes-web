import { BrandColumn } from "./components/brand-column";
import { ProjectLinks } from "./components/project-links";
import { MeteorsBackground } from "./components/meteors-background";
import { ResourcesLinks } from "./components/resources-links";
import { LegalLinks } from "./components/legal-links";
import { BottomBar } from "./components/bottom-bar";

export const Footer = () => {
  return (
    <footer className="relative mt-20 mb-2 overflow-hidden border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <MeteorsBackground />
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <BrandColumn />
            <ProjectLinks />
            <ResourcesLinks />
            <LegalLinks />
          </div>
        </div>
        <BottomBar />
      </div>
    </footer>
  );
};
