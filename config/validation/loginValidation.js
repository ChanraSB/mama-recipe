const loginValidation = (values) => {
  const errors = {};

  if (!values.email || values.email === "") {
    errors.email = "Please input correct email";
  }

  if (!values.password || values.password === "") {
    errors.password = "Password should be 8-20 characters and include at least 1 letter and 1 number ";
  }

  return errors;
};

export default loginValidation;
