import { Link } from "react-router";
import { installationPageContent } from "../constants";
import { ROUTES } from "@/shared/config/routes";

export const HelpSection = () => {
  const { helpSection } = installationPageContent;

  return (
    <section className="rounded-lg bg-muted/50 p-4 sm:p-6">
      <h2 className="mb-2 text-lg font-semibold sm:text-xl">
        {helpSection.title}
      </h2>
      <p className="text-sm text-muted-foreground sm:text-base">
        {helpSection.description}
      </p>
      <Link
        to={ROUTES.downloads}
        className="mt-4 inline-block rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        {helpSection.ctaButton}
      </Link>
    </section>
  );
};
