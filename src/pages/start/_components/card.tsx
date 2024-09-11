import { MagicCard } from "@/components/magicui/magic-card";
import { ReactElement } from "react";

function Card({
  title,
  icon,
}: {
  title: string;
  icon: ReactElement | undefined;
}) {
  return (
    <MagicCard
      className="cursor-pointer flex flex-col border-none bg-accent p-4 whitespace-nowrap group hover:scale-105 transition-all"
      gradientColor={"#E4E4E4"}
    >
      <div className="flex flex-col  justify-between w-full h-32">
        <p className="text-lg group-hover:animate-pulse font-semibold">{title}</p>
        <div className="self-end group-hover:animate-pulse">{icon}</div>
      </div>
    </MagicCard>
  );
}

export default Card;
