import { dummySilos } from "@/config-v2/datasilo/example-data/data";
import { DataSiloType } from "@/config-v2/datasilo/types/datasilo-types";
import { useParams } from "react-router-dom";
import SiloBreadcrumbDetail from "./_components/silo-breadcrumb-detail";
import SiloHeader from "./_components/silo-header";
import SiloDetails from "./_components/silo-details";

function Page() {

  const { id } = useParams<{ id: string }>();

  const {display_name, description, icon, color, chats, groups, system_message} = dummySilos.find((p) => p.id === Number(id)) as DataSiloType

  return (
    <div>
      <SiloBreadcrumbDetail name={display_name} />
    <SiloHeader display_name={display_name} description={description} icon={icon} color={color} />
    <SiloDetails chats={chats} groups={groups} system_message={system_message}  />
    </div>
  );
}

export default Page;



