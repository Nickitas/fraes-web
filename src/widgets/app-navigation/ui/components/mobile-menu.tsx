import { Link } from "react-router";
import { NAV_ITEMS } from "../../config";
import { useAuth } from "@/features/auth";
import { ROUTES } from "@/shared/config/routes";
import { motion, AnimatePresence } from "motion/react";
import type { Dispatch, SetStateAction } from "react";
import { ChevronRight, LogOut, User } from "lucide-react";
import { RippleButton } from "@/shared/shadcn/ui/ripple-button";

type MobileMenuProps = {
  isActive: (path: string) => boolean;
  isOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export const MobileMenu = ({
  isActive,
  isOpen,
  setMobileMenuOpen,
}: MobileMenuProps) => {
  const { isAuthenticated, logout, user } = useAuth();

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
      },
    },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.25,
        delay: i * 0.05,
        ease: [0, 0, 0.2, 1] as const,
      },
    }),
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:hidden"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div className="container mx-auto space-y-1 px-4 py-6">
            {NAV_ITEMS.map((item, index) => (
              <motion.div
                key={item.path}
                custom={index}
                variants={itemVariants}
                initial="closed"
                animate="open"
              >
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="group flex items-center justify-between rounded-lg px-4 py-3 text-sm transition-all duration-200 hover:bg-muted/50"
                >
                  <span
                    className={`font-medium transition-colors ${
                      isActive(item.path)
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {item.label}
                  </span>
                  <ChevronRight
                    className={`size-4 transition-all duration-200 ${
                      isActive(item.path)
                        ? "translate-x-0 text-primary opacity-100"
                        : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              </motion.div>
            ))}

            {/* User section with animation */}
            <motion.div
              custom={NAV_ITEMS.length}
              variants={itemVariants}
              initial="closed"
              animate="open"
              className="border-t border-border/50 pt-4"
            >
              {isAuthenticated ? (
                <div className="space-y-3">
                  {/* User info */}
                  <div className="flex items-center gap-3 rounded-lg bg-muted/30 px-4 py-3">
                    <div className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <User className="size-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{user?.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {user?.email}
                      </p>
                    </div>
                  </div>

                  {/* Logout button */}
                  <RippleButton
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full"
                  >
                    <span className="flex items-center justify-between gap-2">
                      <span>Выйти</span>
                      <LogOut className="size-4" />
                    </span>
                  </RippleButton>
                </div>
              ) : (
                <Link to={ROUTES.login} onClick={() => setMobileMenuOpen(false)}>
                  <RippleButton className="w-full">
                    <span className="flex items-center justify-center gap-2">
                      <span>Войти</span>
                      <ChevronRight className="size-4" />
                    </span>
                  </RippleButton>
                </Link>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
