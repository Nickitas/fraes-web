import { installationPageContent } from "../constants";

export const CommandsSection = () => {
  const { cliCommands } = installationPageContent;
  return (
    <section className="space-y-4 rounded-lg border p-4 sm:p-6">
      <h2 className="text-xl font-semibold sm:text-2xl">CLI команды</h2>
      <div className="grid gap-3 text-xs sm:gap-4 sm:text-sm md:grid-cols-2">
        {cliCommands.map((cmd) => (
          <div key={cmd.command} className="rounded-md bg-muted p-3 sm:p-4">
            <code className="font-semibold">{cmd.command}</code>
            <p className="mt-2 text-muted-foreground">{cmd.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
