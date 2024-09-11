import { pages } from "@/config/links";
import Card from "./card";

function CardGrid() {
  return (
    <div className="grid grid-cols-4 gap-8">
      {pages.map((item, i) => (
        <Card key={i} title={item.text} icon={item.icon} />
      ))}
    </div>
  );
}

export default CardGrid;
