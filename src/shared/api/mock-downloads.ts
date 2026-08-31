import { SITE_CONFIG } from "@/shared/config/site";
import releaseManifest from "@/shared/config/releases.json";

export interface DownloadFile {
  id: string; name: string; os: "windows" | "macos" | "linux"; version: string; size: string; url: string;
  requirements: string; goVersion: string; releaseDate: string; changelog: string[]; sha256: string; disabled?: boolean; disabledReason?: string;
}

const changelog = ["Реальные 2D-сетки Gmsh и сравнение генераторов", "Батиметрическая модель с экспортом MSH, VTU, CSV и SVG", "3D-рельеф, профили и контроль качества интерполяции", "Воспроизводимые метрики и паспорта входных данных", "Обновлённый русскоязычный CLI и документация"];
export const downloadsApi: DownloadFile[] = releaseManifest.files.map((file) => ({ ...file, os: file.os as DownloadFile["os"], url: file.path, version: SITE_CONFIG.version, goVersion: "Go 1.23+", releaseDate: SITE_CONFIG.releaseDate, changelog }));
