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
    name: "lito-windows-amd64.exe",
    os: "windows",
    version: SITE_CONFIG.version,
    size: "8.9 MB",
    url: "/downloads/windows/lito-windows-amd64.exe",
    requirements: "Windows 10/11 (x64)",
    goVersion: "Go 1.23",
    releaseDate: SITE_CONFIG.releaseDate,
    changelog: [
      "Комплексная физическая модель эрозии",
      "Волновая эрозия с батиметрией и литологией",
      "Транспорт наносов и баланс массы",
      "Временная динамика и климатические сценарии",
      "CSV экспорт метрик (long и wide форматы)",
      "Улучшенный box-counting анализ",
      "IDW интерполяция литологических данных",
    ],
  },
  {
    id: "2-intel",
    name: "lito-darwin-amd64",
    os: "macos",
    version: SITE_CONFIG.version,
    size: "9.0 MB",
    url: "/downloads/macos/lito-darwin-amd64",
    requirements: "macOS 11+ (Intel processors)",
    goVersion: "Go 1.23",
    releaseDate: SITE_CONFIG.releaseDate,
    changelog: [
      "Комплексная физическая модель эрозии",
      "Волновая эрозия с батиметрией и литологией",
      "Транспорт наносов и баланс массы",
      "Временная динамика и климатические сценарии",
      "CSV экспорт метрик (long и wide форматы)",
      "Улучшенный box-counting анализ",
      "IDW интерполяция литологических данных",
    ],
  },
  {
    id: "3-arm",
    name: "lito-darwin-arm64",
    os: "macos",
    version: SITE_CONFIG.version,
    size: "8.4 MB",
    url: "/downloads/macos/lito-darwin-arm64",
    requirements: "macOS 11+ (Apple Silicon M1/M2/M3)",
    goVersion: "Go 1.23",
    releaseDate: SITE_CONFIG.releaseDate,
    changelog: [
      "Комплексная физическая модель эрозии",
      "Волновая эрозия с батиметрией и литологией",
      "Транспорт наносов и баланс массы",
      "Временная динамика и климатические сценарии",
      "CSV экспорт метрик (long и wide форматы)",
      "Улучшенный box-counting анализ",
      "IDW интерполяция литологических данных",
    ],
  },
  {
    id: "4",
    name: "lito-linux-amd64",
    os: "linux",
    version: SITE_CONFIG.version,
    size: "8.8 MB",
    url: "/downloads/linux/lito-linux-amd64",
    requirements: "Ubuntu 20.04+, Debian 11+, or compatible (x64)",
    goVersion: "Go 1.23",
    releaseDate: SITE_CONFIG.releaseDate,
    changelog: [
      "Комплексная физическая модель эрозии",
      "Волновая эрозия с батиметрией и литологией",
      "Транспорт наносов и баланс массы",
      "Временная динамика и климатические сценарии",
      "CSV экспорт метрик (long и wide форматы)",
      "Улучшенный box-counting анализ",
      "IDW интерполяция литологических данных",
    ],
  },
];
