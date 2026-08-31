import { useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router";
import { ArrowLeft, BookOpen } from "lucide-react";
import { localDocuments, referenceDocuments } from "./reference";
const markdownComponents = {
  h1: ({ children }: { children?: React.ReactNode }) => <h2 className="border-b border-border/50 pb-3 pt-4 text-2xl font-bold sm:text-3xl">{children}</h2>,
  h2: ({ children }: { children?: React.ReactNode }) => <h2 className="border-b border-border/50 pb-2 pt-6 text-xl font-bold sm:text-2xl">{children}</h2>,
  h3: ({ children }: { children?: React.ReactNode }) => <h3 className="pt-4 text-lg font-bold sm:text-xl">{children}</h3>,
  p: ({ children }: { children?: React.ReactNode }) => <p className="leading-7 text-muted-foreground">{children}</p>,
  ul: ({ children }: { children?: React.ReactNode }) => <ul className="space-y-2 pl-6 text-muted-foreground [&>li]:list-disc">{children}</ul>,
  ol: ({ children }: { children?: React.ReactNode }) => <ol className="space-y-2 pl-6 text-muted-foreground [&>li]:list-decimal">{children}</ol>,
  blockquote: ({ children }: { children?: React.ReactNode }) => <blockquote className="border-l-4 border-primary/40 bg-primary/[0.06] px-4 py-3 italic">{children}</blockquote>,
  code: ({ children, className }: { children?: React.ReactNode; className?: string }) => className ? <code className="block overflow-x-auto rounded-xl bg-zinc-950 p-4 font-mono text-sm leading-6 text-zinc-100">{children}</code> : <code className="rounded bg-primary/10 px-1.5 py-0.5 font-mono text-[0.9em] text-primary">{children}</code>,
  a: ({ href, children }: { href?: string; children?: React.ReactNode }) => <a href={href} target={href?.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/70">{children}</a>,
  hr: () => <hr className="my-6 border-border" />,
};

export function ReferencePage() {
  const { slug = "" } = useParams<{ slug: string }>();
  const document = referenceDocuments.find((item) => item.slug === slug);
  const [content, setContent] = useState("Загрузка документа…");
  const currentIndex = document ? referenceDocuments.findIndex((item) => item.slug === document.slug) : -1;
  const headings = useMemo(() => content.split("\n").filter((line) => /^#{2,3}\s+/.test(line)).map((line) => line.replace(/^#{2,3}\s+/, "")), [content]);
  useEffect(() => { if (document) setContent(document.content ?? localDocuments[`./docs/${document.slug}`] ?? "Не удалось загрузить документ."); }, [document]);
  if (!document) return <div className="py-16 text-center"><h1 className="text-2xl font-bold">Документ не найден</h1><Link to="/docs" className="mt-4 inline-block text-primary">К документации</Link></div>;
  return <article className="space-y-8"><Link to="/docs" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" /> К документации</Link><header className="space-y-3"><div className="flex items-center gap-3 text-primary"><BookOpen className="size-5" /><span className="text-sm">{document.category}</span></div><h1 className="text-3xl font-bold sm:text-4xl">{document.title}</h1><p className="text-lg text-muted-foreground">{document.description}</p></header><div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-start"><div className="rounded-2xl border bg-background/80 p-5 shadow-sm sm:p-8"><ReactMarkdown components={markdownComponents}>{content}</ReactMarkdown></div>{headings.length > 0 && <aside className="sticky top-6 hidden rounded-xl border bg-muted/20 p-4 lg:block"><p className="mb-3 text-xs font-semibold tracking-wide text-primary uppercase">В документе</p><nav className="space-y-2 text-sm text-muted-foreground">{headings.map((heading) => <a key={heading} href={`#${heading.toLowerCase().replace(/[^а-яa-z0-9]+/gi, "-")}`} className="block hover:text-foreground">{heading}</a>)}</nav></aside>}</div><nav className="grid gap-3 border-t border-border/50 pt-6 sm:grid-cols-2">{currentIndex > 0 && <Link to={`/docs/reference/${referenceDocuments[currentIndex - 1].slug}`} className="rounded-xl border p-4 text-sm hover:border-primary/50"><span className="text-xs text-muted-foreground">Предыдущий документ</span><span className="mt-1 block font-medium">← {referenceDocuments[currentIndex - 1].title}</span></Link>}{currentIndex < referenceDocuments.length - 1 && <Link to={`/docs/reference/${referenceDocuments[currentIndex + 1].slug}`} className="rounded-xl border p-4 text-right text-sm hover:border-primary/50"><span className="text-xs text-muted-foreground">Следующий документ</span><span className="mt-1 block font-medium">{referenceDocuments[currentIndex + 1].title} →</span></Link>}</nav></article>;
}
