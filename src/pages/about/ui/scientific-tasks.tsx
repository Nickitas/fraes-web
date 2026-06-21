import { aboutPageContent } from "../constants";

export const ScientificTasks = () => {
  const { scientificTasks } = aboutPageContent;

  return (
    <section className="space-y-4 rounded-lg border p-4 sm:p-6">
      <h2 className="text-xl font-semibold sm:text-2xl">
        {scientificTasks.title}
      </h2>
      <ol className="ml-6 list-decimal space-y-2 text-sm text-muted-foreground sm:text-base">
        {scientificTasks.tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ol>
    </section>
  );
};
