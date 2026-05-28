import { Layout } from "@/shared/ui";
import { routes } from "./routes";

export function App() {
  return (
    <Layout>
      {routes.map((route) => (
        <div key={route.path} data-route={route.path}>
          <route.Component />
        </div>
      ))}
    </Layout>
  );
}
