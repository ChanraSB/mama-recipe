import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdEdit } from "react-icons/md";
import { MdDriveFolderUpload } from "react-icons/md";
import Input from "../../Base/Input/Input";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import style from "./UpdateProfilPicture.module.css";
import { updateUserimage } from "../../../../config/action/userAction";

const UpdateProfilPicture = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.user);
  const [image, setImage] = useState(null);
  const [saveImage, setSaveImage] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUploadChange = (e) => {
    let uploaded = e.target.files[0];
    setImage(URL.createObjectURL(uploaded));
    setSaveImage(uploaded);
  };
  const handlePost = async (e) => {
    try {
      e.preventDefault();
      const form = new FormData();
      form.append("image", saveImage);
      const user = await dispatch(updateUserimage(form));
      console.log(user);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button onClick={handleShow} className={style.button} style={{ background: "none", border: "none" }}>
        <MdEdit className={style.mdEdit} />
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>update Your Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loading && <h3>loading....</h3>}
          <div className={`container ${style.formWrapper}`}>
            <form className={style.imgWrapper} onClick={() => document.querySelector(".image").click()}>
              {image ? <img src={image} style={{ width: "100%", height: "100%" }} /> : <MdDriveFolderUpload />}
              <Input className="image" name="image" type="file" placeholder="upload an Image" required={true} onChange={handleUploadChange} hidden />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            delete
          </Button>
          <Button variant="warning" onClick={handlePost}>
            {loading ? "loading..." : "Save"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UpdateProfilPicture;
