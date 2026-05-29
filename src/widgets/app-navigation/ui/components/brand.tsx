import { Link } from "react-router-dom";
import { SITE_CONFIG } from "@/shared/config/site";

type BrandProps = {
  setMobileMenuOpen: () => void;
  to: string;
};

export const Brand = ({ setMobileMenuOpen, to }: BrandProps) => {
  return (
    <Link
      to={to}
      className="flex items-center gap-2 py-4"
      onClick={setMobileMenuOpen}
    >
      <span className="text-xl font-bold">{SITE_CONFIG.name}</span>
    </Link>
  );
};
