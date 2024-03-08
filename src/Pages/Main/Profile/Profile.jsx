import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { myProfile } from "../../../../config/action/userAction";
import { deleteRecipe, getMyRecipe, getMyLikeList } from "../../../../config/action/recipeAction";
import { useNavigate } from "react-router-dom";
import ProfilePicture from "../../../Component/Base/profilePicture/profilePicture";
import Card from "../../../Component/Base/Card/Card";
import { FaUser } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "./Profile.css";
import Button from "../../../Component/Base/Button/Button";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
const MySwal = withReactContent(Swal);

const Profile = () => {
  const { loading, user } = useSelector((state) => state.user);
  const { recipeList, myLikeList } = useSelector((state) => state.recipe);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(myProfile());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getMyRecipe())
    dispatch(getMyLikeList());
  }, [dispatch]);

  const handleDelete = (id) => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You will not be able to recover this recipe!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteRecipe(id));
        MySwal.fire("Deleted!", "Your recipe has been deleted.", "success");
        dispatch(getMyRecipe());
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        MySwal.fire("Cancelled", "Your recipe is safe :)", "error");
      }
    });
  };

  return (
    <div>
      <div className="profilCardWrapper">
        {loading && <h3>loading....</h3>}
        <ProfilePicture name={user.name}>
          {user.image ? <img src={user.image} style={{ borderRadius: "50%", width: "100%", height: "100%", objectFit : "cover" }} alt="user-profile" /> : <FaUser style={{ width: "100%", height: "100%", borderRadius: "50%", color: "#c0c0c0" }} />}
        </ProfilePicture>
      </div>
      <div className="container">
      <Tabs
      defaultActiveKey="myRecipe"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="myRecipe" title="My Recipe">
      <div className="container myRecipeCardWrapper">
        <div className="row row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-col-xxl-3 align-items-center">
          {recipeList.map((item) => (
            <Card key={item.id} to={`/detail+recipe/${item.id}`} src={item.image} title={item.title}>
              <TiDelete
                className="mdDelete"
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                {" "}
              </TiDelete>

              <Button
                style="btn3"
                child={"Edit"}
                onClick={() => {
                  navigate(`/edit+recipe/${item.id}`);
                }}
              />
            </Card>
          ))}
        </div>
        <div className="container" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}></div>
      </div>
      </Tab>
      <Tab eventKey="likedRecipe" title="Liked Recipe">
      <div className="container myRecipeCardWrapper">
        <div className="row row-cols-xs-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 row-col-xxl-3 align-items-center">
          {myLikeList.map((item) => (
            <Card key={item.id} to={`/detail+recipe/${item.id}`} src={item.image} title={item.title}>
            </Card>
          ))}
        </div>
        <div className="container" style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}></div>
      </div>
      </Tab>
    </Tabs>
      </div>
      
      
    </div>
  );
};

export default Profile;
