import { useAuth } from "@/features/auth";
import { ROUTES } from "@/shared/config/routes";
import { Link } from "react-router";
import { RippleButton } from "@/shared/shadcn/ui/ripple-button";

export const DesktopActions = () => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <div className="hidden items-center gap-4 md:flex">
      {isAuthenticated ? (
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">{user?.name}</span>
          <RippleButton onClick={logout}>Выйти</RippleButton>
        </div>
      ) : (
        <Link to={ROUTES.login}>
          <RippleButton>Войти</RippleButton>
        </Link>
      )}
    </div>
  );
};
