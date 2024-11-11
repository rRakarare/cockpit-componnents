import SiloItem from "./silo-item";
import { useSimulatedData } from "@/types/example-data/simulateDBCall";
import {  DataSiloSimpleType } from "@/types/db/dataSilo";
import { dataSiloDetailsDummyData } from "@/types/example-data/datasilo";
import { LoadingDataIcon } from "@/components-v2/custom/unsorted/loader";

function SiloList() {

  const silos = dataSiloDetailsDummyData as DataSiloSimpleType[];

  const { data, isLoading } = useSimulatedData(silos, { delay: 400 });

  if (isLoading) {
    return <LoadingDataIcon className="mx-auto" />;
  }

  return (
    <div className="container grid grid-cols-3 gap-4">
      {data?.map((project, i) => (
        <SiloItem key={i} {...project} />
      ))}
    </div>
  );
}

export default SiloList;
