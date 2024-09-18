import { MagicCard } from "@/components-v2/magicui/magic-card";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

function Card({
  title,
  icon,
  href,
}: {
  title: string;
  icon: ReactElement | undefined;
  href: string;
}) {
  return (
    <Link to={href}>
      <MagicCard
        className="cursor-pointer flex flex-col border-none bg-accent p-4 whitespace-nowrap group hover:scale-105 transition-all"
        gradientColor={"#E4E4E4"}
      >
        <div className="flex flex-col  justify-between w-full h-32">
          <p className="text-lg group-hover:animate-pulse font-semibold">
            {title}
          </p>
          <div className="self-end group-hover:animate-pulse">{icon}</div>
        </div>
      </MagicCard>
    </Link>
  );
}

export default Card;
