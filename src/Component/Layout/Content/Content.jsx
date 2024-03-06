import Cardlist from "../../Module/Cardlist/Cardlist";
import MainCard from "../../Module/MainCard/MainCard";
import mainimage1 from "../../../assets/Home/Rectangle 320.svg";
import mainimage2 from "../../../assets/Home/Rectangle 321.svg";
import "./Content.css";
import { popularRecipe, newRecipe } from "../../../../config/action/recipeAction";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
const Content = () => {
  const dispatch = useDispatch();
  const { popularRecipeList, newRecipeList } = useSelector((state) => state.recipe);
  useEffect(() => {
    dispatch(popularRecipe());
  }, [dispatch]);
  useEffect(() => {
    dispatch(newRecipe());
  }, [dispatch]);
  
  return (
    <div>
      <main>
        <div id="mainCard" className="container">
        {popularRecipeList && popularRecipeList[0] &&(
            <MainCard
              src={popularRecipeList[0].image}
              className="img-fluid"
              Title="Popular Recipe For You!"
              Cardtitle={popularRecipeList[0].title}
              Cardtext="Popular Recipe just for you"
              alt={`${popularRecipeList[0].title}-image`}
            />
          )}
        </div>
        <div id="mainCard2" className="container">
         
          {newRecipeList && newRecipeList[0] &&(
            <MainCard
              src={newRecipeList[0].image}
              className="img-fluid"
              Title="New Recipe"
              Cardtitle={newRecipeList[0].title}
              Cardtext="New Recipe just for you"
              alt={`${newRecipeList[0].title}-image`}
            />
          )}
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
