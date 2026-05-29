import { Link } from "react-router-dom";
import { NAV_ITEMS } from "../../config";

type DesktopNavigationProps = {
  isActive: (path: string) => boolean;
};

export const DesktopNavigation = ({ isActive }: DesktopNavigationProps) => {
  return (
    <div className="hidden gap-1 md:flex">
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`rounded-md px-3 py-2 text-sm transition-colors ${
            isActive(item.path) ? "bg-muted font-medium" : "hover:bg-muted/50"
          }`}
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
};
