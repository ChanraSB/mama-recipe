import "./Button.css";
import PropTypes from "prop-types";
const Button = (props) => {
  const { onClick, style, child } = props;
  return (
    <button onClick={onClick} type="button" className={`btn btn-warning mx-auto ${style} `}>
      <span className="text-light">{child}</span>
    </button>
  );
};
Button.propTypes = {
  style: PropTypes.string,
  child: PropTypes.string,
  onClick: PropTypes.func,
};
export default Button;
