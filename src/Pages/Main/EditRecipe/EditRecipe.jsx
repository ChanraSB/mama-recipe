// EditRecipeForm.js
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import {
  updateAllDataRecipe,
  getDataRecipeById,
} from "../../../../config/action/recipeAction";
import Input from "../../../Component/Base/Input/Input";
import Button from "../../../Component/Base/Button/Button";
import Textarea from "../../../Component/Base/Textarea/Textarea";
import style from "./EditRecipe.module.css";
import { MdDriveFolderUpload } from "react-icons/md";
const EditRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [image, setImage] = useState("https://fakeimg.pl/1300x300/");
  const [saveImage, setSaveImage] = useState("");
  const { recipe, loading } = useSelector((state) => state.recipe);

  const [values, setValues] = useState({
    image: "",
    title: "",
    ingredient: "",
    video_link: "",
    users_id: parseInt(`${localStorage.getItem("id")}`),
  });

  useEffect(() => {
    dispatch(getDataRecipeById(id));
  }, [dispatch, id]);

  useEffect(() => {
    setValues({
      image: recipe?.image || "",
      title: recipe?.title || "",
      ingredient: recipe?.ingredient || "",
      video_link: recipe?.video_link || "",
      users_id: parseInt(`${localStorage.getItem("id")}`),
    });
    setImage(recipe?.image || "https://fakeimg.pl/1300x300/");
  }, [recipe]);

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleUploadChange = (e) => {
    let uploaded = e.target.files[0];
    setImage(URL.createObjectURL(uploaded));
    setSaveImage(uploaded);
  };

  const handleEdit = async (e) => {
    try {
      e.preventDefault();
      const form = new FormData();
      form.append("title", values.title);
      form.append("ingredient", values.ingredient);
      form.append("image", saveImage);
      form.append("video_link", values.video_link);
      form.append("users_id", values.users_id);
      await dispatch(updateAllDataRecipe(id, form));
      navigate("/profile");
    } catch (error) {
      console.error("Error editing recipe:", error);
    }
  };

  return (
    <div>
      <div className={`container mt-5 ${style.formWrapper}`}>
          <form
            className={style.imgWrapper}
            onClick={() => document.querySelector(".image").click()}>
            {image ? <img src={image} style={{ width: "100%", height: "100%" }} /> : <MdDriveFolderUpload />}
          <Input className="image" name="image" type="file" placeholder="upload an Image" required={true} onChange={handleUploadChange} hidden />
           
          </form>
        

       
        <Input
          name="title"
          type="text"
          placeholder="title"
          required={true}
          onChange={onChange}
          value={values.title}
          style={{ background: "#F6F5F4", border: "none" }}
        />
        <Textarea
          name="ingredient"
          onChange={onChange}
          placeholder="Ingredients"
          required={true}
          value={values.ingredient}
          style={{ background: "#F6F5F4", border: "none" }}
        />
        <Input
          name="video_link"
          type="text"
          placeholder="Link Video"
          required={true}
          onChange={onChange}
          value={values.video_link}
          style={{ background: "#F6F5F4", border: "none" }}
        />

        <Button
          style="btn2"
          child={loading ? "loading..." : "Save Changes"}
          onClick={handleEdit}
        />
      </div>
    </div>
  );
};

export default EditRecipe;
