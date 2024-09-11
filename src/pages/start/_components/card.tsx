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
      className="cursor-pointer flex flex-col  bg-background p-4 whitespace-nowrap"
      gradientColor={"#f0f0f0"}
    >
      <div className="flex flex-col  justify-between w-full h-32">
        <p>{title}</p>
        <div className="self-end">{icon}</div>
      </div>
    </MagicCard>
  );
}

export default Card;
