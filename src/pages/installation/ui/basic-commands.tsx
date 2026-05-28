import { installationPageContent } from "../constants";

export const BasicCommands = () => {
  const { basicCommands } = installationPageContent;

  return (
    <section className="space-y-4 rounded-lg border p-4 sm:p-6">
      <h2 className="text-xl font-semibold sm:text-2xl">
        {basicCommands.title}
      </h2>
      <div className="space-y-4">
        {basicCommands.commands.map((cmd, i) => (
          <div key={i}>
            <h3 className="mb-2 font-medium">{cmd.title}</h3>
            <pre className="overflow-x-auto rounded bg-muted p-3 text-xs sm:p-4 sm:text-sm">
              <code>{cmd.code}</code>
            </pre>
          </div>
        ))}
      </div>
    </section>
  );
};
