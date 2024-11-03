import SiloFilter from "./_components/silo-filter"
import SiloList from "./_components/silo-list"

function Page() {
  return (
    <div className="my-topbar space-y-3">
      <SiloFilter />
      <SiloList />
  </div>
  )
}

export default Page