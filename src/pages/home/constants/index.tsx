import type { ComponentType } from "react";
import {
  CompassIcon,
  RotateCwIcon,
  WavesIcon,
} from "lucide-animated";
import { Ruler as RulerIcon } from "lucide-react";

export interface TechBadge {
  label: string;
}

export interface FeatureCard {
  icon: ComponentType<{ className?: string; size?: number }>;
  title: string;
  description: string;
}

export interface CliCommand {
  command: string;
  description: string;
}

export const homePageContent = {
  hero: {
    title: "FRAES",
    subtitle: "Fractal Approximation of Coastal Geometry",
    description:
      "CLI-инструмент для проверки геометрии береговой линии, корректного измерения длины и математической демонстрации её фрактальных свойств",
    badges: [
      { label: "Go 1.23+" },
      { label: "Open Source" },
      { label: "MIT License" },
    ] as TechBadge[],
    ctaButtons: [
      { label: "Скачать", route: "/downloads" as const },
      { label: "Подробнее", route: "/about" as const },
    ],
  },

  features: [
    {
      icon: CompassIcon,
      title: "Валидация геометрии",
      description:
        "Проверка геометрии береговой линии из JSON/GeoJSON файлов с детальной диагностикой",
    },
    {
      icon: RulerIcon,
      title: "Геодезический расчёт",
      description:
        "Корректное измерение длины береговой линии по географическим координатам",
    },
    {
      icon: RotateCwIcon,
      title: "Фрактальный анализ",
      description:
        "Классическая и органическая фрактальная аппроксимация с расчётом размерности",
    },
    {
      icon: WavesIcon,
      title: "Волновая эрозия",
      description:
        "Физически обоснованная модель с учётом батиметрии и направленности волн",
    },
  ] as FeatureCard[],

  scientificContext: {
    title: "Научный контекст",
    content: (strong: string) => (
      <>
        Проект разрабатывается в рамках диссертационного исследования{" "}
        <strong className="text-foreground">{strong}</strong> (на примере
        Чёрного моря)
      </>
    ),
    dissertationTitle: "«Построение геометрических образов прибрежных систем»",
  },

  cliCommands: [
    {
      command: "fraes real coastline",
      description: "Метрики реальной береговой линии",
    },
    {
      command: "fraes model paradox",
      description: "Демонстрация парадокса береговой линии",
    },
    { command: "fraes model koch", description: "Классическая кривая Коха" },
    {
      command: "fraes model erosion",
      description: "Волновая эрозия с батиметрией",
    },
  ] as CliCommand[],
} as const;
