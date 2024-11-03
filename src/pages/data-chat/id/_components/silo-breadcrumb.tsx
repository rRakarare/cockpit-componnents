import { Link } from "react-router-dom"

function SiloBreadcrumb() {
  return (
    <div className="h-topbar border-b flex items-center px-4">
        <Link to="/data-chat" className="">Silos</Link>
    </div>
  )
}

export default SiloBreadcrumb