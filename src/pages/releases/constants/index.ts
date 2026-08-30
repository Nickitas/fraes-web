export interface AppRelease {
  version: string;
  releaseDate?: string;
  description?: string;
  /** Ссылка на GitHub Release. null — релиз ещё не опубликован */
  releaseUrl: string | null;
  isLatest?: boolean;
}

export const releasesPageContent = {
  hero: {
    title: "Версии Litora CLI",
    subtitle: "История релизов и загрузка с GitHub",
    description:
      "Каждая версия CLI публикуется на GitHub Releases — выберите нужную сборку и скачайте бинарник для своей платформы.",
  },

  repoSection: {
    badge: "GitHub Releases",
    title: "Официальный репозиторий",
    description:
      "Исходный код, changelog и все сборки доступны в репозитории litora-cli.",
    buttonText: "Открыть репозиторий",
  },

  githubRepo: {
    name: "litora-cli",
    owner: "Nickitas",
    baseUrl: "https://github.com/Nickitas/litora-cli",
  },

  unavailableLabel: "Скоро на GitHub",
  availableLabel: "Доступно для скачивания",

  releases: [
    {
      version: "v2.0",
      releaseDate: "30 августа 2026",
      description:
        "Цельный научный контур для Чёрного моря: береговая линия, батиметрия, адаптивные четырёхугольные сетки Gmsh, 3D-рельеф, профили и воспроизводимые метрики",
      releaseUrl: "https://github.com/Nickitas/litora-cli/releases/tag/v2.0",
      isLatest: true,
    },
    {
      version: "v1.2",
      releaseDate: "20 июня 2025",
      description:
        "Комплексная физическая модель эрозии: волновая эрозия, транспорт наносов, литология, временная динамика, климатические сценарии, CSV экспорт",
      releaseUrl: "https://github.com/Nickitas/litora-cli/releases/tag/v1.2",
    },
    {
      version: "v1.0.0",
      releaseDate: "15 января 2025",
      description: "Фрактальная геометрия и парадокс береговой линии",
      releaseUrl: "https://github.com/Nickitas/litora-cli/releases/tag/v1.0.0",
    },
  ] satisfies AppRelease[],
} as const;
