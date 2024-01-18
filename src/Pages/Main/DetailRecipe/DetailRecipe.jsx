import "./DetailRecipe.css";
import Button from "../../../Component/Base/Button/Button";
import playButton from "../../../../src/assets/Card/play (1).svg";
import Textarea from "../../../Component/Base/Textarea/Textarea";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataRecipeById } from "../../../../config/action/recipeAction";
import { useParams } from "react-router-dom";
const DetailRecipe = () => {
  const { loading, recipe } = useSelector((state) => state.recipe);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(getDataRecipeById(params.id));
  }, []);
  return (
    <section key={recipe.id}>
      {loading && <h3>loading....</h3>}
      <h1 className="text-center" style={{ fontWeight: "bold", color: "#2E266F" }}>
        {recipe.title}
      </h1>
      <div className="card border-light">
        <div className="container img" style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "60%" }}>
          <img src={recipe.image} className="card-img" alt="..." style={{ width: "100%", height: "auto", margin: "auto" }} />
        </div>
        <div className="container text-start d-block">
          <div className="card-title">
            <h2>Ingredients</h2>
          </div>
          <div className="card-body">
            <p className="card-text">{recipe.ingredient}</p>
          </div>
        </div>
      </div>
      <div className="container button">
        <div className="btn-group d-inline-block">
          <h2 className="button-group-title">Video Step</h2>
          <div className="button-group-item">
            <Button style="btn1" child={<img className="img-fluid" src={playButton}></img>} />
            <br />
          </div>
        </div>
      </div>
      <div className="container">
        <Textarea placeholder="Comment :" style={{ height: "100px", background: "#F6F5F4", border: "none" }} />
      </div>

      <div className=" btnSendWrapper ">
        <Button child="Send" style="btn1" />
      </div>

      <div className="container comment">
        <h2>comment</h2>

        <div className="row">
          <div className="col-sm-1 mx-auto">
            <img src="media/detail recipe/Ellipse 128.png" alt="" />
          </div>
          <div className="col mx-auto">
            <h5>ayudia</h5>
            <p>Nice recipe. simple and delicious, thankyou</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailRecipe;
