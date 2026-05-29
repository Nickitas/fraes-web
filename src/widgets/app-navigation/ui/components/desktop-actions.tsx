import { useAuth } from "@/features/auth";
import { ROUTES } from "@/shared/config/routes";
import { Link } from "react-router";

export const DesktopActions = () => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <div className="hidden items-center gap-4 md:flex">
      {isAuthenticated ? (
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">{user?.name}</span>
          <button
            onClick={logout}
            className="rounded-md border px-3 py-1.5 text-sm transition-colors hover:bg-muted"
          >
            Выйти
          </button>
        </div>
      ) : (
        <Link
          to={ROUTES.login}
          className="rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Войти
        </Link>
      )}
    </div>
  );
};
