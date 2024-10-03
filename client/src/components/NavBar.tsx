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
    url: "/admin",
  },
];

function NavBar() {
  const navItemsList = navItems.map((item, key) => (
    <Link to={item.url} key={key}>
      {item.name}
    </Link>
  ));

  return (
    <header className="flex justify-center">
      <nav className="flex justify-between items-center px-2 w-[90%] border-b border-[--secondary] h-16 text-[--secondary] text-xl">
        <div>
          <Link to="/">Logo</Link>
        </div>

        <ul className="flex gap-20 ">{navItemsList}</ul>
      </nav>
    </header>
  );
}

export default NavBar;