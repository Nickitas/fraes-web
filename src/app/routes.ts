import { AboutPage } from "@/pages/about/about.page";
import { DownloadsPage } from "@/pages/downloads/downloads.page";
import { HomePage } from "@/pages/home/home.page";
import { InstallationPage } from "@/pages/installation/installation.page";
import { LoginPage } from "@/pages/login/login.page";

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
    path: "/login",
    Component: LoginPage,
  },
];
