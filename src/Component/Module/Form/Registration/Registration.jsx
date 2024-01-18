import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../../Base/Input/Input";
import Button from "../../../Base/Button/Button";
import style from "./Registration.module.css";
import { useSelector, useDispatch } from "react-redux";
import { register } from "../../../../../config/action/userAction";

const Registration = () => {
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      errorMessage: "Name should be 3-16 ",
      label: "Name",
      required: true,
    },
    {
      id: 2,
      name: "username",
      type: "text",
      placeholder: "username",
      errorMessage: "Name should be 3-16 ",
      label: "Username",
      required: true,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      placeholder: "example@gmail.com",
      errorMessage: "It should be a valid email address!",
      label: "Email Address",
      required: true,
    },
    {
      id: 4,
      name: "phone",
      type: "tel",
      placeholder: "+628 xxx-xxxx-xxx",
      errorMessage: "It should be a valid Phone number",
      label: "Phone Number",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Create A New Password",
      errorMessage: "Password should be 8-20 characters and include at least 1 letter and 1 number",
      label: "Create A New Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,20}$`,
      required: true,
    },
    {
      id: 6,
      name: "confPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{8,20}$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleRegister = async () => {
    try {
      const user = await dispatch(register(values));
      console.log("data user =", user);
      navigate("/login");
    } catch (data) {
      console.log(data);

      // alert(error.data.message);
    }
  };

  return (
    <div className="register">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <Input key={input.id} {...input} value={values[input.name]} onChange={onChange} />
        ))}

        <Button style="btn1" onClick={handleRegister} child={loading ? "loading..." : "Register"} />
        <p className={`text-center ${style.textLink}`}>
          Already have account?{" "}
          <span>
            {" "}
            <Link className={style.signupLink} to="/login">
              Log in Here
            </Link>
          </span>{" "}
        </p>
      </form>
    </div>
  );
};

export default Registration;
