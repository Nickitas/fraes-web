import { aboutPageContent } from "../constants";

export const Capabilities = () => {
  const { capabilities } = aboutPageContent;

  return (
    <section className="space-y-4 rounded-lg border p-4 sm:p-6">
      <h2 className="text-xl font-semibold sm:text-2xl">Возможности</h2>
      <ul className="grid gap-2 text-sm text-muted-foreground sm:text-base md:grid-cols-2">
        {capabilities.map((cap, i) => (
          <li key={i}>
            {cap.icon} {cap.text}
          </li>
        ))}
      </ul>
    </section>
  );
};
