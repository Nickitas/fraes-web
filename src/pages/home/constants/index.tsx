import type { ComponentType } from "react";
import {
  Compass as CompassIcon,
  RotateCw as RotateCwIcon,
  Waves as WavesIcon,
  Ruler as RulerIcon,
} from "lucide-react";

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
    title: "Litora",
    subtitle: "Моделирование эрозии прибрежных систем",
    description:
      "CLI-утилита для геоморфологического моделирования береговых систем, анализа фрактальных свойств береговой линии и физически обоснованного моделирования эрозионных процессов",
    badges: [
      { label: "Go 1.23+" },
      { label: "Python" },
      { label: "coastline" },
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
        "Проверка топологической корректности, замкнутости контуров, пересечений сегментов береговой линии",
    },
    {
      icon: RulerIcon,
      title: "Геодезический расчёт",
      description:
        "Корректное измерение длины береговой линии с учётом кривизны Земли через формулу Haversine",
    },
    {
      icon: RotateCwIcon,
      title: "Фрактальный анализ",
      description:
        "Box-counting размерность с усреднением по нескольким смещениям сетки и статистической устойчивостью",
    },
    {
      icon: WavesIcon,
      title: "Волновая эрозия",
      description:
        "Комплексная физическая модель с батиметрией, литологией, транспортом наносов и временной динамикой",
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
      command: "lito real coastline ",
      description: "Метрики реальной береговой линии",
    },
    {
      command: "lito model dimension",
      description: "Фрактальный анализ береговой линии методом box-counting",
    },
    {
      command: "lito model erosion",
      description: "Геоморфологическое моделирование эрозии береговой линии",
    },
    {
      command: "lito source",
      description: "Информация об источнике данных",
    },
  ] as CliCommand[],
} as const;
