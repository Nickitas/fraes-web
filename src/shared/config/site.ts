const VERSION = import.meta.env.VITE_CLI_VERSION_NUMBER || "v2.0";

export const SITE_CONFIG = {
  name: "Litora",
  fullName: "litora-CLI",
  description:
    "CLI-утилита для геоморфологического моделирования береговых систем",
  repository: "https://github.com/Nickitas/litora-cli",
  version: VERSION,
  releaseDate: "2026-08-30",
} as const;

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/Nickitas/litora-cli",
    icon: "📦",
  },
] as const;
