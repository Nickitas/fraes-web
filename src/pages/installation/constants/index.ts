export interface CliCommand {
  command: string;
  description: string;
}

export const installationPageContent = {
  hero: {
    title: "Установка и запуск",
    subtitle: "FRAES работает на всех основных платформах",
  },

  fromSource: {
    title: "Из исходников",
    steps: [
      {
        title: "1. Клонирование репозитория",
        code: "git clone https://github.com/Nickitas/Fractal-Approximation-Erosion-Simulation.git\ncd Fractal-Approximation-Erosion-Simulation",
        note: "",
      },
      {
        title: "2. Сборка",
        code: "go build -o fraes ./cmd/fraes",
        note: "Или через Makefile: make build",
      },
      {
        title: "3. Запуск",
        code: "./fraes --help",
        note: "",
      },
    ],
  },

  basicCommands: {
    title: "Базовые команды",
    commands: [
      {
        title: "Метрики исходной береговой линии",
        code: "./fraes real coastline",
      },
      {
        title: "Полный сценарий (все этапы)",
        code: "./fraes all --iterations 3 --steps 5 --output ./output/full-run",
      },
      {
        title: "Волновая эрозия с батиметрией",
        code: "make bathymetry && ./fraes model erosion --steps 10 --bathymetry data/black-sea-bathymetry.json",
      },
    ],
  },

  cliCommands: [
    {
      command: "fraes real coastline",
      description: "Проверка геометрии и метрики реальной береговой линии",
    },
    {
      command: "fraes model paradox",
      description: "Демонстрация парадокса береговой линии",
    },
    {
      command: "fraes model koch",
      description: "Классическая фрактальная аппроксимация",
    },
    {
      command: "fraes model koch-organic",
      description: "Органическая фрактальная модель",
    },
    {
      command: "fraes model dimension",
      description: "Анализ фрактальной размерности",
    },
    {
      command: "fraes model erosion",
      description: "Волновая эрозия с батиметрией",
    },
  ] as CliCommand[],

  systemRequirements: {
    title: "Системные требования",
    requirements: [
      {
        label: "Go",
        detail: "версия 1.23 или выше (для сборки из исходников)",
      },
      {
        label: "ОС",
        detail: "Windows 10+, macOS 11+, Linux (Ubuntu 20.04+, Debian 11+)",
      },
      { label: "Память", detail: "минимум 512 MB RAM" },
      { label: "Диск", detail: "около 100 MB для бинарных файлов и данных" },
    ],
  },

  helpSection: {
    title: "Нужна помощь?",
    description:
      "Полную документацию и примеры использования смотрите в README на GitHub или в issue tracker для вопросов и обсуждений.",
    ctaButton: "Скачать FRAES",
  },
} as const;
