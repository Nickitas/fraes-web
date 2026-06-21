import { docsPageContent } from "../constants";

const statusLabels = {
  stable: "Стабильный",
  experimental: "Экспериментальный",
  planned: "Запланирован",
};

const statusStyles = {
  stable: "bg-green-500/10 text-green-500 border-green-500/20",
  experimental: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  planned: "bg-gray-500/10 text-gray-500 border-gray-500/20",
};

export const ModulesList = () => {
  const { modules } = docsPageContent;

  return (
    <section className="space-y-6">
      <div className="rounded-lg border p-4 sm:p-6">
        <h2 className="text-xl font-semibold sm:text-2xl">Модули</h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Основные модули системы Litora CLI
        </p>
      </div>

      <div className="space-y-4">
        {modules.map((module) => (
          <div
            key={module.id}
            className="space-y-4 rounded-lg border p-4 sm:p-6"
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold sm:text-xl">
                  {module.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                  {module.description}
                </p>
              </div>
              <span
                className={`w-fit rounded-full border px-2 py-1 text-xs ${statusStyles[module.status]}`}
              >
                {statusLabels[module.status]}
              </span>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Возможности:</h4>
              <ul className="grid gap-2 text-sm text-muted-foreground sm:text-base md:grid-cols-2">
                {module.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 text-muted-foreground">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
