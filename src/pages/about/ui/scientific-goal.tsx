import { aboutPageContent } from "../constants";

export const ScientificGoal = () => {
  const { scientificGoal } = aboutPageContent;

  return (
    <section className="space-y-4 rounded-lg border p-4 sm:p-6">
      <h2 className="text-xl font-semibold sm:text-2xl">
        {scientificGoal.title}
      </h2>
      <p className="text-sm text-muted-foreground sm:text-base">
        {scientificGoal.description}
      </p>
      <div className="mt-4 space-y-2 text-sm text-muted-foreground sm:text-base">
        <p>{scientificGoal.title}</p>
        <ol className="ml-6 list-decimal space-y-1">
          {scientificGoal.practicalGoals.map((goal, i) => (
            <li key={i}>{goal}</li>
          ))}
        </ol>
      </div>
    </section>
  );
};
