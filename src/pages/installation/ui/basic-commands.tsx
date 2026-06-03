import { installationPageContent } from "../constants";
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/shared/shadcn/components/terminal";

export const BasicCommands = () => {
  const { basicCommands } = installationPageContent;

  return (
    <section className="space-y-4 rounded-lg border p-4 sm:p-6">
      <h2 className="text-xl font-semibold sm:text-2xl">
        {basicCommands.title}
      </h2>
      <div className="space-y-6">
        {basicCommands.commands.map((cmd, i) => (
          <div key={i}>
            <h3 className="mb-3 font-medium">{cmd.title}</h3>
            <Terminal>
              <TypingAnimation>{cmd.code}</TypingAnimation>
              <AnimatedSpan className="text-green-500">
                ✓ Command executed successfully
              </AnimatedSpan>
            </Terminal>
          </div>
        ))}
      </div>
    </section>
  );
};
