import { useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { Activity, ArrowRight, FileText, Waves } from "lucide-react";
import { motion } from "motion/react";
import { useAuth } from "@/features/auth";
import { ReliefViewer } from "./ui/relief-viewer";

const reports = [
  { title: "Обзор батиметрии Чёрного моря", date: "v2.0 · SVG", image: "/gallery/bathymetry-overview.svg" },
  { title: "Адаптивное поле размеров", date: "Gmsh · SVG", image: "/gallery/adaptive-size-field.svg" },
  { title: "Баланс переноса наносов", date: "erosion · PNG", image: "/gallery/sediment-budget.png" },
];

export function AccountPage() {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => { if (!isAuthenticated) navigate("/login"); }, [isAuthenticated, navigate]);
  if (!isAuthenticated || !user) return null;
  return <div className="space-y-8"><header className="rounded-2xl border bg-gradient-to-br from-primary/[0.1] via-background to-cyan-500/[0.08] p-6 sm:p-8"><p className="text-sm text-primary">Личный кабинет</p><h1 className="mt-2 text-3xl font-bold sm:text-4xl">Добро пожаловать, {user.name}</h1><p className="mt-3 text-muted-foreground">Ваше рабочее пространство для просмотра результатов Litora CLI.</p></header><section className="relative overflow-hidden rounded-2xl border bg-zinc-950 p-5 text-white sm:p-8"><div className="mb-5 flex items-center justify-between"><div><p className="text-xs tracking-[0.2em] text-cyan-300 uppercase">Live relief viewer</p><h2 className="mt-2 text-2xl font-bold">3D-сетка морского дна</h2></div><Waves className="size-7 text-cyan-300" /></div><ReliefViewer /><div className="mt-4 flex flex-wrap gap-3 text-xs text-zinc-400"><span className="rounded-full bg-white/10 px-3 py-1">Источник: EMODnet bathymetry</span><span className="rounded-full bg-white/10 px-3 py-1">WebGL · Three.js</span><span className="rounded-full bg-emerald-500/20 px-3 py-1 text-emerald-300">● числовые точки подключены</span></div></section><section className="space-y-5"><div className="flex items-end justify-between"><div><p className="text-xs tracking-[0.2em] text-primary uppercase">Архив запусков</p><h2 className="mt-2 text-2xl font-bold">Последние отчёты</h2></div><Link to="/gallery" className="hidden items-center gap-2 text-sm text-primary sm:flex">Вся галерея <ArrowRight className="size-4" /></Link></div><div className="grid gap-5 md:grid-cols-3">{reports.map((report, index) => <motion.article key={report.title} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="overflow-hidden rounded-xl border bg-background shadow-sm"><div className="flex aspect-video items-center justify-center bg-muted/30 p-3"><img src={report.image} alt={report.title} className="max-h-full max-w-full object-contain" /></div><div className="p-4"><div className="flex items-center gap-2 text-xs text-primary"><FileText className="size-3.5" />{report.date}</div><h3 className="mt-2 font-semibold">{report.title}</h3></div></motion.article>)}</div></section><div className="flex items-center gap-2 rounded-xl border border-primary/20 bg-primary/[0.05] p-4 text-sm text-muted-foreground"><Activity className="size-4 text-primary" /> Отчёты сформированы из реальных результатов `lito-cli` и доступны для просмотра в галерее.</div></div>;
}
