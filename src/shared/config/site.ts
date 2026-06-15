const VERSION = import.meta.env.VITE_CLI_VERSION_NUMBER || "v1.0.0";

export const SITE_CONFIG = {
  name: "FRAES",
  fullName: "Fractal Approximation of Coastal Geometry",
  description:
    "CLI-инструмент для проверки геометрии береговой линии, математического моделирования прибрежных систем",
  repository: "https://github.com/Nickitas/fraes-cli",
  version: VERSION,
  releaseDate: "2026-04-15",
} as const;

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Nickitas/fraes-cli",
    icon: "📦",
  },
] as const;
