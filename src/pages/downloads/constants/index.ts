export interface ChangelogItem {
  title: string;
  releaseDate: string;
  changes: string[];
}

export const downloadsPageContent = {
  hero: {
    title: "Скачать FRAES",
    subtitle: "Выберите версию для вашей операционной системы",
  },

  authNotice: {
    title: "Внимание",
    content:
      "Для скачивания файлов необходима авторизация. Это требуется для отслеживания использования и связи с пользователями.",
  },

  sourceCode: {
    title: "Исходный код",
    description:
      "Вы также можете собрать FRAES из исходников. Код доступен на GitHub под лицензией MIT.",
    buttonText: "Открыть на GitHub →",
    url: "https://github.com/Nickitas/Fractal-Approximation-Erosion-Simulation",
  },

  changelog: {
    title: "Версия 1.5.0",
    releaseDate: "15 января 2025",
    changes: [
      "Волновая эрозия с батиметрией",
      "Автоматическая загрузка данных GEBCO для Чёрного моря",
      "Улучшенный box-counting анализ с усреднением по сеткам",
      "Экспорт метрик в JSON формате",
    ],
  } as ChangelogItem,
} as const;
