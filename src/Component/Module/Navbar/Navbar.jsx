import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item text-dark">
            <Link className="nav-link" to="home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="addrecipe">
              Add Recipe
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="Profile">
              Profile
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
