import { Link, useMatches } from "react-router";

const Breadcrumbs = () => {
  const matches = useMatches();

  const crumbs = matches.reduce((result, match) => {
    if (match.handle) {
      result.push({
        path: match.pathname,
        name: match.handle.crumb()
      });
    }
    return result;
  }, []);

  return (
    <div className="breadcrumbs flex items-center p-0">
      <ul>
        {crumbs.map((crumb) => (
          <li key={crumb.path}>
            <Link to={crumb.path}>{crumb.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
