import "./Login.css";
import { Link } from "react-router-dom";
import recipeLogo from "../../../assets/LoginAndRegister/barbecue 1.svg";
const Login = () => {
  return (
    <>
      {/* <div className="container"> */}
      <div className="row g-0 wrapper">
        <div className="col bg ">
          <div className="card">
            <img className="card-img-top" src={recipeLogo} alt="Logo" />
            <h1 className="text-light">Mama Recipe</h1>
          </div>
        </div>
        <div className="col">
          <div className="container  mx-4">
            <h1 className="login-title text-center">Welcome</h1>
            <p className="login-text text-center">Log in into your exiting account</p>
            <form action="">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input type="email" name="email" id="email" className="form-control" placeholder="example@gmail.com" />
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input type="password" name="Password" id="Password" className="form-control" placeholder="Insert your password" />
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
              <div className="container-fluid">
                <ul className="nav">
                  <li className="nav-item">
                    <Link to="../Register/Register.jsx">Forget Password?</Link>
                  </li>
                </ul>
              </div>

              <p className="sign-up">
                Don’t have an account?{" "}
                <Link className="sign-up-link" to="/register">
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default Login;
