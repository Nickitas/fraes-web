import { Meteors } from "@/shared/shadcn/ui/meteors";

export const MeteorsBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Meteors number={10} />
    </div>
  );
};
