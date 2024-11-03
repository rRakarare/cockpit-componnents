import { dummySilos } from "@/config-v2/datasilo/example-data/data";
import SiloItem from "./silo-item";

function SiloList() {
  const projects = dummySilos;

  return (
    <div className="container grid grid-cols-3 gap-4">
      {projects.map((project, i) => (
        <SiloItem key={i} {...project} />
      ))}
    </div>
  );
}

export default SiloList;
