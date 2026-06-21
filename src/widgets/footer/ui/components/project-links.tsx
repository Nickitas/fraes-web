import { Link } from "react-router";
import { FOOTER_LINKS } from "../../config";

export const ProjectLinks = () => {
  return (
    <div className="mt-4">
      <h3 className="mb-2 text-sm font-semibold">Проект</h3>
      <ul className="space-y-2">
        {FOOTER_LINKS.project.map((link) => (
          <li key={link.label}>
            <Link
              to={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
