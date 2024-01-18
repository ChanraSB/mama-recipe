import PropTypes from "prop-types";
import style from "./Input.module.css";
const Input = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  return (
    <div className="formInput">
      <label htmlFor={id} className={`${style.label} form-label`}>
        {label}
      </label>
      <input id={id} className={`form-control ${style.input}`} {...inputProps} onChange={onChange} />
      <span className={style.span}>{errorMessage}</span>
    </div>
  );
};
Input.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.number,
};
export default Input;
