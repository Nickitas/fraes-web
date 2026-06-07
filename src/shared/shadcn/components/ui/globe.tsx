/* eslint-disable */

import { useEffect, useRef, useMemo } from "react";
import createGlobe, { type COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";
import { useTheme } from "next-themes";
import { cn } from "../../lib/utils";

const MOVEMENT_DAMPING = 1400;

const WEATHER_LOCATION: [number, number] = [43.5853, 39.7203];

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 3.83,
  theta: 0.5,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [59 / 255, 130 / 255, 246 / 255],
  glowColor: [1, 1, 1],
  markers: [
    {
      location: WEATHER_LOCATION,
      size: 0.05,
    },
  ],
  scale: 1.0,
};

function projectLocation(lat: number, lng: number, phi: number, width: number) {
  const latRad = (lat * Math.PI) / 180;
  const lngRad = (lng * Math.PI) / 180;

  const x = Math.cos(latRad) * Math.sin(lngRad);
  const y = Math.sin(latRad);
  const z = Math.cos(latRad) * Math.cos(lngRad);

  const cosPhi = Math.cos(phi);
  const sinPhi = Math.sin(phi);

  const rx = x * cosPhi - z * sinPhi;
  const rz = x * sinPhi + z * cosPhi;

  const visible = rz > 0;

  const radius = width / 2;

  return {
    x: radius + rx * radius,
    y: radius - y * radius,
    visible,
  };
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const weatherRef = useRef<HTMLDivElement>(null);

  const phiRef = useRef(0);
  const widthRef = useRef(0);

  const { theme, systemTheme } = useTheme();
  const isDark = useMemo(() => {
    return theme === "dark" || (theme === "system" && systemTheme === "dark");
  }, [theme, systemTheme]);

  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  const r = useMotionValue(0);

  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;

    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;

      pointerInteractionMovement.current = delta;

      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        widthRef.current = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current!, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender: (state: any) => {
        if (!pointerInteracting.current) {
          phiRef.current += 0.005;
        }

        const phi = phiRef.current + rs.get();

        state.phi = phi;
        state.width = widthRef.current * 2;
        state.height = widthRef.current * 2;

        const projected = projectLocation(
          WEATHER_LOCATION[0],
          WEATHER_LOCATION[1],
          phi,
          widthRef.current
        );

        if (weatherRef.current) {
          weatherRef.current.style.left = `${projected.x}px`;
          weatherRef.current.style.top = `${projected.y}px`;
          weatherRef.current.style.opacity = projected.visible ? "1" : "0";
        }
      },
    } as any);

    setTimeout(() => {
      if (canvasRef.current) {
        canvasRef.current.style.opacity = "1";
      }
    }, 0);

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [config, rs]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-square w-full max-w-100",
        className
      )}
    >
      <canvas
        ref={canvasRef}
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 contain-[layout_paint_size]"
        )}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />

      <div
        ref={weatherRef}
        className="pointer-events-none absolute transition-opacity duration-300"
        style={{
          left: 0,
          top: 0,
          opacity: 0,
          transform: "translate(-50%, -120%)",
        }}
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-xl px-3 py-2 shadow-2xl ring-1 backdrop-blur-sm",
            isDark
              ? "bg-gradient-to-br from-blue-500/95 to-blue-600/95 ring-white/20"
              : "bg-white/95 ring-blue-500/30"
          )}
        >
          <div
            className={cn(
              "absolute inset-0",
              isDark
                ? "bg-gradient-to-t from-white/10 to-transparent"
                : "bg-gradient-to-t from-blue-50/50 to-transparent"
            )}
          />
          <div className="relative flex items-center gap-2">
            <div className="flex flex-col items-center">
              <div className="text-2xl drop-shadow-md">🌤️</div>
            </div>
            <div className="flex flex-col">
              <div
                className={cn(
                  "text-xl font-bold drop-shadow-md",
                  isDark ? "text-white" : "text-gray-900"
                )}
              >
                24°C
              </div>
              <div
                className={cn(
                  "text-xs font-medium",
                  isDark ? "text-white/90" : "text-gray-600"
                )}
              >
                Сочи
              </div>
            </div>
          </div>
          <div
            className={cn(
              "mt-1.5 flex items-center justify-between gap-2 border-t pt-1.5",
              isDark ? "border-white/20" : "border-gray-200"
            )}
          >
            <div
              className={cn(
                "text-[10px]",
                isDark ? "text-white/70" : "text-gray-500"
              )}
            >
              Влажность: 65%
            </div>
            <div
              className={cn(
                "text-[10px]",
                isDark ? "text-white/70" : "text-gray-500"
              )}
            >
              Ветер: 3 м/с
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
