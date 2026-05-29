import { useTheme } from "@/shared/shadcn/components/theme-provider";
import { Particles } from "@/shared/shadcn/ui/particles";
import { Navbar } from "@/widgets/app-navigation";
import { type ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { theme } = useTheme();
  const color = theme === "dark" ? "#ffffff" : "#000000";

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-15 pb-12">
        <div className="mx-auto">{children}</div>
      </main>
      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
    </div>
  );
}
