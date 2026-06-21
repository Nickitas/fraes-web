import { FOOTER_LINKS } from "../../config";
import { Link } from "react-router";

export const ResourcesLinks = () => {
  return (
    <div className="mt-4">
      <h3 className="mb-2 text-sm font-semibold">Ресурсы</h3>
      <ul className="space-y-2">
        {FOOTER_LINKS.resources.map((link) => {
          const isExternal = link.href.startsWith("http");

          return (
            <li key={link.label}>
              {isExternal ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  to={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
