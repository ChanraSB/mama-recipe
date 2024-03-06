import "./DetailRecipe.css";
import Button from "../../../Component/Base/Button/Button";
import playButton from "../../../../src/assets/Card/play (1).svg";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getDataRecipeById,
  likeCheckRecipe,
  likeRecipe,
  unLikeRecipe,
} from "../../../../config/action/recipeAction";
import { useParams } from "react-router-dom";
import { BiLike } from "react-icons/bi";

const DetailRecipe = () => {
  const { loading, recipe, likedRecipe } = useSelector((state) => state.recipe);
  const dispatch = useDispatch();
  const params = useParams();
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);
  
  useEffect(() => {
    dispatch(getDataRecipeById(params.id));
    dispatch(likeCheckRecipe(params.id));
  }, [params.id]);

  const likesRecipe = () => {
    if (!likedRecipe) {
      dispatch(likeRecipe(params.id));
    } else {
      dispatch(unLikeRecipe(params.id));
    }
  };

  return (
    <section key={recipe.id}>
      {loading && <h3>loading....</h3>}
      <h1
        className="text-center mt-3 mb-2"
        style={{ fontWeight: "bold", color: "#2E266F" }}
      >
        {recipe.title}
      </h1>
      <div className="card border-light">
        <div className="row mb-5">
          {isLoggedIn && (
            <div
              className="col-6 mx-auto  img bg-info"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: "auto",
                height: "45vh",
              }}
            >
              <img
                src={recipe.image}
                className="card-img"
                alt="..."
                style={{ width: "100%", height: "100%", margin: "auto" }}
              />
              
              <BiLike
                onClick={likesRecipe}
                style={{
                  position: "absolute",
                  color: likedRecipe ? "#fff" : "#EFC81A",
                  width: 50,
                  height: 50,
                  border: likedRecipe ? "2px solid #fff" : "2px solid #EFC81A",
                  borderRadius: 5,
                  padding: 10,
                  backgroundColor: likedRecipe ? "#EFC81A" : "#fff",
                  left: "80%",
                  top: "70%",
                }}
              />{" "}
            </div>
          )}
        </div>

        <div className="container text-start d-block mb-4">
          <h2 className="card-title mb-2" style={{ color: "#3F3A3A" }}>
            Ingredients
          </h2>
          <p className="card-text">{recipe.ingredient}</p>
        </div>
      </div>
      <div
        className="container  button "
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "start",
        }}
      >
        <h2 className="card-title mb-2" style={{ color: "#3F3A3A" }}>Video Step</h2>
        <Button
          style="btn2 ms-0"
          child={<img className="img-fluid" src={playButton}></img>}
        />
        <br />
      </div>
    </section>
  );
};

export default DetailRecipe;