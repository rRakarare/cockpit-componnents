import ProjectBreadcrumb from "./_components/project-breadcrumb";
import ProjectFilter from "./_components/project-filter";
import ProjectList from "./_components/project-list";

function Page() {
  return (
    <div>
      <div>
        <ProjectBreadcrumb />
      </div>
      <div className="space-y-3 mt-3">
        <ProjectFilter />
        <ProjectList />
      </div>
    </div>
  );
}

export default Page;
