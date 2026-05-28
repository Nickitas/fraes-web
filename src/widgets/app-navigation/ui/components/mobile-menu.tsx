import { Link } from "react-router";
import { NAV_ITEMS } from "../../config";
import { useAuth } from "@/features/auth";
import { ROUTES } from "@/shared/config/routes";
import type { SetStateAction } from "react";

type MobileMenuProps = {
  isActive: (path: string) => boolean;
  setMobileMenuOpen: (value: SetStateAction<boolean>) => void;
};

export const MobileMenu = ({
  isActive,
  setMobileMenuOpen,
}: MobileMenuProps) => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <div className="border-t md:hidden">
      <div className="container mx-auto space-y-1 px-4 py-4">
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setMobileMenuOpen}
            className={`block rounded-md px-3 py-2 text-sm transition-colors ${
              isActive(item.path) ? "bg-muted font-medium" : "hover:bg-muted/50"
            }`}
          >
            {item.label}
          </Link>
        ))}

        <div className="border-t pt-4">
          {isAuthenticated ? (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">
                  {user?.name}
                </span>
              </div>
              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="w-full rounded-md border px-3 py-2 text-sm transition-colors hover:bg-muted"
              >
                Выйти
              </button>
            </div>
          ) : (
            <Link
              to={ROUTES.login}
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md bg-primary px-3 py-2 text-center text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Войти
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
