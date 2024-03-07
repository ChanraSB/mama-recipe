
import style from "./MainCard.module.css";
import PropTypes from "prop-types";

const MainCard = (props) => {

  const { Title, src, className, alt, Cardtitle, Cardtext, children } = props;
  return (
    <div>
      <div style={{display : 'flex', marginBottom : 10}}>
      <div style={{backgroundColor : "#efc81a", width : 10, marginRight : 5}}></div>
      <h2>{Title}</h2>
      </div>
      
      <div className={` ${style.wrapper}`}>
        <div className="row gx-5 row-cols-sm-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-2 g-0">
          <div className={`cols-sm-12 col-md-6 col-xl-6 col-lg-6 `}>
            <div className={` ${style.imgWrapper} `}>
              <img src={src} className={className} alt={alt} style={{height : "100%"}}/>
            </div>
          </div>
          <div className={`cols-sm-12 col-md-6 col-xl-6 col-lg-6  ${style.descWrapper}`}>
            <div className={` card-body ${style.cardBody}`}>
              <h3 className={`card-title ${style.cardTitle}`}>{Cardtitle}</h3>
              <p className={`card-text ${style.cardText}`}>{Cardtext}</p>
              {children}
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
