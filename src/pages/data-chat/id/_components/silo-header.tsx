import { DataSiloType } from "@/config-v2/datasilo/types/datasilo-types";
import { getIcon } from "@/config-v2/icons/icon-map";

function SiloHeader({
  display_name,
  description,
  icon,
  color
}: Pick<DataSiloType, "display_name" | "icon" | "color" | "description">) {

  return (
    <div className="flex px-6 items-center space-x-3 border-b mb-8 py-4">
      <div className="p-3 rounded-lg" style={{background:color}}>{getIcon({iconName:icon})}</div>
      <div>
        <p className="font-semibold mb-1 text-2xl">{display_name}</p>
        <p className="text-muted-foreground text-md">{description}</p>
      </div>
    </div>
  );
}

export default SiloHeader;
