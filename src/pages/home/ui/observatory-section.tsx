import { motion } from "motion/react";
import { Activity, CheckCircle2, CircleDot, Waves } from "lucide-react";

const metrics = [
  { label: "Данные", value: "GEBCO + coastline", icon: CircleDot },
  { label: "Сетка", value: "adaptive / full-quad", icon: Activity },
  { label: "Отчёт", value: "SVG · VTU · CSV", icon: CheckCircle2 },
];

export const ObservatorySection = () => <section className="relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/[0.08] via-background to-primary/[0.08] p-5 sm:p-8"><motion.div animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 5, repeat: Infinity }} className="pointer-events-none absolute -right-20 -bottom-28 size-80 rounded-full bg-cyan-400/20 blur-3xl" /><div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"><div><div className="mb-4 flex items-center gap-2 text-sm text-cyan-600 dark:text-cyan-300"><Waves className="size-4" /> Научная обсерватория</div><h2 className="text-2xl font-bold sm:text-3xl">Смотрите, как меняется берег</h2><p className="mt-3 max-w-xl leading-7 text-muted-foreground">Каждый запуск оставляет читаемый цифровой след: от исходного набора данных до визуального отчёта и контрольных метрик.</p></div><div className="relative space-y-3">{metrics.map((metric, index) => { const Icon = metric.icon; return <motion.div key={metric.label} initial={{ x: 20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.16 }} className="flex items-center gap-4 rounded-xl border bg-background/80 p-4 shadow-sm"><Icon className="size-5 text-primary" /><div className="flex-1"><p className="text-xs text-muted-foreground">{metric.label}</p><p className="font-mono text-sm">{metric.value}</p></div><span className="size-2 animate-pulse rounded-full bg-emerald-500" /></motion.div>; })}</div></div></section>;
