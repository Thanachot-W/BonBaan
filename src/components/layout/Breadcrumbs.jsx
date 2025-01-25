import { Link, useLocation } from "react-router";

const Breadcrumbs = () => {
  const location = useLocation();
  let currentLink = ""

  const crumbs = decodeURIComponent(location.pathname).split('/')
    .filter(crumb => crumb !== "")
    .map(crumb => {
      currentLink += `/${crumb}`;

      return (
        <li key={crumb}>
          <Link to={currentLink}>
            {crumb}
          </Link>
        </li>
      );
    });
  
  return (
    <div className="breadcrumbs p-0">
      <ul>
        {crumbs}
      </ul>
    </div>
  );
}

export default Breadcrumbs;