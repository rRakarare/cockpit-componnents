import ProjectFilter from "./_components/project-filter"
import ProjectList from "./_components/project-list"

function Page() {
  return (
    <div className="my-topbar space-y-3">
      <ProjectFilter />
      <ProjectList />
  </div>
  )
}

export default Page