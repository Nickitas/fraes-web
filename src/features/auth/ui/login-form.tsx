import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../model";
import { ROUTES } from "@/shared/config/routes";
import { loginPageContent } from "../constants";
import { RippleButton } from "@/shared/shadcn/ui/ripple-button";
import { MagicCard } from "@/shared/shadcn/ui/magic-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/shadcn/components/ui/card";

export function LoginForm() {
  const [email, setEmail] = useState("user@example.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login({ email, password });
      navigate(ROUTES.downloads);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : loginPageContent.errorDefault
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full max-w-sm items-center justify-center p-4">
      <Card className="border-none shadow-none p-0">
        <MagicCard
          gradientSize={200}
          gradientColor="rgba(139, 92, 246, 0.4)"
          gradientFrom="rgba(59, 130, 246, 0.3)"
          gradientTo="rgba(6, 182, 212, 0.3)"
          className="p-0 shadow-xl"
        >
          <CardHeader className="border-border/50 border-b p-6 [.border-b]:pb-4">
            <CardTitle className="text-xl">{loginPageContent.title}</CardTitle>
            <CardDescription className="text-sm">
              {loginPageContent.subtitle}
            </CardDescription>
          </CardHeader>

          {error && (
            <div className="px-6 pt-4">
              <div className="rounded-lg border border-destructive/50 bg-destructive/10 px-3 py-2 text-sm text-destructive">
                {error}
              </div>
            </div>
          )}

          <CardContent className="p-6 pt-4">
            <form className="grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium leading-none">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-none transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder="name@example.com"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="password" className="text-sm font-medium leading-none">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-none transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  placeholder="••••••••"
                />
              </div>
            </form>
          </CardContent>

          <CardFooter className="border-border/50 border-t p-6 [.border-t]:pt-4 flex-col gap-4">
            <RippleButton
              type="submit"
              disabled={loading}
              className="w-full"
              onClick={handleSubmit}
            >
              {loading ? "Загрузка..." : "Войти"}
            </RippleButton>
            <p className="text-center text-xs text-muted-foreground">
              {loginPageContent.demoCredentials}
            </p>
          </CardFooter>
        </MagicCard>
      </Card>
    </div>
  );
}
