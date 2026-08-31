import { Suspense } from "react";
import { Layout } from "@/shared/ui";
import { routes } from "./routes";

export function App() {
  return (
    <Layout>
      {routes.map((route) => (
        <div key={route.path} data-route={route.path}>
          <Suspense fallback={<div className="flex min-h-64 items-center justify-center text-muted-foreground">Загрузка…</div>}><route.Component /></Suspense>
        </div>
      ))}
    </Layout>
  );
}
