import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../model";
import { ROUTES } from "@/shared/config/routes";
import { loginPageContent } from "../constants";

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
    <div className="w-full max-w-md space-y-6 rounded-lg border p-6 sm:p-8">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold sm:text-3xl">
          {loginPageContent.title}
        </h1>
        <p className="text-sm text-muted-foreground sm:text-base">
          {loginPageContent.subtitle}
        </p>
      </div>

      {error && (
        <div className="rounded-md bg-destructive/15 p-3 text-sm text-destructive">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            {loginPageContent.emailLabel}
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full rounded-md border px-3 py-2 text-sm"
            placeholder={loginPageContent.emailPlaceholder}
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            {loginPageContent.passwordLabel}
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full rounded-md border px-3 py-2 text-sm"
            placeholder={loginPageContent.passwordPlaceholder}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading
            ? loginPageContent.submitButtonLoading
            : loginPageContent.submitButton}
        </button>
      </form>

      <div className="text-center text-xs text-muted-foreground sm:text-sm">
        {loginPageContent.demoCredentials}
      </div>
    </div>
  );
}
