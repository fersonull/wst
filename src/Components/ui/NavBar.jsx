import { Link, useLocation } from "react-router-dom";
import ScrollUp from "./ScrollUp";

const links = [
  { label: "Overview", path: "/wst/" },
  { label: "Topics", path: "/wst/topics" },
  { label: "About us", path: "/wst/about" },
];

const NavBar = () => {
  const loc = useLocation();

  const isActive = (url) => {
    return url === loc.pathname;
  };

  return (
    <div className="flex items-center justify-center py-3 sticky top-0 z-[999]">
      <ScrollUp />

      <nav className="flex items-center rounded-xl border border-white/20 bg-transparent backdrop-blur p-1 text-sm font-medium ">
        {links.map(({ label, path }) => (
          <Link
            key={label}
            to={path}
            className={`rounded-md px-4 py-1  ${
              isActive(path) ? "bg-white/20" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default NavBar;
