import { ApplicationAreas } from "./ui/application-areas";
import { Capabilities } from "./ui/capabilities";
import { HeroSetion } from "./ui/hero-section";
import { Repository } from "./ui/repository";
import { ScientificGoal } from "./ui/scientific-goal";
import { ScientificTasks } from "./ui/scientific-tasks";

export function AboutPage() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <HeroSetion />
      <ScientificGoal />
      <Capabilities />
      <ScientificTasks />
      <ApplicationAreas />
      <Repository />
    </div>
  );
}
