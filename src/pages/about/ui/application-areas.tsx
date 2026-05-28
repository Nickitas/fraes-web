import { aboutPageContent } from "../constants";

export const ApplicationAreas = () => {
  const { applicationAreas } = aboutPageContent;

  return (
    <section className="space-y-4 rounded-lg border p-4 sm:p-6">
      <h2 className="text-xl font-semibold sm:text-2xl">Области применения</h2>
      <div className="grid gap-4 text-sm text-muted-foreground sm:text-base md:grid-cols-2">
        {applicationAreas.map((area) => (
          <div key={area.category}>
            <h3 className="mb-2 font-medium text-foreground">
              {area.category}
            </h3>
            <ul className="ml-6 list-disc space-y-1">
              {area.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
