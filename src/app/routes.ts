import { lazy } from "react";
const AboutPage = lazy(() => import("@/pages/about/about.page").then((m) => ({ default: m.AboutPage })));
const DocsPage = lazy(() => import("@/pages/docs/docs.page").then((m) => ({ default: m.DocsPage })));
const ModuleDetailPage = lazy(() => import("@/pages/docs/module-detail.page").then((m) => ({ default: m.ModuleDetailPage })));
const CapabilityDetailPage = lazy(() => import("@/pages/docs/capability-detail.page").then((m) => ({ default: m.CapabilityDetailPage })));
const ReferencePage = lazy(() => import("@/pages/docs/reference.page").then((m) => ({ default: m.ReferencePage })));
const DownloadsPage = lazy(() => import("@/pages/downloads/downloads.page").then((m) => ({ default: m.DownloadsPage })));
const HomePage = lazy(() => import("@/pages/home/home.page").then((m) => ({ default: m.HomePage })));
const InstallationPage = lazy(() => import("@/pages/installation/installation.page").then((m) => ({ default: m.InstallationPage })));
const LoginPage = lazy(() => import("@/pages/login/login.page").then((m) => ({ default: m.LoginPage })));
const ReleasesPage = lazy(() => import("@/pages/releases/releases.page").then((m) => ({ default: m.ReleasesPage })));
const GalleryPage = lazy(() => import("@/pages/gallery/gallery.page").then((m) => ({ default: m.GalleryPage })));
const AccountPage = lazy(() => import("@/pages/account/account.page").then((m) => ({ default: m.AccountPage })));

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
    path: "/gallery",
    Component: GalleryPage,
  },
  { path: "/account", Component: AccountPage },
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
    path: "/docs/reference/:slug",
    Component: ReferencePage,
  },
  {
    path: "/login",
    Component: LoginPage,
  },
];
