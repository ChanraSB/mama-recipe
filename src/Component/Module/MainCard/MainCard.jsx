import Button from "../../Base/Button/Button";
import style from "./MainCard.module.css";
import PropTypes from "prop-types";
const MainCard = (props) => {
  const { Title, src, className, alt, Cardtitle, Cardtext } = props;
  return (
    <div>
      <h2>{Title}</h2>
      <div className={` ${style.wrapper}`}>
        <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 g-0">
          <div className={`col-6 `}>
            <div className={` ${style.imgWrapper} `}>
              <img src={src} className={className} alt={alt} />
            </div>
          </div>
          <div className={`col-6 ${style.descWrapper}`}>
            <div className={` card-body ${style.cardBody}`}>
              <h5 className={`card-title ${style.cardTitle}`}>{Cardtitle}</h5>
              <p className={`card-text ${style.cardText}`}>{Cardtext}</p>
              <Button child="Learn More"></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
MainCard.propTypes = {
  Title: PropTypes.string,
  src: PropTypes.string,
  className: PropTypes.string,
  alt: PropTypes.string,
  Cardtitle: PropTypes.string,
  Cardtext: PropTypes.string,
};
export default MainCard;
