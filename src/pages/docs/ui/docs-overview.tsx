import { Link } from "react-router";
import { docsPageContent } from "../constants";
import { MagicCard } from "@/shared/shadcn/ui/magic-card";
import { DocsSearch } from "./docs-search";
import { Badge } from "@/shared/shadcn/components/ui/badge";
import { ArrowUpRight, Book, Zap, Settings, BarChart } from "lucide-react";
import { referenceDocuments } from "../reference";

export const DocsOverview = () => {
  const { modules, capabilities } = docsPageContent;

  const stableModules = modules.filter((m) => m.status === "stable");
  const experimentalModules = modules.filter(
    (m) => m.status === "experimental"
  );

  return (
    <section className="space-y-12">
      <DocsSearch />

      <div className="relative space-y-6 overflow-hidden rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/[0.08] via-background to-cyan-500/[0.06] p-5 sm:p-8">
        <div className="pointer-events-none absolute -top-24 -right-20 size-56 rounded-full bg-primary/10 blur-3xl" />
        <div className="relative flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm font-medium text-primary"><Book className="size-4" /> База знаний проекта</div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Научный справочник Litora</h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">Практические и научные материалы о моделировании береговых систем: от установки CLI до проверки рельефа и подготовки публикаций.</p>
          </div>
          <Badge variant="outline" className="w-fit border-primary/30 bg-background/60">{referenceDocuments.length} материалов</Badge>
        </div>
        <div className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {referenceDocuments.map((document) => (
            <Link key={document.slug} to={`/docs/reference/${document.slug}`} className="group flex min-h-40 flex-col rounded-xl border border-border/60 bg-background/75 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-lg">
              <div className="mb-4 flex items-start justify-between gap-3"><Badge variant="secondary" className="bg-primary/10 text-primary">{document.category}</Badge><ArrowUpRight className="size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" /></div>
              <h3 className="text-base font-semibold transition-colors group-hover:text-primary">{document.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{document.description}</p>
              <span className="mt-4 text-xs font-medium text-primary/80">Открыть материал →</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Modules Section */}
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-3xl font-bold text-transparent">
            Модули
          </h2>
          <p className="text-lg text-muted-foreground">
            Фундаментальные компоненты системы для анализа береговых линий
          </p>
        </div>

        {/* Stable Modules */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
            <h3 className="text-lg font-semibold text-foreground/90">
              Стабильные модули
            </h3>
            <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stableModules.map((module) => (
              <Link
                key={module.id}
                to={`/docs/modules/${module.id}`}
                className="group"
              >
                <MagicCard className="border-gradient h-full cursor-pointer transition-all duration-300 hover:shadow-lg">
                  <div className="space-y-4 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="space-y-1">
                        <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                          {module.title}
                        </h3>
                        <Badge
                          variant="secondary"
                          className="border-green-500/20 bg-green-500/10 text-green-500 hover:bg-green-500/20"
                        >
                          Stable
                        </Badge>
                      </div>
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {module.description}
                    </p>

                    <div className="border-t border-border/50 pt-2">
                      <div className="flex flex-wrap gap-2">
                        {module.features.slice(0, 2).map((feature, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="border-border/50 bg-muted/50 text-xs"
                          >
                            {feature.length > 25
                              ? `${feature.slice(0, 25)}...`
                              : feature}
                          </Badge>
                        ))}
                        {module.features.length > 2 && (
                          <Badge
                            variant="outline"
                            className="border-border/50 bg-muted/50 text-xs text-muted-foreground"
                          >
                            +{module.features.length - 2} ещё
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                      <span>Подробнее →</span>
                    </div>
                  </div>
                </MagicCard>
              </Link>
            ))}
          </div>
        </div>

        {/* Experimental Modules */}
        {experimentalModules.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent" />
              <h3 className="text-lg font-semibold text-foreground/90">
                Экспериментальные модули
              </h3>
              <div className="h-px flex-1 bg-gradient-to-l from-border to-transparent" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {experimentalModules.map((module) => (
                <Link
                  key={module.id}
                  to={`/docs/modules/${module.id}`}
                  className="group"
                >
                  <MagicCard className="border-gradient h-full cursor-pointer transition-all duration-300 hover:shadow-lg">
                    <div className="space-y-4 p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1">
                          <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                            {module.title}
                          </h3>
                          <Badge
                            variant="secondary"
                            className="border-yellow-500/20 bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                          >
                            Experimental
                          </Badge>
                        </div>
                      </div>

                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {module.description}
                      </p>

                      <div className="border-t border-border/50 pt-2">
                        <div className="flex flex-wrap gap-2">
                          {module.features.slice(0, 2).map((feature, i) => (
                            <Badge
                              key={i}
                              variant="outline"
                              className="border-border/50 bg-muted/50 text-xs"
                            >
                              {feature.length > 25
                                ? `${feature.slice(0, 25)}...`
                                : feature}
                            </Badge>
                          ))}
                          {module.features.length > 2 && (
                            <Badge
                              variant="outline"
                              className="border-border/50 bg-muted/50 text-xs text-muted-foreground"
                            >
                              +{module.features.length - 2} ещё
                            </Badge>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                        <span>Подробнее →</span>
                      </div>
                    </div>
                  </MagicCard>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Capabilities Section */}
      <div className="space-y-8">
        <div className="space-y-2">
          <h2 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-3xl font-bold text-transparent">
            Возможности
          </h2>
          <p className="text-lg text-muted-foreground">
            Функциональные возможности и методы анализа
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <Link
              key={capability.id}
              to={`/docs/capabilities/${capability.id}`}
              className="group"
            >
              <MagicCard className="border-gradient h-full cursor-pointer transition-all duration-300 hover:shadow-lg">
                <div className="space-y-4 p-6">
                  <h3 className="text-xl font-semibold transition-colors group-hover:text-primary">
                    {capability.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {capability.description}
                  </p>

                  <div className="border-t border-border/50 pt-2">
                    <div className="flex flex-wrap gap-2">
                      {capability.useCases.slice(0, 2).map((useCase, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-border/50 bg-muted/50 text-xs"
                        >
                          {useCase.length > 20
                            ? `${useCase.slice(0, 20)}...`
                            : useCase}
                        </Badge>
                      ))}
                      {capability.useCases.length > 2 && (
                        <Badge
                          variant="outline"
                          className="border-border/50 bg-muted/50 text-xs text-muted-foreground"
                        >
                          +{capability.useCases.length - 2} ещё
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100">
                    <span>Подробнее →</span>
                  </div>
                </div>
              </MagicCard>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <div className="rounded-xl border-2 border-dashed border-border/50 bg-gradient-to-br from-muted/30 to-muted/10 p-8">
        <div className="space-y-8 text-center">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Быстрые ссылки</h3>
            <p className="text-sm text-muted-foreground">
              Дополнительная информация о проекте
            </p>
          </div>

          <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link
              to="/about"
              className="group flex flex-col items-center gap-3 rounded-xl border border-transparent p-6 transition-all hover:border-border/50 hover:bg-muted/50"
            >
              <Book className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-foreground" />
              <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                О проекте
              </span>
            </Link>

            <Link
              to="/installation"
              className="group flex flex-col items-center gap-3 rounded-xl border border-transparent p-6 transition-all hover:border-border/50 hover:bg-muted/50"
            >
              <Settings className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-foreground" />
              <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                Установка
              </span>
            </Link>

            <a
              href="https://github.com/Nickitas/litora-cli"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-xl border border-transparent p-6 transition-all hover:border-border/50 hover:bg-muted/50"
            >
              <Zap className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-foreground" />
              <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                GitHub
              </span>
            </a>

            <a
              href="https://github.com/Nickitas/litora-cli/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-xl border border-transparent p-6 transition-all hover:border-border/50 hover:bg-muted/50"
            >
              <BarChart className="h-6 w-6 text-muted-foreground transition-colors group-hover:text-foreground" />
              <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                Issues
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
