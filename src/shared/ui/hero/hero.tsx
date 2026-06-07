import { Link } from "react-router";
import { cn } from "@/shared/shadcn/lib/utils";
import { TextAnimate } from "@/shared/shadcn/ui/text-animate";
import { MorphingText } from "@/shared/shadcn/ui/morphing-text";
import { InteractiveHoverButton } from "@/shared/shadcn/ui/interactive-hover-button";
import { RippleButton } from "@/shared/shadcn/ui/ripple-button";

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
  morphingTexts?: readonly string[];
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
  morphingTexts,
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
          {morphingTexts ? (
            <MorphingText texts={[...morphingTexts]} />
          ) : (
            <p className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-4xl">
              {subtitle}
            </p>
          )}
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
                <span className="rounded-md bg-muted px-2 py-1">{version}</span>
              )}
            </div>
          )}
          {ctaButtons.length > 0 && (
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              {ctaButtons.map((btn, index) => (
                <div key={btn.label}>
                  {index === 0 ? (
                    <Link to={btn.route}>
                      <InteractiveHoverButton>
                        {btn.label}
                      </InteractiveHoverButton>
                    </Link>
                  ) : (
                    <Link to={btn.route}>
                      <RippleButton className="w-full">
                        {btn.label}
                      </RippleButton>
                    </Link>
                  )}
                </div>
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
      <TextAnimate
        animation="slideLeft"
        by="character"
        as="h1"
        className="mb-2 text-3xl font-bold sm:text-4xl"
      >
        {title}
      </TextAnimate>
      <TextAnimate
        animation="slideLeft"
        by="character"
        delay={0.2}
        className="text-base text-muted-foreground sm:text-lg"
      >
        {subtitle}
      </TextAnimate>
    </div>
  );
};
