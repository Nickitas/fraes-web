import { mockDownloadsApi, type DownloadFile } from "@/shared/api";
import { DownloadCard } from "./download-card";

export function DownloadList() {
  const handleDownload = (file: DownloadFile) => {
    const link = document.createElement("a");
    link.href = file.url;
    link.download = file.name;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {mockDownloadsApi.map((file) => (
        <DownloadCard key={file.id} file={file} onDownload={handleDownload} />
      ))}
    </div>
  );
}
