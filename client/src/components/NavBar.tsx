import { Link } from "react-router-dom";

const navItems = [
  {
    name: "Add Resto",
    url: "/add-resto",
  },
  {
    name: "Login",
    url: "/user",
  },
  {
    name: "Sign Up",
    url: "/user/register",
  },
];

const version = "1.0";

function NavBar() {
  const navItemsList = navItems.map((item, key) => (
    <Link to={item.url} key={key}>
      {item.name}
    </Link>
  ));

  return (
    <header className="flex justify-center">
      <nav className="flex justify-between items-center px-2 w-[90%] border-b border-[--line] h-16 text-[--secondary] text-xl">
        <div className="flex items-end ">
          <Link to="/"><img src="/Relish-logo.png" alt="" className="h-12"/></Link>
          <h1 className="rounded-full bg-[--secondary] text-[--primary] px-2 border border-[--primary] -translate-x-4 text-md">v {version}</h1>
        </div>

        <ul className="flex gap-20 ">{navItemsList}</ul>
      </nav>
    </header>
  );
}

export default NavBar;
