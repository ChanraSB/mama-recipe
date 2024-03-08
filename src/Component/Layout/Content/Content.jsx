import MainCard from "../../Module/MainCard/MainCard";
import "./Content.css";
import {
  popularRecipe,
  newRecipe,
} from "../../../../config/action/recipeAction";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../Base/Card/Card";
import Button from "../../Base/Button/Button";
import { Link } from "react-router-dom";
const Content = () => {
  const dispatch = useDispatch();
  
  const { popularRecipeList, newRecipeList } = useSelector(
    (state) => state.recipe
  );
  useEffect(() => {
    dispatch(popularRecipe());
  }, [dispatch]);
  useEffect(() => {
    dispatch(newRecipe());
  }, [dispatch]);

  return (
    <div classname="mainCardWrapper">
      <div id="mainCard1" className="container">
        {popularRecipeList && popularRecipeList[0] && (
          <MainCard
            src={popularRecipeList[0].image}
            className="card-img"
            Title="Popular Recipe For You!"
            Cardtitle={popularRecipeList[0].title}
            Cardtext="Popular Recipe just for you"
            alt={`${popularRecipeList[0].title}-image`}
          >
            <Link  to={`/detail+recipe/${popularRecipeList[0].id}`}>
            <Button
              child="Learn More"
            />
            </Link>
          </MainCard>
        )}
      </div>
      <div id="mainCard2" className="container ">
        {newRecipeList && newRecipeList[0] && (
          <MainCard
            src={newRecipeList[0].image}
            className="card-img"
            Title="New Recipe"
            Cardtitle={newRecipeList[0].title}
            Cardtext="New Recipe just for you"
            alt={`${newRecipeList[0].title}-image`}
          >
            {" "}
            <Link to={`/detail+recipe/${newRecipeList[0].id}`}>
              <Button child="Learn More"/>{" "}
            </Link>
          </MainCard>
        )}
      </div>

      <div id="populerRecipe">
        <div className="container">
          <div className="subHeadLine" style={{ display: "flex" }}>
            <div
              style={{ backgroundColor: "#efc81a", width: 10, marginRight: 5 }}
            ></div>
            <h2>Populer Recipe</h2>
          </div>
        </div>
        <div className="container">
          <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3">
            {popularRecipeList.slice(0, 6).map((item) => (
              <Card
                key={item.id}
                to={`/detail+recipe/${item.id}`}
                src={item.image}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
