import { docsPageContent } from "../constants";

export const CapabilitiesList = () => {
  const { capabilities } = docsPageContent;

  return (
    <section className="space-y-6">
      <div className="rounded-lg border p-4 sm:p-6">
        <h2 className="text-xl font-semibold sm:text-2xl">
          Описание возможностей
        </h2>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">
          Детальное описание функциональных возможностей системы
        </p>
      </div>

      <div className="space-y-4">
        {capabilities.map((capability) => (
          <div
            key={capability.id}
            className="space-y-4 rounded-lg border p-4 sm:p-6"
          >
            <div>
              <h3 className="text-lg font-semibold sm:text-xl">
                {capability.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                {capability.description}
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-semibold">Cases of use:</h4>
              <ul className="grid gap-2 text-sm text-muted-foreground sm:text-base md:grid-cols-2">
                {capability.useCases.map((useCase, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 text-muted-foreground">•</span>
                    <span>{useCase}</span>
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
