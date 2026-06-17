const VERSION = import.meta.env.VITE_CLI_VERSION_NUMBER || "v1.0.0";

export const SITE_CONFIG = {
  name: "Litora",
  fullName: "litora-CLI",
  description:
    "CLI-утилита для геоморфологического моделирования береговых систем, анализа фрактальных свойств береговой линии и физически обоснованного моделирования эрозионных процессов",
  repository: "https://github.com/Nickitas/litora-cli",
  version: VERSION,
  releaseDate: "2026-04-15",
} as const;

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Nickitas/litora-cli",
    icon: "📦",
  },
] as const;
