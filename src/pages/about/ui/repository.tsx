import { aboutPageContent } from "../constants";

export const Repository = () => {
  const { repository } = aboutPageContent;

  return (
    <section className="rounded-lg bg-muted/50 p-4 sm:p-6">
      <h2 className="mb-2 text-lg font-semibold sm:text-xl">
        {repository.title}
      </h2>
      <a
        href={repository.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary hover:underline"
      >
        {repository.displayUrl}
      </a>
      <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
        {repository.description}
      </p>
    </section>
  );
};
