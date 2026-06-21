import { useState, useEffect, useRef } from "react";
import { Search, X, FileCode, Zap } from "lucide-react";
import { docsPageContent } from "../constants";
import { useNavigate } from "react-router";
import { cn } from "@/shared/shadcn/lib/utils";

interface SearchResult {
  type: "module" | "capability";
  id: string;
  title: string;
  description: string;
}

export const DocsSearch = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (value: string) => {
    setQuery(value);
    if (value.length < 2) {
      setResults([]);
      setShowResults(false);
      return;
    }

    const searchResults: SearchResult[] = [];
    const searchLower = value.toLowerCase();

    // Search modules
    docsPageContent.modules.forEach((module) => {
      const searchableText =
        `${module.title} ${module.description} ${module.features.join(" ")}`.toLowerCase();
      if (searchableText.includes(searchLower)) {
        searchResults.push({
          type: "module",
          id: module.id,
          title: module.title,
          description: module.description,
        });
      }
    });

    // Search capabilities
    docsPageContent.capabilities.forEach((capability) => {
      const searchableText =
        `${capability.title} ${capability.description} ${capability.useCases.join(" ")}`.toLowerCase();
      if (searchableText.includes(searchLower)) {
        searchResults.push({
          type: "capability",
          id: capability.id,
          title: capability.title,
          description: capability.description,
        });
      }
    });

    setResults(searchResults);
    setShowResults(true);
  };

  const handleClear = () => {
    setQuery("");
    setResults([]);
    setShowResults(false);
  };

  const handleResultClick = (result: SearchResult) => {
    const path =
      result.type === "module"
        ? `/docs/modules/${result.id}`
        : `/docs/capabilities/${result.id}`;
    navigate(path);
    setQuery("");
    setShowResults(false);
  };

  return (
    <div className="relative mb-8" ref={searchRef}>
      <div className="group relative">
        <Search className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary" />
        <input
          type="text"
          placeholder="Поиск по документации..."
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          className={cn(
            "w-full rounded-xl border-2 py-4 pr-12 pl-12 text-base transition-all",
            "bg-gradient-to-r from-background to-muted/20",
            "focus:border-primary/50 focus:ring-4 focus:ring-primary/10 focus:outline-none",
            "placeholder:text-muted-foreground/50"
          )}
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute top-1/2 right-4 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {showResults && results.length > 0 && (
        <div className="absolute top-full right-0 left-0 z-10 mt-2 max-h-96 overflow-y-auto rounded-xl border-2 border-border/50 bg-background/95 shadow-xl backdrop-blur-sm">
          <div className="space-y-1 p-2">
            {results.map((result) => (
              <button
                key={`${result.type}-${result.id}`}
                onClick={() => handleResultClick(result)}
                className="group w-full rounded-lg p-3 text-left transition-all hover:bg-muted/50"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={cn(
                      "mt-0.5 rounded-lg p-2",
                      result.type === "module"
                        ? "bg-blue-500/10 text-blue-500"
                        : "bg-purple-500/10 text-purple-500"
                    )}
                  >
                    {result.type === "module" ? (
                      <FileCode className="h-4 w-4" />
                    ) : (
                      <Zap className="h-4 w-4" />
                    )}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-semibold text-foreground transition-colors group-hover:text-primary">
                        {result.title}
                      </span>
                      <span
                        className={cn(
                          "shrink-0 rounded-full px-2 py-0.5 text-xs",
                          result.type === "module"
                            ? "border border-blue-500/20 bg-blue-500/10 text-blue-500"
                            : "border border-purple-500/20 bg-purple-500/10 text-purple-500"
                        )}
                      >
                        {result.type === "module" ? "Модуль" : "Возможность"}
                      </span>
                    </div>
                    <p className="mt-1 line-clamp-1 text-sm text-muted-foreground">
                      {result.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {showResults && results.length === 0 && (
        <div className="absolute top-full right-0 left-0 z-10 mt-2 rounded-xl border-2 border-border/50 bg-background/95 p-8 text-center shadow-xl backdrop-blur-sm">
          <div className="space-y-2">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-muted">
              <Search className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-muted-foreground">Ничего не найдено</p>
            <p className="text-sm text-muted-foreground/60">
              Попробуйте другие ключевые слова
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
