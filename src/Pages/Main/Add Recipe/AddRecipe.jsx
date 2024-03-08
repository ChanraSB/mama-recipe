// import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { MdDriveFolderUpload } from "react-icons/md";
import { createRecipe } from "../../../../config/action/recipeAction";
import Input from "../../../Component/Base/Input/Input";
import Button from "../../../Component/Base/Button/Button";
import Textarea from "../../../Component/Base/Textarea/Textarea";
import styles from "./AddRecipe.module.css";
const AddRecipe = () => {
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.recipe);
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [saveImage, setSaveImage] = useState("");
  const [values, setValues] = useState({
    image: "",
    title: "",
    ingredient: "",
    video_link: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleUploadChange = (e) => {
    let uploaded = e.target.files[0];
    setImage(URL.createObjectURL(uploaded));
    setSaveImage(uploaded);
  };
  const handlePost = async (e) => {
    try {
      e.preventDefault();
      const form = new FormData();
      form.append("title", values.title);
      form.append("ingredient", values.ingredient);
      form.append("image", saveImage);
      form.append("video_link", values.video_link);
      form.append("users_id", values.users_id);
      const recipe = await dispatch(createRecipe(form));
      console.log("data recipes =", recipe);
      navigate("/profile");
    } catch (error) {
      console.log(error);

      // alert(error.data.message);
    }
  };

  return (
    <div>
      <div className={`container mt-5 ${styles.formWrapper}` }>
        <form className={styles.imgWrapper} onClick={() => document.querySelector(".image").click()}>
          {image ? <img src={image} style={{ width: "100%", height: "100%" }} /> : <MdDriveFolderUpload />}
          <Input className="image" name="image" type="file" placeholder="upload an Image" required={true} onChange={handleUploadChange} hidden />
        </form>

        <Input name="title" type="text" placeholder="title" required={true} onChange={onChange} value={values.title} style={{ background: "#F6F5F4", border: "none" }} />
        <Textarea name="ingredient" onChange={onChange} placeholder="Ingredients" required={true} value={values.ingredient} style={{ background: "#F6F5F4", border: "none" }} />
        <Input name="video_link" type="text" placeholder="Link Youtube Video" required={true} onChange={onChange} value={values.video_link} style={{ background: "#F6F5F4", border: "none" }} />

        <Button style="btn2" child={loading ? "loading..." : "Post"} onClick={handlePost} />
      </div>
    </div>
  );
};

export default AddRecipe;
