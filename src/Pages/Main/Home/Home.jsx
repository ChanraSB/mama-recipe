// import { Link } from "react-router-dom";

import heroImg from "../../../assets/Home/Rectangle 313.svg";
import Content from "../../../Component/Layout/Content/Content";
import Footer from "../../../Component/Module/Footer/Footer";
import Navbar from "../../../Component/Module/Navbar/Navbar";

import "./Home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container" id="hero">
        <div className="bg"></div>
        <div className="container-1"></div>
        <div className=" row container-2">
          <div className="col container ">
            <div className="headline">
              <h1>Discover Recipe & Delicious Food</h1>
            </div>
            <div className="search">
              <input type="search" placeholder="Search Restaurant, Food" /> <img src="media/icon/search.png" alt="" />
            </div>
          </div>
          <div className="col container image">
            <img src={heroImg} alt="nasi kuning" />
          </div>
        </div>
      </div>

      <Content />
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
