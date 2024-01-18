import PropTypes from "prop-types";
import style from "./Textarea.module.css";
const Textarea = (props) => {
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  return (
    <div className="formInput">
      <label htmlFor={id} className={`${style.label} form-label`}>
        {label}
      </label>
      <textarea id={id} className={`form-control ${style.input}`} {...inputProps} onChange={onChange}></textarea>
      <span className={style.span}>{errorMessage}</span>
    </div>
  );
};
Textarea.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.number,
};
export default Textarea;
