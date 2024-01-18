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
    // Simulasikan logika autentikasi dengan menyimpan token ke local storage
    const fakeToken = "contoh_token"; // Gantilah dengan token yang diterima dari server
    localStorage.setItem("token", fakeToken);

    // Set status login menjadi true
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Hapus token dari local storage saat logout
    localStorage.removeItem("token");

    // Set status login menjadi false
    setLoggedIn(false);
  };
  return (
    <div className=" navbarWrapper container">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="collapse navbar-collapse" id="authentication">
          <ul className="navbar-nav me-auto mx-4 mb-2 mb-lg-0">
            <li className="nav-item text-dark">
              <Link className="nav-link px-2 " to="/">
                Home
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link" to="/post/add">
                Add Recipe
              </Link>
            </li>
            <li className="nav-item px-2">
              <Link className="nav-link" to="profile">
                Profile
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav mx-4 mb-2 mb-lg-0">
            {isLoggedIn ? (
              <li className="nav-item" onClick={handleLogout}>
                <Link className="nav-link" to="/">
                  Log Out <IoExitOutline />
                </Link>
              </li>
            ) : (
              <li className="nav-item" onClick={handleLogin}>
                <Link className="nav-link" to="login">
                  Log In <CiUser />
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
