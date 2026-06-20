import { useState } from "react";
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/shared/shadcn/components/terminal";
import { Check, AlertCircle, Info, Cpu } from "lucide-react";
import { motion } from "motion/react";
import { RippleButton } from "@/shared/shadcn/ui/ripple-button";

const osInstructions = {
  linux: {
    title: "Linux",
    steps: [
      {
        title: "1. Распакуйте архив",
        code: "unzip lito-v1.2-linux-amd64.zip",
        note: "Или используйте любой другой архиватор",
      },
      {
        title: "2. Сделайте файл исполняемым",
        code: "chmod +x lito-linux-amd64",
        note: "Необходимо для выполнения бинарного файла",
      },
      {
        title: "3. Переместите в PATH (опционально)",
        code: "sudo mv lito-linux-amd64 /usr/local/bin/lito",
        note: "Теперь можно запускать просто командой 'lito'",
      },
    ],
    verification: {
      code: "lito --help",
      note: "Проверка работы команды",
    },
  },
  macos: {
    title: "macOS",
    steps: [
      {
        title: "1. Распакуйте архив",
        code: "unzip lito-v1.2-darwin-*.zip",
        note: "Замените * на amd64 или arm64 в зависимости от процессора",
      },
      {
        title: "2. Сделайте файл исполняемым",
        code: "chmod +x lito-darwin-*",
        note: "Необходимо для выполнения бинарного файла",
      },
      {
        title: "3. Переместите в PATH (опционально)",
        code: "sudo mv lito-darwin-* /usr/local/bin/lito",
        note: "Теперь можно запускать просто командой 'lito'",
      },
    ],
    verification: {
      code: "lito --help",
      note: "Проверка работы команды",
    },
    warning:
      "На macOS может потребоваться разрешение запуска в настройках безопасности",
  },
  windows: {
    title: "Windows",
    steps: [
      {
        title: "1. Распакуйте архив",
        code: 'Expand-Archive lito-v1.2-windows-amd64.zip',
        note: "Или дважды кликните на архив для распаковки",
      },
      {
        title: "2. Переместите в PATH (опционально)",
        code:
          "# Переместите файл в директорию из PATH\n# или добавьте текущую директорию в PATH",
        note: "Для удобства использования",
      },
      {
        title: "3. Используйте команду",
        code: "lito-windows-amd64.exe --help",
        note: "Или переименуйте файл в lito.exe",
      },
    ],
    verification: {
      code: "lito-windows-amd64.exe --help",
      note: "Проверка работы команды",
    },
  },
};

type OsType = keyof typeof osInstructions;

const InstallationStep = ({
  step,
}: {
  step: { title: string; code: string; note: string };
}) => {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <div className="mb-6 last:mb-0">
      <h3 className="mb-3 font-medium text-foreground">{step.title}</h3>
      <Terminal>
        <TypingAnimation>{step.code}</TypingAnimation>
        <AnimatedSpan
          delay={1500}
          className={`${isCompleted ? "text-green-500" : "text-muted-foreground"}`}
        >
          {isCompleted ? "✓ Выполнено успешно" : "> Ожидание выполнения..."}
        </AnimatedSpan>
        {step.note && (
          <AnimatedSpan
            delay={2500}
            className="text-muted-foreground text-xs"
          >
            ℹ {step.note}
          </AnimatedSpan>
        )}
      </Terminal>
      <RippleButton
        onClick={() => setIsCompleted(!isCompleted)}
        className="mt-2"
      >
        {isCompleted ? "Отменить" : "Отметить как выполненное"}
      </RippleButton>
    </div>
  );
};

export const BinaryInstallation = () => {
  const [activeOs, setActiveOs] = useState<OsType>("linux");
  const osTypes: OsType[] = ["linux", "macos", "windows"];

  return (
    <section className="space-y-6 rounded-lg border p-4 sm:p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold sm:text-2xl mb-2">
          Установка бинарных файлов
        </h2>
        <p className="text-muted-foreground">
          Выберите вашу операционную систему для получения пошаговых инструкций
        </p>
      </div>

      {/* Tabs */}
      <div className="border-b border-border">
        <div className="flex flex-wrap gap-2 -mb-px">
          {osTypes.map((os) => (
            <button
              key={os}
              onClick={() => setActiveOs(os)}
              className={`px-4 py-2 font-medium transition-colors relative ${
                activeOs === os
                  ? "text-foreground border-b-2 border-primary"
                  : "text-muted-foreground hover:text-foreground hover:border-b-2 hover:border-border"
              }`}
            >
              <div className="flex items-center gap-2">
                <Cpu className="size-4" />
                <span>{osInstructions[os].title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Active OS Content */}
      <motion.div
        key={activeOs}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="pt-4"
      >
        {(() => {
          const instructions = osInstructions[activeOs];

          return (
            <div className="space-y-6">
              {"warning" in instructions && instructions.warning && (
                <div className="flex items-start gap-3 p-4 rounded-lg bg-amber-500/10 border border-amber-500/20">
                  <AlertCircle className="size-4 text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    {instructions.warning}
                  </p>
                </div>
              )}

              <div className="space-y-6">
                {instructions.steps.map((step, index) => (
                  <InstallationStep key={index} step={step} />
                ))}
              </div>

              <div className="pt-4 border-t border-border/50">
                <h4 className="mb-3 font-medium flex items-center gap-2">
                  <Check className="size-4 text-green-500" />
                  Проверка установки
                </h4>
                <Terminal>
                  <TypingAnimation>{instructions.verification.code}</TypingAnimation>
                  <AnimatedSpan
                    delay={1500}
                    className="text-green-500"
                  >
                    ✓ Команда доступна
                  </AnimatedSpan>
                  <AnimatedSpan
                    delay={2500}
                    className="text-muted-foreground text-xs"
                  >
                    ℹ {instructions.verification.note}
                  </AnimatedSpan>
                </Terminal>
              </div>
            </div>
          );
        })()}
      </motion.div>

      {/* First Run Section */}
      <div className="pt-4 border-t border-border/50">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Check className="size-4 text-green-500" />
          Первый запуск
        </h3>
        <div className="space-y-3">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Проверка источника данных:</p>
            <Terminal>
              <TypingAnimation>lito source</TypingAnimation>
              <AnimatedSpan delay={1500} className="text-green-500">
                ✓ Источник данных доступен
              </AnimatedSpan>
            </Terminal>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">Полный научный сценарий:</p>
            <Terminal>
              <TypingAnimation>
                lito all --iterations 3 --steps 5
              </TypingAnimation>
              <AnimatedSpan delay={1500} className="text-green-500">
                ✓ Моделирование завершено успешно
              </AnimatedSpan>
            </Terminal>
          </div>
        </div>
      </div>

      {/* Additional Tools Section */}
      <div className="pt-4 border-t border-border/50">
        <h3 className="font-semibold mb-3 flex items-center gap-2">
          <Info className="size-4 text-blue-500" />
          Дополнительные инструменты
        </h3>
        <div className="flex items-start gap-3 p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
          <Info className="size-4 text-purple-600 dark:text-purple-400 mt-0.5 shrink-0" />
          <div className="text-sm text-purple-700 dark:text-purple-300">
            <p className="mb-2">
              Для использования Python скриптов анализа данных требуется
              Python 3.8+:
            </p>
            <Terminal>
              <TypingAnimation>
                pip install pandas matplotlib seaborn numpy scipy
              </TypingAnimation>
              <AnimatedSpan delay={1500} className="text-green-500">
                ✓ Пакеты установлены
              </AnimatedSpan>
            </Terminal>
          </div>
        </div>
      </div>
    </section>
  );
};
