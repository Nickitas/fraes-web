import { installationPageContent } from "../constants";

export const SystemRequirements = () => {
  const { systemRequirements } = installationPageContent;

  return (
    <section className="space-y-4 rounded-lg border p-4 sm:p-6">
      <h2 className="text-xl font-semibold sm:text-2xl">
        {systemRequirements.title}
      </h2>
      <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
        {systemRequirements.requirements.map((req, i) => (
          <li key={i}>
            • <strong>{req.label}:</strong> {req.detail}
          </li>
        ))}
      </ul>
    </section>
  );
};
