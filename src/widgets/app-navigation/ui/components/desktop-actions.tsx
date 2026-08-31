import { useAuth } from "@/features/auth";
import { ROUTES } from "@/shared/config/routes";
import { Link } from "react-router";
import { useState } from "react";
import { LogOut, UserRound } from "lucide-react";
import { AnimatedThemeToggler } from "@/shared/shadcn/ui/animated-theme-toggler";
import { RippleButton } from "@/shared/shadcn/ui/ripple-button";

export const DesktopActions = () => {
  const { isAuthenticated, logout, user } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden items-center gap-4 md:flex">
      {isAuthenticated ? (
        <div className="relative">
          <RippleButton aria-expanded={open} onClick={() => setOpen(!open)} className="h-10 max-w-56 gap-2 rounded-xl border flex-row px-3 py-1.5 text-sm sm:max-w-64">
            <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <UserRound className="size-4" />
            </span>
          </RippleButton>
          {open && <div className="absolute top-[calc(100%+0.5rem)] right-0 z-50 w-60 rounded-xl border bg-background/95 p-2 shadow-2xl backdrop-blur">
            <div className="mb-1 border-b px-3 py-2">
              <p className="truncate text-sm font-medium">{user?.name}</p>
              <p className="truncate text-xs text-muted-foreground">{user?.email}</p>
            </div>
            <Link to="/account" onClick={() => setOpen(false)} className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm hover:bg-muted">
              <UserRound className="size-4" />
              Личный кабинет
            </Link>
            <div className="my-1 border-t" />
            <div className="flex items-center justify-between rounded-lg px-3 py-2 text-sm">
              <span>Тема</span>
              <AnimatedThemeToggler className="size-8 rounded-lg border p-1.5" />
            </div>
            <button onClick={() => { logout(); setOpen(false); }} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-500 hover:bg-red-500/10">
              <LogOut className="size-4" />
              Выйти
            </button>
          </div>}
        </div>
      ) : (
        <Link to={ROUTES.login}>
          <RippleButton>Войти</RippleButton>
        </Link>
      )}
    </div>
  );
};
