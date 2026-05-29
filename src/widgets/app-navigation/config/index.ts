import { ROUTES } from "@/shared/config/routes";

export const NAV_ITEMS = [
  { path: ROUTES.home, label: "Главная" },
  { path: ROUTES.about, label: "О проекте" },
  { path: ROUTES.installation, label: "Установка" },
  { path: ROUTES.downloads, label: "Скачать" },
] as const;
