const VERSION = import.meta.env.VITE_CLI_VERSION_NUMBER || "v1.0.0";

export const SITE_CONFIG = {
  name: "FRAES",
  fullName: "Fractal Approximation of Coastal Geometry",
  description:
    "CLI-инструмент для проверки геометрии береговой линии, корректного измерения длины и математической демонстрации её фрактальных свойств",
  repository:
    "https://github.com/Nickitas/Fractal-Approximation-Erosion-Simulation",
  version: VERSION,
  releaseDate: "2026-04-15",
} as const;

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Nickitas/Fractal-Approximation-Erosion-Simulation",
    icon: "📦",
  },
] as const;
