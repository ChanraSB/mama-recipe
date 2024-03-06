import { Link } from "react-router-dom";
import "./Navbar.css";
import { useState, useEffect } from "react";
import { CiUser } from "react-icons/ci";
import { IoExitOutline } from "react-icons/io5";
const Navbar = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);
  const handleLogin = () => {
    const fakeToken = "contoh_token";
    localStorage.setItem("token", fakeToken);
    setLoggedIn(true);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-light ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-5 mb-2 mb-lg-0 ">
            <li className="nav-item">
              <Link className="nav-link " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/post/add">
                Add Recipe
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link className="nav-link" to="profile">
                Profile
              </Link>
            </li>
            {isLoggedIn ? (
              <li className="nav-item me-2" onClick={handleLogout}>
                <Link className="nav-link" to="/">
                  Log Out <IoExitOutline />
                </Link>
              </li>
            ) : (
              <li className="nav-item me-2" onClick={handleLogin}>
                <Link className="nav-link" to="login">
                  Log In <CiUser />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
