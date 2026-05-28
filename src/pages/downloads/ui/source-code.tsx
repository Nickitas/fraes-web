import { downloadsPageContent } from "../constants";

export const SourceCode = () => {
  const { sourceCode } = downloadsPageContent;

  return (
    <section className="rounded-lg border p-4 sm:p-6">
      <h2 className="mb-4 text-lg font-semibold sm:text-xl">
        {sourceCode.title}
      </h2>
      <p className="text-sm text-muted-foreground sm:text-base">
        {sourceCode.description}
      </p>
      <a
        href={sourceCode.url}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block rounded-md border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
      >
        {sourceCode.buttonText}
      </a>
    </section>
  );
};
