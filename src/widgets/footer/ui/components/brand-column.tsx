import { SITE_CONFIG } from "@/shared/config/site";
import { Link } from "react-router";

export const BrandColumn = () => {
  return (
    <div className="space-y-4">
      <Link to="/" className="inline-flex items-center gap-2">
        <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <span className="font-bold">Fr</span>
        </div>
        <span className="text-lg font-semibold">{SITE_CONFIG.name}</span>
      </Link>
      <p className="max-w-xs text-sm text-muted-foreground">
        {SITE_CONFIG.description}
      </p>
      <div className="flex items-center gap-2 text-xs text-muted-foreground">
        <span className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 font-medium">
          {SITE_CONFIG.version}
        </span>
      </div>
    </div>
  );
};
