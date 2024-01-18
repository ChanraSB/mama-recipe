import api from "./api";

export const register = (data) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_REQUEST" });
    const response = await api.post("/register", data);
    const user = response.data.data;
    dispatch({ type: "REGISTER_SUCCESS", payload: user });
    return user;
  } catch (error) {
    dispatch({ type: "REGISTER_FAILURE", payload: error.response.data.message });
    throw error.response;
  }
};
export const login = (data) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_REQUEST" });
    const response = await api.post("/login", data);
    const user = response.data;
    console.log(user);

    localStorage.setItem("token", user.token);
    localStorage.setItem("refresh-token", user.refreshToken);
    dispatch({ type: "LOGIN_SUCCESS", payload: user });
    return user;
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE", payload: error });
    throw error.response;
  }
};
export const myProfile = (data) => async (dispatch) => {
  try {
    dispatch({ type: "ACCESS_MY_PROFILE_REGUEST" });
    const response = await api.get("users/profile", data);
    const user = response.data.data;
    console.log(user);
    dispatch({ type: "ACCESS_MY_PROFILE_SUCCESS", payload: user });
    return user;
  } catch (error) {
    dispatch({ type: "ACCESS_MY_PROFILE_FAILURE", payload: error });
  }
};
export const getAllDataUser = (data) => async (dispatch) => {
  try {
    dispatch({ type: "GET_ALL_USERS_REQUEST" });
    const response = await api.get("/users", data);
    const user = response.data.data;
    dispatch({ type: "GET_ALL_USERS_SUCCESS", payload: user });
    return user;
  } catch (error) {
    dispatch({ type: "GET_ALL_USERS_FAILURE", payload: error.response.data.message });
    throw error.response;
  }
};

export const getDataUserById = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_USER_REQUEST" });
    const response = await api.get(`/users/${localStorage.getItem("id")}`);
    const user = response.data.data;

    dispatch({ type: "GET_USER_SUCCESS", payload: user });
  } catch (error) {
    dispatch({ type: "GET_USER_FAILURE", payload: error.response.data.message });
  }
};

export const updateAllDataUser = (id, data) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_USER_REQUEST" });
    const response = await api.put("http://localhost:3000/users/" + id, data);
    const user = response.data.data;
    dispatch({ type: "UPDATE_USER_SUCCESS", payload: user });
    return user;
  } catch (error) {
    dispatch({ type: "UPDATE_USER_FAILURE", payload: error.response.data.message });
    throw error.response;
  }
};
export const updateUserimage = (data) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_USER_IMAGE_REQUEST" });
    const response = await api.patch(`/users/profile/picture`, data);
    const user = response.data.data;
    console.log(user);
    dispatch({ type: "UPDATE_USER_IMAGE_SUCCESS", payload: user });
    return user;
  } catch (error) {
    dispatch({ type: "UPDATE_USER_IMAGE_FAILURE", payload: error.response.data.message });
    throw error.response;
  }
};
export const deleteUser = (id, data) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_USER_REQUEST" });
    const response = await api.delete("http://localhost:3000/users/" + id, data);
    const user = response.data.data;
    dispatch({ type: "DELETE_USER_SUCCESS", payload: user });
    return user;
  } catch (error) {
    dispatch({ type: "DELETE_USER_FAILURE", payload: error.response.data.message });
    throw error.response;
  }
};
