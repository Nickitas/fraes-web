import { AuthProvider } from "@/features/auth";
import { ThemeProvider } from "@/shared/shadcn/components/theme-provider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider defaultTheme="system" storageKey="fraes-theme">
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
