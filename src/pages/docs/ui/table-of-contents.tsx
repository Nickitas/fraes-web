import { useEffect, useState } from "react";
import { cn } from "@/shared/shadcn/lib/utils";

interface TOCItem {
  id: string;
  title: string;
  level: number;
}

export const TableOfContents = () => {
  const [activeId, setActiveId] = useState<string>("");
  const [items, setItems] = useState<TOCItem[]>([]);

  useEffect(() => {
    // Extract headings from the page
    const headings = document.querySelectorAll("h2[id]");
    const tocItems: TOCItem[] = [];

    headings.forEach((heading) => {
      const id = heading.id;
      const title = heading.textContent || "";

      tocItems.push({
        id,
        title,
        level: 2,
      });
    });

    /* eslint-disable-next-line  */
    setItems(tocItems);

    // Intersection Observer for active heading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -66%" }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  if (items.length === 0) return null;

  return (
    <nav className="space-y-4">
      <div className="flex items-center gap-2 px-4">
        <div className="h-4 w-px bg-border" />
        <h4 className="text-xs font-semibold text-foreground/80 uppercase">
          На этой странице
        </h4>
      </div>

      <ul className="space-y-1">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(item.id);
                if (element) {
                  element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }
              }}
              className={cn(
                "flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-all",
                "hover:bg-muted/50",
                activeId === item.id
                  ? "bg-muted/50 font-medium text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <span
                className={cn(
                  "h-1 w-1 shrink-0 rounded-full transition-colors",
                  activeId === item.id ? "bg-primary" : "bg-muted-foreground/30"
                )}
              />
              <span className="line-clamp-2">{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
