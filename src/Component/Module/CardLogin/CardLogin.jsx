import PropTypes from "prop-types";
import style from "./cardLogin.module.css";
const CardLogin = (props) => {
  const { src, name, className } = props;
  return (
    <div className={` ${style.card}`}>
      <img className={`card-img-top ${style.img}`} src={src} alt="Logo" />
      <h1 id={style.title} className={` text-center ${className}  ${style.cardText}`}>
        {name}
      </h1>
    </div>
  );
};
CardLogin.propTypes = {
  src: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};
export default CardLogin;
