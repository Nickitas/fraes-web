import { Navbar } from "@/widgets/app-navigation";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 pt-15 pb-12">
        <div className="mx-auto">{children}</div>
      </main>
    </div>
  );
}
