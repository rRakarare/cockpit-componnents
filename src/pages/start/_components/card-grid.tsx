import { pages } from "@/config/links";
import Card from "./card";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";

function CardGrid() {
  return (
    <AnimatedGroup
      className="grid grid-cols-2 gap-4 p-8 md:grid-cols-3 lg:grid-cols-4"
      preset="scale"
    >
      {pages.map((item, i) => (
        <Card key={i} title={item.text} icon={item.icon} href={item.href} />
      ))}
    </AnimatedGroup>
  );
}

export default CardGrid;
