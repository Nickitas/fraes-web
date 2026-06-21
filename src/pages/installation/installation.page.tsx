import { HeroSection } from "./ui/hero-section";
import { BinaryInstallation } from "./ui/binary-installation";
import { FromSource } from "./ui/from-source";
import { BasicCommands } from "./ui/basic-commands";
import { CommandsSection } from "./ui/commands-section";
import { SystemRequirements } from "./ui/system-requirements";
import { HelpSection } from "./ui/help-section";

export function InstallationPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <HeroSection />
      <BinaryInstallation />
      <FromSource />
      <BasicCommands />
      <CommandsSection />
      <SystemRequirements />
      <HelpSection />
    </div>
  );
}
