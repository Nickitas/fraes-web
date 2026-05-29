export const BASE_URL = import.meta.env.VITE_API_URL || "/api";

export const ROUTES = {
  home: "/",
  about: "/about",
  installation: "/installation",
  downloads: "/downloads",
  login: "/login",
} as const;
