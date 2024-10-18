import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  {
    name: "Add Resto",
    url: "/add-resto",
  },
  {
    name: "Login",
    url: "/user/login",
  },
  {
    name: "Sign Up",
    url: "/user/register",
  },
];

const loggedNavItems = [
  {
    name: "Dashboard",
    url: "/dashboard",
  },
  {
    name: "Profile",
    url: "/profile",
  },
  {
    name: "Logout",
    url: "/logout",
  },
];

const version = "1.0";

function NavBar() {
  const [isLogged, setIsLogged] = useState(false);
  const navItemsList = (isLogged ? loggedNavItems : navItems).map((item, key) => (
    <Link to={item.url} key={key}>
      {item.name}
    </Link>
  ));

  return (
    <header className="flex justify-center">
      <nav className="flex justify-between items-center px-2 w-[90%] border-b border-[--line] h-16 text-[--secondary] text-xl">
        <div className="flex items-end">
          <Link to="/"><img src="/Relish-logo.png" alt="" className="h-12" /></Link>
          <h1 className="rounded-full h-6 w-10 bg-[--secondary] text-[--primary] px-1 flex justify-center items-center border border-[--primary] -translate-x-0 text-sm">v {version}</h1>
        </div>
        <ul className="flex gap-20">{navItemsList}</ul>
      </nav>
    </header>
  );
}

export default NavBar;
