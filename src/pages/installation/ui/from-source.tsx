import { installationPageContent } from "../constants";

export const FromSource = () => {
  const { fromSource } = installationPageContent;

  return (
    <section className="space-y-4 rounded-lg border p-4 sm:p-6">
      <h2 className="text-xl font-semibold sm:text-2xl">{fromSource.title}</h2>
      <div className="space-y-4">
        {fromSource.steps.map((step, i) => (
          <div key={i}>
            <h3 className="mb-2 font-medium">{step.title}</h3>
            <pre className="overflow-x-auto rounded bg-muted p-3 text-xs sm:p-4 sm:text-sm">
              <code>{step.code}</code>
            </pre>
            {step.note && (
              <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                {step.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
