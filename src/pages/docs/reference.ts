export interface ReferenceDocument {
  slug: string;
  title: string;
  description: string;
  category: string;
}

export const referenceDocuments: ReferenceDocument[] = [
  { slug: "INSTALL.md", title: "Установка", description: "Установка, зависимости и подготовка окружения.", category: "Начало работы" },
  { slug: "seabed-cli.md", title: "CLI морского дна", description: "Команды для построения, проверки и анализа модели дна.", category: "Начало работы" },
  { slug: "seabed-scientific-guide.md", title: "Научное руководство", description: "Полный научный контур моделирования Чёрного моря.", category: "Научная модель" },
  { slug: "bathymetry-overview-map.md", title: "Обзор батиметрии", description: "Источники и визуализация батиметрических данных.", category: "Батиметрия" },
  { slug: "bathymetry-interpolation-quality.md", title: "Качество интерполяции", description: "Метрики и контроль качества восстановления рельефа.", category: "Батиметрия" },
  { slug: "bathymetry-3d-profiles.md", title: "3D-рельеф и профили", description: "Профили глубин и представление рельефа.", category: "Батиметрия" },
  { slug: "bathymetry-mesh-details.md", title: "Детали сетки", description: "Структура и свойства расчётной сетки.", category: "Сетки" },
  { slug: "mesh-generation.md", title: "Генерация сетки", description: "Построение сеток и подготовка расчётной области.", category: "Сетки" },
  { slug: "adaptive-gmsh.md", title: "Адаптивная сетка Gmsh", description: "Адаптивная генерация сетки с учётом береговых особенностей.", category: "Сетки" },
  { slug: "adaptive-generator-comparison.md", title: "Сравнение генераторов", description: "Сравнение алгоритмов по сохранению геометрии.", category: "Сетки" },
  { slug: "adaptive-size-field.md", title: "Адаптивное поле размеров", description: "Управление размером элементов в разных областях.", category: "Сетки" },
  { slug: "seabed-msh-export.md", title: "Экспорт MSH", description: "Экспорт принятой модели в формат Gmsh MSH.", category: "Экспорт" },
  { slug: "seabed-vtu-csv-export.md", title: "Экспорт VTU и CSV", description: "Подготовка данных для ParaView и табличного анализа.", category: "Экспорт" },
  { slug: "svg-report.md", title: "SVG-отчёты", description: "Визуальные отчёты, карты и диагностические схемы.", category: "Экспорт" },
  { slug: "data-provenance.md", title: "Происхождение данных", description: "Паспорта источников и воспроизводимость результатов.", category: "Воспроизводимость" },
  { slug: "full-black-sea-quality.md", title: "Контроль Чёрного моря", description: "Полная проверка качества научного контура.", category: "Воспроизводимость" },
  { slug: "relief-quality-validation.md", title: "Проверка рельефа", description: "Валидация рельефа и контрольных метрик.", category: "Воспроизводимость" },
  { slug: "bathymetry-source-selection.md", title: "Выбор источника батиметрии", description: "Правила выбора и фиксации источника данных.", category: "Батиметрия" },
  { slug: "coastline-source-selection.md", title: "Выбор береговой линии", description: "Сравнение и выбор источников геометрии побережья.", category: "Геометрия" },
  { slug: "bathymetry-coastline-reconciliation.md", title: "Согласование данных", description: "Согласование батиметрии и береговой линии.", category: "Геометрия" },
  { slug: "black-sea-map.md", title: "Карта Чёрного моря", description: "Картографическое представление исследуемой области.", category: "Геометрия" },
  { slug: "fractal-analysis-scope.md", title: "Фрактальный анализ", description: "Область применения box-counting анализа.", category: "Научная модель" },
  { slug: "cerc-one-line-model.md", title: "Однолинейная модель CERC", description: "Модель переноса наносов вдоль берега.", category: "Научная модель" },
  { slug: "seabed-cell-derivatives.md", title: "Производные ячеек", description: "Производные и локальные характеристики ячеек дна.", category: "Научная модель" },
  { slug: "expert-fragment-set.md", title: "Экспертный набор фрагментов", description: "Контрольные фрагменты для проверки адаптивных алгоритмов.", category: "Воспроизводимость" },
  { slug: "ml-necessity-assessment.md", title: "Оценка необходимости ML", description: "Обоснование применения машинного обучения.", category: "Научная модель" },
  { slug: "cli-experiments.md", title: "Эксперименты CLI", description: "Воспроизводимые экспериментальные сценарии.", category: "Начало работы" },
];
