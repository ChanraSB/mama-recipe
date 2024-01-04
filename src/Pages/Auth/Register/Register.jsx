// import { Link } from "react-router-dom";
import recipeLogo from "../../../assets/LoginAndRegister/barbecue 1.svg";
import "./Register.css";
const Register = () => {
  return (
    <div className="row register-wrapper">
      <div className="col bg">
        <img src={recipeLogo} alt="" />
      </div>
      <div className="col">
        <div className="container">
          <h1 className="login-title text-center">Let’s Get Started !</h1>
          <p className="login-text text-center">Create new account to access all features</p>
          <form action="">
            <label htmlFor="name" className="form-label">
              name
            </label>
            <input type="text" name="name" id="name" className="form-control" placeholder="name" />
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input type="email" name="email" id="email" className="form-control" placeholder="input your email" />
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input type="text" name="phoneNumber" id="phoneNumber" className="form-control" placeholder="+628xxxxxxxxx" />
            <label htmlFor="createNewPass" className="form-label">
              Create New Password
            </label>
            <input type="password" name="createNewPass" id="createNewPass" className="form-control" placeholder="Enter new password" />
            <label htmlFor="confirmPass" className="form-label">
              New Password
            </label>
            <input type="password" name="confirmPass" id="confirmPass" className="form-control" placeholder="New password" />
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {" "}
                I agree to terms & conditions
              </label>
            </div>
            <button type="button" className="btn btn-warning">
              <span className="text-light">Log in</span>
            </button>

            <p className="sign-up">
              Already have account?
              <a className="sign-up-link" href="login.html">
                {" "}
                Log in Here
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
