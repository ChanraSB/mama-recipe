import Button from "../../../Base/Button/Button";
import Input from "../../../Base/Input/Input";
import { Link, useNavigate } from "react-router-dom";
import style from "./Logination.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../../../config/action/userAction";

const Logination = () => {
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "example@gmail.com",
      label: "email",
      required: true,
    },

    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Insert your password here",
      label: "Password",
      required: true,
    },
  ];
  const handleLogin = async () => {
    try {
      const user = await dispatch(login(values));
      console.log(user);
      navigate("/profile");
    } catch (error) {
      console.log(error);
      // console.log('test')
      // alert(error.data.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Input key={input.id} {...input} value={values.name} onChange={onChange} />
        ))}
        <div>
          <Button child={loading ? "loading..." : "Log in"} style="btn1" onClick={handleLogin} />
        </div>
        <div className="container-fluid text-end">
          <Link className={style.link} to="/forget_password">
            Forget password?
          </Link>
        </div>
        <p className={`text-center ${style.textLink}`}>
          Don’t have an account?{" "}
          <span>
            {" "}
            <Link className={style.signupLink} to="/register">
              Sign Up
            </Link>
          </span>{" "}
        </p>
      </form>
    </div>
  );
};

export default Logination;
