// import { Link } from "react-router-dom";
import Navbar from "../../../Component/Module/Navbar/Navbar";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <section>
        <div id="hero">
          <div className="bg"></div>
          <div className="container-1">
            <Navbar />
            <div className="container icon">
              <img src="media/icon/User icon.png" alt="User" />
              <button>login</button>
            </div>
          </div>
          <div className="container-2">
            <div className="container">
              <div className="headline">
                <h1>Discover Recipe & Delicious Food</h1>
              </div>
              <div className="search">
                <input type="search" placeholder="Search Restaurant, Food" /> <img src="media/icon/search.png" alt="" />
              </div>
            </div>
            <div className="container image">
              <img src="media/hero.png" alt="nasi kuning" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div id="foodItem">
          <div className="bg"></div>
          <div className="container-1">
            <div className="box"></div>
            <div className="subHeadLine">
              <h2>Popular for you!</h2>
            </div>
          </div>
          <div className="container-2">
            <div className="container image">
              <img src="media/img-1.png" alt="image1" />
            </div>
            <div className="item">
              <div className="headline">Healthy Bone Broth Ramen (Quick & Easy)</div>
              <div className="line">Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</div>
              <button href="detailRecipe.html">Learn More</button>
            </div>
          </div>
        </div>
        <div id="newResipe">
          <div className="bg"></div>
          <div className="container-1">
            <div className="box"></div>
            <div className="subHeadLine">
              <h2>New Resipe</h2>
            </div>
          </div>
          <div className="container-2">
            <div className="container image">
              <img src="media/img-2.png" alt="image1" />
            </div>
            <div className="item">
              <div className="headline">Healthy Bone Broth Ramen (Quick & Easy)</div>
              <div className="line">Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!</div>
              <button>Learn More</button>
            </div>
          </div>
          <div className="container-3">
            <div className="container-1">
              <div className="box"></div>
              <div className="subHeadLine">
                <h2>Populer Resipe</h2>
              </div>
            </div>
          </div>
          <div className="container-4">
            <div className="gallery-1">
              <img src="media/gallery-1.png" alt="" />
              <h6>Chiken Kare</h6>
            </div>
            <div className="gallery-2">
              <img src="media/gallery-2.png" alt="" />
              <h6>Bomb Chicken</h6>
            </div>
            <div className="gallery-3">
              <img src="media/gallery-3.png" alt="" />
              <h6>Banana Smothie Pop</h6>
            </div>
            <div className="gallery-4">
              <img src="media/gallery-4.png" alt="" />
              <h6>Coffe Lava Cake</h6>
            </div>
            <div className="gallery-5">
              <img src="media/gallery-5.png" alt="" />
              <h6>Sugar Salmon</h6>
            </div>
            <div className="gallery-6">
              <img src="media/gallery-6.png" alt="" />
              <h6>Indian Salad</h6>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div id="footer">
          <h3>Eat, Cook, Repeat</h3>
          <p>Share your best recipe by uploading here !</p>
          <div className="nav">
            <a href="#">Product </a>
            <a href="#">Company</a>
            <a href="#">Learn more </a>
            <a href="#">Get in touch</a>
          </div>
          <p className="copyright">&copy; Arkademy</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
