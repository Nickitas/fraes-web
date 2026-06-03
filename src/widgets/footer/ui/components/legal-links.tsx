import { FOOTER_LINKS } from "../../config";

export const LegalLinks = () => {
  return (
    <div className="mt-4">
      <h3 className="text-sm font-semibold mb-2">Правовая информация</h3>
      <ul className="space-y-2">
        {FOOTER_LINKS.legal.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
