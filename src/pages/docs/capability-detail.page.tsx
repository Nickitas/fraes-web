import { useParams, Link } from "react-router";
import { docsPageContent } from "./constants";
import {
  ArrowLeft,
  CheckCircle,
  Circle,
  ChevronRight,
  Code,
  Zap,
} from "lucide-react";
import { DocsBreadcrumb } from "./ui/breadcrumb";

export function CapabilityDetailPage() {
  const { capabilityId } = useParams<{ capabilityId: string }>();
  const capability = docsPageContent.capabilities.find(
    (c) => c.id === capabilityId
  );

  if (!capability || !capability.detailedContent) {
    return (
      <div className="space-y-4 py-12 text-center">
        <h2 className="text-2xl font-bold">Возможность не найдена</h2>
        <Link
          to="/docs"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Вернуться к документации
        </Link>
      </div>
    );
  }

  const { detailedContent } = capability;

  return (
    <div className="space-y-12">
      <DocsBreadcrumb />

      {/* Header */}
      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold text-transparent">
              {capability.title}
            </h1>
          </div>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {capability.description}
          </p>
        </div>
      </div>

      {/* Overview */}
      <section className="space-y-4">
        <h2 id="обзор" className="text-2xl font-semibold text-foreground">
          Обзор
        </h2>
        <div className="border-gradient relative overflow-hidden rounded-xl border-2 bg-gradient-to-br from-background to-muted/20 p-8">
          <div className="absolute top-0 right-0 h-32 w-32 rounded-bl-full bg-gradient-to-br from-primary/5 to-transparent" />
          <p className="relative text-lg leading-relaxed text-muted-foreground">
            {detailedContent.overview}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2
          id="основные-функции"
          className="text-2xl font-semibold text-foreground"
        >
          Основные функции
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {detailedContent.features.map((feature, i) => (
            <div
              key={i}
              className="group flex items-start gap-3 rounded-lg border border-border/50 bg-gradient-to-r from-background to-muted/10 p-4 transition-colors hover:border-green-500/50"
            >
              <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 fill-green-500/20 text-green-500" />
              <span className="leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                {feature}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Implementation Details */}
      <section className="space-y-4">
        <h2 id="реализация" className="text-2xl font-semibold text-foreground">
          Реализация
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {detailedContent.implementation.map((impl, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg border border-border/50 bg-gradient-to-r from-background to-muted/10 p-4 transition-colors hover:border-primary/50"
            >
              <Circle className="mt-0.5 h-5 w-5 shrink-0 fill-primary/20 text-primary" />
              <span className="leading-relaxed text-muted-foreground">
                {impl}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="space-y-4">
        <h2
          id="сценарии-использования"
          className="text-2xl font-semibold text-foreground"
        >
          Сценарии использования
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {capability.useCases.map((useCase, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg border border-border/50 bg-gradient-to-r from-background to-muted/10 p-4 transition-colors hover:border-purple-500/50"
            >
              <ChevronRight className="mt-0.5 h-5 w-5 shrink-0 fill-purple-500/20 text-purple-500" />
              <span className="leading-relaxed text-muted-foreground">
                {useCase}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Code Examples */}
      <section className="space-y-4">
        <h2
          id="примеры-использования"
          className="text-2xl font-semibold text-foreground"
        >
          Примеры использования
        </h2>
        <div className="space-y-3">
          {detailedContent.examples.map((example, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-lg border-2 border-border/50 bg-muted/30 transition-all hover:border-primary/50"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative flex items-start gap-3 p-4">
                <Code className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <code className="font-mono text-sm text-foreground">
                  {example}
                </code>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex items-center justify-between border-t border-border/50 pt-8">
        <Link
          to="/docs"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Все возможности
        </Link>
      </div>
    </div>
  );
}
