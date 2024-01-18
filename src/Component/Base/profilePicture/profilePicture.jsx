import PropTypes from "prop-types";
import style from "./ProfilePicture.module.css";
import UpdateProfilPicture from "../../Module/Modal/UpdateProfilPicture";

// import { useState } from "react";
// import UserModal from "../../Module/Modal/UpdateUser/UpdateUser";
const ProfilePicture = (props) => {
  const { children, name, className } = props;
  // const [isModalOpen, setModalOpen] = useState(false);
  // const openModal = () => setModalOpen(true);
  // const closeModal = () => setModalOpen(false);
  // const handleUpdateUser = () => {
  //   closeModal();
  // };
  return (
    <div className={` ${style.card}`}>
      <div className={` ${style.imgWrapper}`}>
        {children}
        <UpdateProfilPicture />
      </div>

      <h3 id={style.title} className={` text-center ${className}  ${style.cardText}`}>
        {name}

        {/* {isModalOpen && <UserModal onSave={handleUpdateUser} />} */}
      </h3>
    </div>
  );
};
ProfilePicture.propTypes = {
  children: PropTypes.element,
  name: PropTypes.string,
  className: PropTypes.string,
};
export default ProfilePicture;
