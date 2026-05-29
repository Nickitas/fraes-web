import { SITE_CONFIG } from "@/shared/config/site";

export interface DownloadFile {
  id: string;
  name: string;
  os: "windows" | "macos" | "linux";
  version: string;
  size: string;
  url: string;
  requirements: string;
  goVersion: string;
  releaseDate: string;
  changelog: string[];
  disabled?: boolean;
  disabledReason?: string;
}

export const mockDownloadsApi: DownloadFile[] = [
  {
    id: "1",
    name: "fraes.exe",
    os: "windows",
    version: SITE_CONFIG.version,
    size: "8.9 MB",
    url: "/downloads/windows/fraes.exe",
    requirements: "Windows 10/11 (x64)",
    goVersion: "Go 1.23",
    releaseDate: "2025-05-28",
    changelog: [
      "Первая публичная версия",
      "Валидация геометрии береговой линии",
      "Фрактальный анализ с box-counting",
      "Волновая эрозия с батиметрией",
    ],
  },
  {
    id: "2",
    name: "fraes",
    os: "macos",
    version: SITE_CONFIG.version,
    size: "8.4 MB",
    url: "/downloads/macos/fraes",
    requirements: "macOS 11+ (Intel & Apple Silicon)",
    goVersion: "Go 1.23",
    releaseDate: "2025-05-28",
    changelog: [
      "Первая публичная версия",
      "Валидация геометрии береговой линии",
      "Фрактальный анализ с box-counting",
      "Волновая эрозия с батиметрией",
    ],
  },
  {
    id: "3",
    name: "fraes-linux-amd64.AppImage",
    os: "linux",
    version: SITE_CONFIG.version,
    size: "—",
    url: "",
    requirements: "Ubuntu 20.04+, Debian 11+, or compatible",
    goVersion: "Go 1.23",
    releaseDate: "—",
    changelog: [],
    disabled: true,
    disabledReason: "Скоро появится",
  },
];
