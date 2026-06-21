import { downloadsPageContent } from "../constants";

export const Changelog = () => {
  const { changelog } = downloadsPageContent;

  return (
    <section className="rounded-lg border p-4 sm:p-6">
      <h2 className="mb-4 text-lg font-semibold sm:text-xl">
        {changelog.title}
      </h2>
      <ul className="space-y-1 text-xs text-muted-foreground sm:text-sm">
        {changelog.changes.map((change, i) => (
          <li key={i}>• {change}</li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-muted-foreground sm:text-sm">
        Дата выпуска: {changelog.releaseDate}
      </p>
    </section>
  );
};
