export interface ApplicationArea {
  category: string;
  items: string[];
}

export interface Capability {
  icon: string;
  text: string;
}

export interface ScientificGoal {
  title: string;
  description: string;
  practicalGoals: string[];
}

export const aboutPageContent = {
  hero: {
    title: "О проекте FRAES",
    subtitle: "Fractal Approximation of Coastal Geometry",
  },

  scientificGoal: {
    title: "Научная цель",
    description:
      "Разработка и верификация комплексной математико-алгоритмической модели геометрического образа береговой линии, сочетающей фрактальные свойства и динамику изменения под воздействием эрозионных процессов.",
    practicalGoalsTitle: "Практические цели текущей версии:",
    practicalGoals: [
      "Проверить геометрию входной береговой линии до любых расчётов",
      "Корректно измерить длину береговой линии геодезическими методами",
      "Математически корректно продемонстрировать масштабную зависимость и фрактальные свойства",
    ],
  } as ScientificGoal,

  capabilities: [
    { icon: "✓", text: "Валидация геометрии из JSON/GeoJSON" },
    { icon: "✓", text: "Геодезический расчёт длины полилинии" },
    { icon: "✓", text: "Демонстрация парадокса береговой линии" },
    {
      icon: "✓",
      text: "Классическая и органическая фрактальная аппроксимация",
    },
    { icon: "✓", text: "Стохастическая эрозия (Gaussian сдвиги)" },
    { icon: "✓", text: "Волновая эрозия с батиметрией" },
    { icon: "✓", text: "Расчёт фрактальной размерности (box-counting)" },
    { icon: "✓", text: "Генерация SVG-отчётов" },
  ] as Capability[],

  scientificTasks: {
    title: "Научные задачи",
    tasks: [
      "Сравнительный анализ различных уровней представления береговой линии",
      "Исследование фрактальных свойств природных и синтетических кривых",
      "Разработка физически обоснованной модели волновой эрозии",
      "Верификация модели на реальных данных Чёрного моря",
      "Создание открытого инструментария для анализа прибрежных систем",
    ],
  },

  applicationAreas: [
    {
      category: "Наука",
      items: [
        "Геоморфология береговых зон",
        "Фрактальная геометрия",
        "Вычислительная геометрия",
      ],
    },
    {
      category: "Практика",
      items: [
        "Экологическое прогнозирование",
        "Оценка рисков эрозии",
        "Образовательные курсы",
      ],
    },
  ] as ApplicationArea[],

  repository: {
    title: "Репозиторий",
    url: "https://github.com/Nickitas/Fractal-Approximation-Erosion-Simulation",
    displayUrl: "github.com/Nickitas/Fractal-Approximation-Erosion-Simulation",
    description:
      "Исходный код, документация и issue tracker доступны на GitHub",
  },
} as const;
