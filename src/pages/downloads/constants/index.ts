export interface ChangelogItem {
  title: string;
  releaseDate: string;
  changes: string[];
}

export const downloadsPageContent = {
  hero: {
    title: "Скачать Litora-CLI",
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
      "Вы также можете собрать Litora из исходников. Код доступен на GitHub под лицензией MIT.",
    buttonText: "Открыть на GitHub →",
    url: "https://github.com/Nickitas/litora-cli",
  },

  changelog: {
    title: "Версия v1.2",
    releaseDate: "20 июня 2025",
    changes: [
      "Комплексная физическая модель эрозии: волновая эрозия, транспорт наносов, литология",
      "Временная динамика: штормовые события, сезонность, климатические сценарии (RCP4.5, RCP8.5)",
      "CSV экспорт метрик для количественного анализа (long и wide форматы)",
      "Улучшенная батиметрическая интеграция с автоматической загрузкой GEBCO данных",
      "Методы аппроксимации: IDW интерполяция литологии, Regular Grid батиметрии, билинейная интерполяция",
      "Улучшенный box-counting анализ с усреднением по сеткам",
      "Экспорт метрик в JSON и SVG форматах",
    ],
  } as ChangelogItem,
} as const;
