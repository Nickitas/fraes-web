import { homePageContent } from "../constants";

export const CommandsSection = () => {
  const { cliCommands } = homePageContent;

  return (
    <section className="rounded-lg border bg-muted/30 p-4 sm:p-6 lg:p-8">
      <h2 className="mb-4 text-xl font-semibold sm:text-2xl">CLI команды</h2>
      <div className="grid gap-3 text-sm sm:gap-4 sm:text-base md:grid-cols-2">
        {cliCommands.map((cmd) => (
          <div key={cmd.command} className="rounded bg-background p-3">
            <code className="text-xs sm:text-sm">{cmd.command}</code>
            <p className="mt-1 text-muted-foreground">{cmd.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
