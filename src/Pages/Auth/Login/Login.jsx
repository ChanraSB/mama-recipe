import style from "./Login.module.css";
import CardLogin from "../../../Component/Module/CardLogin/CardLogin";
import Logination from "../../../Component/Module/Form/Login/Logination";
import recipeLogo from "../../../assets/LoginAndRegister/barbecue 1.svg";
const Login = () => {
  return (
    <div className={`row  ${style.wrapper}`}>
      <div className={`col ${style.cardWrapper} `}>
        <CardLogin src={recipeLogo} name="Mama Recipe" className="text-light" />
      </div>
      <div className={`col ${style.formWrapper}`}>
        <div className={` container  ${style.formContainer} `}>
          <h1 className={`text-center ${style.loginTitle}`}>Welcome</h1>
          <p className={`text-center ${style.loginText}`}>Log in into your exiting account</p>
          <div className={` ${style.form}`}>
            <Logination />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
