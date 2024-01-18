import style from "./Card.module.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = (props) => {
  const { src, alt, title, to, children, ...Props } = props;

  return (
    <div className="col" style={{ position: "relative" }}>
      <Link to={to}>
        <div className={`card ${style.cardWrapper}`}>
          <img className={`card-img  ${style.img}`} src={src} alt={alt} {...Props} />
          <div className={` card-img-overlay ${style.cardBody}`}>
            <h2 className={style.title}>{title}</h2>
          </div>
        </div>
      </Link>
      {children}
    </div>
  );
};
Card.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  overlay: PropTypes.string,
  center: PropTypes.string,
  children: PropTypes.element,
};
export default Card;
