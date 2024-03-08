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
import Modal from "react-bootstrap/Modal"

const DetailRecipe = () => {
  const {  recipe, likedRecipe } = useSelector((state) => state.recipe);
  const dispatch = useDispatch();
  const params = useParams();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [show, setShow] = useState(false);

 
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
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <section key={recipe.id}>
      {/* {loading && <h3>loading....</h3>} */}
      <h1
        className="text-center mt-3 mb-2"
        style={{ fontWeight: "bold", color: "#2E266F" }}
      >
        {recipe.title}
      </h1>
      <div className="card border-light">
        <div className="row mb-5">
           
            <div
              className=" shadow col-6 mx-auto  img"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                width: 500,
                height: 400,
              }}
            >
              <img
                src={recipe.image}
                className="card-img"
                alt="..."
                style={{ width: "100%", height: "100%", margin: "auto", objectFit : "cover" }}
              />
              {isLoggedIn ? (<BiLike
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
              />) : (<></>)}
              
            </div>
        
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
          onClick={handleShow}
        />
        <Modal show={show} onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
          <Modal.Title>Detail Video</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="ratio ratio-16x9">
                <iframe
                  className="video embed-responsive-item"
                  src={recipe.video_link?.replace("youtu.be", "youtube.com/embed") || recipe.video_link?.replace("youtube.com", "youtube.com/embed")}
                  allowFullScreen
                  style={{ width: "100%", height: "100%" }}
                ></iframe>
              </div>
        </Modal.Body>
        
      </Modal>
        <br />
      </div>
    </section>
  );
};

export default DetailRecipe;