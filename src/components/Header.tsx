import { Link } from "react-router-dom";

interface NavbarProps {
  title: string;
  links: { name: string; url: string }[];
}

const Navbar = ({ title, links }: NavbarProps): JSX.Element => {
  return (
    <nav className="navbar">
      <h2>{title}</h2>
      <ul className="nav-items">
        {links.map((link) => (
          <li key={link.url}>
            <Link to={link.url}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
