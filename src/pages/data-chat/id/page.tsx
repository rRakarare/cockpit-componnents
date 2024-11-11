import { useParams } from "react-router-dom";
import SiloBreadcrumbDetail from "./_components/silo-breadcrumb-detail";
import SiloHeader from "./_components/silo-header";
import SiloDetails from "./_components/silo-details";
import { dataSiloDetailsDummyData } from "@/types/example-data/datasilo";
import { DataSiloDetailType } from "@/types/db/dataSilo";
import { useSimulatedData } from "@/types/example-data/simulateDBCall";
import { LoadingDataIcon } from "@/components-v2/custom/unsorted/loader";

function Page() {
  const { id } = useParams<{ id: string }>();

  const silo = dataSiloDetailsDummyData.find(
    (p) => p.data_silo_uuid === id
  ) as DataSiloDetailType;

  const { data, isLoading } = useSimulatedData(silo, { delay: 400 });

  return (
    <div>
      <SiloBreadcrumbDetail name={data?.display_name} />
      <SiloHeader
        isLoading={isLoading}
        display_name={data?.display_name}
        description={data?.description}
        icon={data?.icon}
        color={data?.color}
      />

      {isLoading || !data ? (
        <LoadingDataIcon className="mx-auto size-8" />
      ) : (
        <SiloDetails
          chats={data?.chats}
          groups={data?.groups}
          system_message={data?.system_message}
        />
      )}
    </div>
  );
}

export default Page;
