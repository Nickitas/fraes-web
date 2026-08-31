import { motion } from "motion/react";
import { ArrowRight, Compass, FileCheck2, Waves } from "lucide-react";
import { Link } from "react-router";

const milestones = [
  { icon: Compass, label: "01", title: "Увидеть форму", text: "Береговая линия становится измеряемой геометрией, а не просто контуром на карте." },
  { icon: Waves, label: "02", title: "Понять движение", text: "Батиметрия, литология и волновые сценарии объясняют изменение прибрежной системы." },
  { icon: FileCheck2, label: "03", title: "Проверить вывод", text: "Метрики и отчёты сохраняют путь от исходных данных до результата эксперимента." },
];

export function ProjectJourney() {
  return <section className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-primary/[0.08] via-background to-cyan-500/[0.06] p-5 sm:p-8"><div className="mb-8 max-w-2xl"><p className="text-xs font-medium tracking-[0.2em] text-primary uppercase">Философия Litora</p><h2 className="mt-2 text-2xl font-bold sm:text-3xl">От наблюдения к проверяемой модели</h2><p className="mt-3 leading-7 text-muted-foreground">Проект соединяет географические данные, численные методы и визуальные отчёты в один понятный исследовательский маршрут.</p></div><div className="grid gap-4 md:grid-cols-3">{milestones.map((milestone, index) => { const Icon = milestone.icon; return <motion.article key={milestone.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} className="group rounded-xl border bg-background/80 p-5 shadow-sm transition-colors hover:border-primary/50"><div className="mb-6 flex items-center justify-between"><div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:rotate-6"><Icon className="size-5" /></div><span className="font-mono text-xs text-muted-foreground">{milestone.label}</span></div><h3 className="text-lg font-semibold">{milestone.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{milestone.text}</p></motion.article>; })}</div><Link to="/gallery" className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3">Посмотреть результаты <ArrowRight className="size-4 transition-all" /></Link></section>;
}
