import type { DownloadFile } from "@/shared/api";
import { Monitor as MonitorIcon } from "lucide-react";
import { SiApple, SiLinux } from "@icons-pack/react-simple-icons";

interface DownloadCardProps {
  file: DownloadFile;
  onDownload: (file: DownloadFile) => void;
}

export function DownloadCard({ file, onDownload }: DownloadCardProps) {
  const getOsIcon = (os: DownloadFile["os"]) => {
    const iconClass = "size-10";
    switch (os) {
      case "windows":
        return <MonitorIcon className={iconClass} />;
      case "macos":
        return <SiApple className={iconClass} />;
      case "linux":
        return <SiLinux className={iconClass} />;
    }
  };

  return (
    <div className="rounded-lg border p-6 transition-colors hover:border-primary/50">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {getOsIcon(file.os)}
          <div>
            <h3 className="font-semibold">{file.name}</h3>
            <p className="text-sm text-muted-foreground capitalize">
              {file.os}
            </p>
          </div>
        </div>
        <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium">
          v{file.version}
        </span>
      </div>

      <div className="mb-4 space-y-1 text-sm text-muted-foreground">
        <p>Размер: {file.size}</p>
        <p>Сборка: {file.goVersion}</p>
        <p className="text-xs">{file.requirements}</p>
      </div>

      {file.changelog.length > 0 && (
        <details className="mb-4 text-sm">
          <summary className="cursor-pointer text-muted-foreground hover:text-foreground">
            Что нового
          </summary>
          <ul className="mt-2 ml-6 list-disc space-y-1 text-muted-foreground">
            {file.changelog.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </details>
      )}

      {file.disabled ? (
        <button
          disabled
          className="w-full cursor-not-allowed rounded-md bg-muted px-4 py-2 text-sm font-medium text-muted-foreground"
        >
          {file.disabledReason || "Скоро появится"}
        </button>
      ) : (
        <button
          onClick={() => onDownload(file)}
          className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Скачать
        </button>
      )}
    </div>
  );
}
