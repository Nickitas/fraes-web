export interface ReferenceDocument { slug: string; title: string; description: string; category: string; content: string; }

export const localDocuments = import.meta.glob("./docs/*.md", { query: "?raw", import: "default", eager: true }) as Record<string, string>;

const categoryFor = (slug: string) => slug.includes("bathymetry") ? "Батиметрия" : slug.includes("adaptive") || slug.includes("mesh") ? "Сетки" : slug.includes("export") || slug.includes("svg") ? "Экспорт" : slug.includes("quality") || slug.includes("provenance") || slug.includes("expert") ? "Воспроизводимость" : slug.includes("coastline") || slug.includes("map") ? "Геометрия" : slug.includes("model") || slug.includes("fractal") || slug.includes("cerc") || slug.includes("cell") || slug.includes("ml") ? "Научная модель" : "Начало работы";
const titleFor = (content: string, slug: string) => content.match(/^#\s+(.+)$/m)?.[1]?.replace(/[`*_]/g, "") ?? slug.replace(/\.md$/, "").replace(/[-_]/g, " ");
const descriptionFor = (content: string) => content.split("\n").find((line) => line.trim() && !line.startsWith("#") && !line.startsWith("```") && !line.startsWith("|") )?.trim() ?? "Документация Litora CLI.";

export const referenceDocuments: ReferenceDocument[] = Object.entries(localDocuments).map(([path, content]) => {
  const slug = path.split("/").pop() ?? path;
  return { slug, title: titleFor(content, slug), description: descriptionFor(content), category: categoryFor(slug), content };
}).sort((a, b) => a.title.localeCompare(b.title, "ru"));
