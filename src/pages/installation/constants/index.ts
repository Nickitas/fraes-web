export interface CliCommand {
  command: string;
  description: string;
}

export const installationPageContent = {
  hero: {
    title: "Установка и запуск",
    subtitle: "Litora-CLI работает на всех основных платформах",
  },

  fromSource: {
    title: "Из исходников",
    steps: [
      {
        title: "1. Клонирование репозитория",
        code: "git clone https://github.com/Nickitas/litora-cli.git\ncd litora-cli",
        note: "",
      },
      {
        title: "2. Сборка",
        code: "go build -o lito ./cmd/lito",
        note: "Или через Makefile: make build",
      },
      {
        title: "3. Запуск",
        code: "./lito --help",
        note: "",
      },
    ],
  },

  basicCommands: {
    title: "Базовые команды",
    commands: [
      {
        title: "Валидация и метрики загруженной береговой линии",
        code: "./lito real coastline",
      },
      {
        title: "Полный сценарий (все этапы)",
        code: "./lito all",
      },
      {
        title: "Геоморфологическое моделирование эрозии",
        code: "lito model erosion",
      },
    ],
  },

  cliCommands: [
    {
      command: "./lito real coastline",
      description: "Метрики загруженной береговой линии",
    },
    {
      command: "./lito real coastline --refresh",
      description: "Принудительное обновление данных",
    },
    {
      command:
        "./lito real coastline --source-url '' --input data/black-sea.json",
      description: "Использование локального файла",
    },
    {
      command: "./lito model dimension --iterations 6 --seed 42",
      description: "Базовый анализ фрактальной размерности",
    },
    {
      command:
        "./lito model erosion --steps 10 --erosion-strength 50 --wave-direction 0",
      description: "Простая эрозия с геометрическим proxy",
    },
    {
      command:
        "./lito model erosion \
        --steps 15 \
        --erosion-strength 50 \
        --bathymetry data/black-sea-bathymetry.json \
        --wave-direction 45 \
        --wind-speed 14",
      description: "Моделирование с батиметрией",
    },
    {
      command:
        "./lito model erosion \
        --steps 10 \
        --lithology data/black-sea-lithology.json \
        --enable-lithology \
        --output ./output/erosion-lithology",
      description: "Моделирование с учётом сопротивления пород",
    },
    {
      command:
        "./lito model erosion \
          --steps 15 \
          --erosion-strength 50 \
          --wave-direction 45 \
          --wind-speed 14 \
          --bathymetry data/black-sea-bathymetry.json \
          --lithology data/black-sea-lithology.json \
          --enable-lithology \
          --output ./output/erosion-full",
      description:
        "Моделирование полной физической модели (батиметрия + литология)",
    },
    {
      command:
        "./lito model erosion \
        --target-years 10 \
        --years-per-step 1 \
        --steps 10",
      description: "Временная динамика моделирование на 10 лет (1 год за шаг)",
    },
    {
      command:
        "./lito model erosion \
        --target-years 20 \
        --years-per-step 2 \
        --storm-probability 0.3 \
        --storm-intensity 2.5",
      description:
        "Временная динамика штормового климата (30% вероятность штормов, интенсивность 2.5x)",
    },
    {
      command:
        "./lito model erosion \
        --target-years 15 \
        --years-per-step 3 \
        --enable-seasonality \
        --seasonal-phase 3.14",
      description:
        "Временная динамика с сезонными колебаниями (пик эрозии зимой)",
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
    ctaButton: "Скачать Litora CLI",
  },
} as const;
