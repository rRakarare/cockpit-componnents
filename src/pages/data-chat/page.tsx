import SiloFilter from "./_components/silo-filter";
import SiloList from "./_components/silo-list";
import SiloBreadCrumb from "./_components/silo-breadcrumb";

function Page() {
  return (
    <div>
      <SiloBreadCrumb />
      <div className="space-y-3 mt-3">
        <SiloFilter />
        <SiloList />
      </div>
    </div>
  );
}

export default Page;
