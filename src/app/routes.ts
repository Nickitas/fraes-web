import { AboutPage } from "@/pages/about/about.page";
import { DocsPage } from "@/pages/docs/docs.page";
import { ModuleDetailPage } from "@/pages/docs/module-detail.page";
import { CapabilityDetailPage } from "@/pages/docs/capability-detail.page";
import { DownloadsPage } from "@/pages/downloads/downloads.page";
import { HomePage } from "@/pages/home/home.page";
import { InstallationPage } from "@/pages/installation/installation.page";
import { LoginPage } from "@/pages/login/login.page";
import { ReleasesPage } from "@/pages/releases/releases.page";

export const routes = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/installation",
    Component: InstallationPage,
  },
  {
    path: "/downloads",
    Component: DownloadsPage,
  },
  {
    path: "/releases",
    Component: ReleasesPage,
  },
  {
    path: "/docs",
    Component: DocsPage,
  },
  {
    path: "/docs/modules/:moduleId",
    Component: ModuleDetailPage,
  },
  {
    path: "/docs/capabilities/:capabilityId",
    Component: CapabilityDetailPage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
];
