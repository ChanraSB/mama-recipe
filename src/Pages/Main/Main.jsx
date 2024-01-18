import Footer from "../../Component/Module/Footer/Footer";
import Navbar from "../../Component/Module/Navbar/Navbar";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
