import { useParams, Link } from "react-router";
import { docsPageContent } from "./constants";
import {
  ArrowLeft,
  CheckCircle,
  Circle,
  ChevronRight,
  Code,
} from "lucide-react";
import { DocsBreadcrumb } from "./ui/breadcrumb";
import { Badge } from "@/shared/shadcn/components/ui/badge";

export function ModuleDetailPage() {
  const { moduleId } = useParams<{ moduleId: string }>();
  const module = docsPageContent.modules.find((m) => m.id === moduleId);

  if (!module || !module.detailedContent) {
    return (
      <div className="space-y-4 py-12 text-center">
        <h2 className="text-2xl font-bold">Модуль не найден</h2>
        <Link
          to="/docs"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          ← Вернуться к документации
        </Link>
      </div>
    );
  }

  const { detailedContent } = module;

  const statusConfig = {
    stable: {
      label: "Стабильный",
      className:
        "bg-green-500/10 text-green-500 border-green-500/20 hover:bg-green-500/20",
    },
    experimental: {
      label: "Экспериментальный",
      className:
        "bg-yellow-500/10 text-yellow-500 border-yellow-500/20 hover:bg-yellow-500/20",
    },
    planned: {
      label: "Запланирован",
      className:
        "bg-gray-500/10 text-gray-500 border-gray-500/20 hover:bg-gray-500/20",
    },
  };

  const currentStatus = statusConfig[module.status];

  return (
    <div className="space-y-12">
      <DocsBreadcrumb />

      {/* Back Button */}
      <Link
        to="/docs"
        className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        К документации
      </Link>

      {/* Header */}
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <h1 className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-4xl font-bold text-transparent">
              {module.title}
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {module.description}
            </p>
          </div>
          <Badge
            variant="secondary"
            className={`border px-4 py-2 text-sm ${currentStatus.className}`}
          >
            {currentStatus.label}
          </Badge>
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

      {/* Technical Details */}
      <section className="space-y-4">
        <h2
          id="технические-детали"
          className="text-2xl font-semibold text-foreground"
        >
          Технические детали
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {detailedContent.technicalDetails.map((detail, i) => (
            <div
              key={i}
              className="flex items-start gap-3 rounded-lg border border-border/50 bg-gradient-to-r from-background to-muted/10 p-4 transition-colors hover:border-primary/50"
            >
              <Circle className="mt-0.5 h-5 w-5 shrink-0 fill-primary/20 text-primary" />
              <span className="leading-relaxed text-muted-foreground">
                {detail}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="space-y-4">
        <h2 id="возможности" className="text-2xl font-semibold text-foreground">
          Возможности
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {module.features.map((feature, i) => (
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

      {/* Use Cases */}
      <section className="space-y-4">
        <h2
          id="сценарии-использования"
          className="text-2xl font-semibold text-foreground"
        >
          Сценарии использования
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {detailedContent.useCases.map((useCase, i) => (
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

      {/* Examples */}
      <section className="space-y-4">
        <h2 id="примеры" className="text-2xl font-semibold text-foreground">
          Примеры
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
          Все модули
        </Link>
      </div>
    </div>
  );
}
