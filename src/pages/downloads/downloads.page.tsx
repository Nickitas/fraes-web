import { DownloadGuard, DownloadList } from "@/features/downloads";
import { HeroSection } from "./ui/hero-section";
import { AuthNotice } from "./ui/auth-notice";
import { SourceCode } from "./ui/source-code";
import { Changelog } from "./ui/changelog";

export function DownloadsPage() {
  return (
    <DownloadGuard>
      <div className="space-y-6 sm:space-y-8">
        <HeroSection />
        <AuthNotice />
        <DownloadList />
        <SourceCode />
        <Changelog />
      </div>
    </DownloadGuard>
  );
}
