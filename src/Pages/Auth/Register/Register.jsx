// import { Link } from "react-router-dom";
import Registration from "../../../Component/Module/Form/Registration/Registration";
import CardLogin from "../../../Component/Module/CardLogin/CardLogin";
import style from "./Register.module.css";
import recipeLogo from "../../../assets/LoginAndRegister/barbecue 1.svg";
const Register = () => {
  return (
    <div className={`row ${style.wrapper}`}>
      <div className={`col ${style.cardWrapper} `}>
        <CardLogin src={recipeLogo} name="Mama Recipe" className="text-light" />
      </div>
      <div className={`col ${style.formWrapper}`}>
        <div className={`  ${style.formContainer} container  `}>
          <h1 className={`text-center ${style.loginTitle}`}>Let’s Get Started !</h1>
          <p className={`text-center ${style.loginText}`}>Create new account to access all features</p>
          <div className={` ${style.form}`}>
            <Registration />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Register;
