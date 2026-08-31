import { motion } from "motion/react";
import { ArrowRight, Database, Grid3X3, LineChart, Waves } from "lucide-react";

const steps = [
  { icon: Database, title: "Соберите данные", text: "Береговая линия, батиметрия и литология получают единый источник и паспорт." },
  { icon: Grid3X3, title: "Постройте сетку", text: "Адаптивный Gmsh сохраняет важные особенности рельефа там, где они нужны." },
  { icon: Waves, title: "Запустите сценарий", text: "Волны, эрозия и перенос наносов превращаются в воспроизводимый эксперимент." },
  { icon: LineChart, title: "Проверьте результат", text: "Метрики, карты, профили и отчёты помогают увидеть, что произошло." },
];

export const WorkflowSection = () => <section className="rounded-2xl border bg-muted/20 p-5 sm:p-8">
  <div className="mb-8 max-w-2xl"><p className="text-xs font-medium tracking-[0.2em] text-primary uppercase">Как это работает</p><h2 className="mt-2 text-2xl font-bold sm:text-3xl">Один маршрут от данных к выводу</h2><p className="mt-3 text-muted-foreground">Litora раскладывает сложное исследование на понятные шаги — и оставляет след каждого решения.</p></div>
  <div className="grid gap-4 md:grid-cols-4">{steps.map((step, index) => { const Icon = step.icon; return <motion.div key={step.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ delay: index * 0.12 }} className="group relative rounded-xl border bg-background p-5 hover:border-primary/50"><div className="mb-5 flex items-center justify-between"><div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Icon className="size-5" /></div><span className="font-mono text-xs text-muted-foreground/60">0{index + 1}</span></div><h3 className="font-semibold">{step.title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{step.text}</p>{index < steps.length - 1 && <ArrowRight className="absolute -right-3 top-9 z-10 hidden size-5 text-primary/50 md:block" />}</motion.div>; })}</div>
</section>;
