import Cardlist from "../../Module/Cardlist/Cardlist";
import MainCard from "../../Module/MainCard/MainCard";
import mainimage1 from "../../../assets/Home/Rectangle 320.svg";
import mainimage2 from "../../../assets/Home/Rectangle 321.svg";
import "./Content.css";
const Content = () => {
  const Maincard = [
    {
      title: "Healthy Bone Broth Ramen (Quick & Easy)",
      text: "Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!",
    },
    {
      title: "Healthy Bone Broth Ramen (Quick & Easy)",
      text: "Quick + Easy Chicken Bone Broth Ramen- Healthy chicken ramen in a hurry? That’s right!",
    },
  ];
  const title = Maincard.map((obj) => {
    return obj.title;
  });
  const text = Maincard.map((obj) => {
    return obj.text;
  });
  return (
    <div>
      <main>
        <div id="mainCard" className="container">
          <MainCard src={mainimage1} className="img-fluid" Title="Popular For You!" Cardtitle={`${title[0]}`} Cardtext={`${text[0]}`} alt={`${title[0]}-image`} />
        </div>
        <div id="mainCard2" className="container">
          <MainCard src={mainimage2} className="img-fluid" Title="New Recipe" Cardtitle={`${title[1]}`} Cardtext={`${text[1]}`} alt={`${title[1]}-image`} />
        </div>

        <div id="populerRecipe">
          <div className="container">
            <div className="subHeadLine">
              <h2>Populer Resipe</h2>
            </div>
          </div>
          <div className="container">
            <Cardlist />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Content;
