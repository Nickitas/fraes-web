import { Link } from "react-router";
import { cn } from "@/shared/shadcn/lib/utils";
import { TextAnimate } from "@/shared/shadcn/ui/text-animate";

export interface TechBadge {
  label: string;
}

export interface CtaButton {
  label: string;
  route: string;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  badges?: readonly TechBadge[];
  ctaButtons?: readonly CtaButton[];
  version?: string;
  visualContent?: React.ReactNode;
  className?: string;
}

export const Hero = ({
  title,
  subtitle,
  description,
  badges = [],
  ctaButtons = [],
  version,
  visualContent,
  className,
}: HeroProps) => {
  const isExtended =
    !!visualContent || badges.length > 0 || ctaButtons.length > 0;

  if (isExtended) {
    return (
      <section
        className={cn(
          "item-center relative mx-auto mt-10 flex h-screen flex-col overflow-hidden",
          className
        )}
      >
        <div className="mx-auto flex flex-col items-center justify-center gap-6">
          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-4xl">
            {subtitle}
          </h1>
          {description && (
            <p className="mx-auto max-w-xl text-center text-lg text-muted-foreground sm:text-xl lg:mx-0">
              {description}
            </p>
          )}
          {(badges.length > 0 || version) && (
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground sm:gap-3 sm:text-sm lg:justify-start">
              {badges.map((badge, i) => (
                <span key={i} className="rounded-md bg-muted px-2 py-1">
                  {badge.label}
                </span>
              ))}
              {version && (
                <span className="rounded-md bg-muted px-2 py-1">
                  v{version}
                </span>
              )}
            </div>
          )}
          {ctaButtons.length > 0 && (
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              {ctaButtons.map((btn) => (
                <Link
                  key={btn.label}
                  to={btn.route}
                  className={cn(
                    "rounded-lg px-6 py-3 text-center font-medium transition-colors",
                    btn.route === "/downloads"
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border hover:bg-muted"
                  )}
                >
                  {btn.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {visualContent && (
          <div className="mx-auto w-full lg:mx-0">{visualContent}</div>
        )}
      </section>
    );
  }

  return (
    <div className={cn("py-4 md:py-8", className)}>
      <TextAnimate animation="slideLeft" by="character" as="h1" className="mb-2 text-3xl font-bold sm:text-4xl">
        {title}
      </TextAnimate>
      <TextAnimate animation="slideLeft" by="character" delay={0.2} className="text-base text-muted-foreground sm:text-lg">
        {subtitle}
      </TextAnimate>
    </div>
  );
};
