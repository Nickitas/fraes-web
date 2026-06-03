import { downloadsPageContent } from "../constants";
import { RippleButton } from "@/shared/shadcn/ui/ripple-button";

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
      <div className="mt-4">
        <a
          href={sourceCode.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <RippleButton>{sourceCode.buttonText}</RippleButton>
        </a>
      </div>
    </section>
  );
};
