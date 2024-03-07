import heroImg from "../../../assets/Home/Rectangle 313.svg";
import Content from "../../../Component/Layout/Content/Content";
import Footer from "../../../Component/Module/Footer/Footer";
import Navbar from "../../../Component/Module/Navbar/Navbar";
import {  useNavigate } from "react-router-dom"; 
import styles from "./Home.module.css";
import { useState } from "react"; 

const Home = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
   
    navigate(`/list-recipe?search=${searchValue}`);
  };

  return (
    <> 
    <div className={styles.background}>
    </div>
      <Navbar />
      <div className="container">
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 mt-4">
          <div
            className="col-sm-12 col-md-6 col-lg-6 col-xl-6"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            <div className="" style={{ width: "75%", height: "auto" }}>
              <h1
                style={{
                  fontSize: 40,
                  fontWeight: 500,
                  color: "#2E266F",
                }}
              >
                Discover Recipe & Delicious Food
              </h1>
              <form className="d-flex" role="search" style={{ height: 50, width: "100%" }} onSubmit={handleSearch}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="search restaurant, food"
          aria-label="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className="btn"
          type="submit"
          style={{
            backgroundColor: "#EFC81A",
            color: "#fff",
          }}
        >
          Search
        </button>
      </form>
            </div>
          </div>
          <div
            className={` ${styles.imgWrapper}  col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-4`}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className=" container  my-auto"
              style={{ width: "80%", heigth: "80%", boxSizing: "border-box" }}
            >
              <img
                className={styles.img}
                src={heroImg}
                style={{ width: "100%", heigth: "100%" }}
                alt="hero"
              />
            </div>
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
