import { installationPageContent } from "../constants";
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/shared/shadcn/components/terminal";

export const FromSource = () => {
  const { fromSource } = installationPageContent;

  return (
    <section className="space-y-4 rounded-lg border p-4 sm:p-6">
      <h2 className="text-xl font-semibold sm:text-2xl">{fromSource.title}</h2>
      <div className="space-y-6">
        {fromSource.steps.map((step, i) => (
          <div key={i}>
            <h3 className="mb-3 font-medium">{step.title}</h3>
            <Terminal>
              <TypingAnimation>{step.code}</TypingAnimation>
              <AnimatedSpan className="text-green-500">
                ✓ Step completed successfully
              </AnimatedSpan>
              {step.note && (
                <AnimatedSpan delay={200} className="text-muted-foreground">
                  ℹ {step.note}
                </AnimatedSpan>
              )}
            </Terminal>
          </div>
        ))}
      </div>
    </section>
  );
};
