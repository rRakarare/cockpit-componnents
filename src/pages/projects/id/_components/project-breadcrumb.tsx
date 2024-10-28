import { Link } from "react-router-dom"

function ProjectBreadcrumb() {
  return (
    <div className="h-topbar border-b flex items-center px-4">
        <Link to="/projects" className="">Projekte</Link>
    </div>
  )
}

export default ProjectBreadcrumb