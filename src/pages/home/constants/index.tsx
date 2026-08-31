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
      { label: "Python 3.8+" },
      { label: "numerical simulation" },
    ] as TechBadge[],
    ctaButtons: [
      { label: "Скачать", route: "/downloads" as const },
      { label: "Подробнее", route: "/about" as const },
    ],
  },

  features: [
    {
      icon: CompassIcon,
      title: "Геометрия без сюрпризов",
      description:
        "Проверяет топологию, замкнутость и самопересечения до того, как они попадут в расчёт.",
    },
    {
      icon: RulerIcon,
      title: "Из карты — в метрики",
      description:
        "Считает длину, площадь и расстояния по географическим координатам с учётом кривизны Земли.",
    },
    {
      icon: RotateCwIcon,
      title: "Форма побережья",
      description:
        "Устойчивый box-counting анализ показывает, насколько сложна береговая линия на разных масштабах.",
    },
    {
      icon: WavesIcon,
      title: "Рельеф и динамика",
      description:
        "Батиметрия, литология, волны, перенос наносов и временные сценарии — в одном воспроизводимом контуре.",
    },
  ] as FeatureCard[],

  scientificContext: {
    title: "От береговой линии до цифрового рельефа",
    content: (strong: string) => (
      <>
        Litora превращает разрозненные геоданные в проверяемую модель прибрежной системы. Проект разрабатывается в рамках диссертационного исследования{" "}
        <strong className="text-foreground">{strong}</strong> (на примере
        Чёрного моря)
      </>
    ),
    dissertationTitle: "«Построение геометрических образов прибрежных систем»",
  },

  cliCommands: [
    {
      command: "lito seabed build",
      description: "Собрать геопривязанную модель дна Чёрного моря",
    },
    {
      command: "lito seabed generate-adaptive",
      description: "Построить адаптивную сетку Gmsh",
    },
    {
      command: "lito seabed validate",
      description: "Проверить модель и её входные данные",
    },
    {
      command: "lito seabed render",
      description: "Получить карты, профили и SVG-отчёты",
    },
  ] as CliCommand[],
} as const;
