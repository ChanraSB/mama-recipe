const registerValidation = (values) => {
  const errors = {};

  if (!values.name || values.name === "") {
    errors.name = "Please input your name";
  }

  if (!values.email || values.email === "") {
    errors.email = "Please input correct email";
  }

  if (!values.phoneNumber || values.phoneNumber === "") {
    errors.phoneNumber = "Please input your phone number";
  }

  if (!values.password || values.password === "") {
    errors.password = "Password should be 8-20 characters and include at least 1 letter and 1 number ";
  }
  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Your pasword and confirm password doesn't match";
  }

  return errors;
};

export default registerValidation;
