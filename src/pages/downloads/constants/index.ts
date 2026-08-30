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
    title: "Версия v2.0",
    releaseDate: "30 августа 2026",
    changes: [
      "Реальные 2D-сетки Gmsh и сравнение генераторов по сохранению береговых особенностей",
      "Батиметрическая модель Чёрного моря с экспортом в MSH, VTU, CSV и SVG",
      "3D-рельеф, профили и контроль качества интерполяции",
      "Воспроизводимые метрики и паспорта входных данных",
      "Обновлённый русскоязычный CLI и научная документация",
      "Фокус на воспроизводимых исследованиях побережья Чёрного моря",
    ],
  } as ChangelogItem,
} as const;
