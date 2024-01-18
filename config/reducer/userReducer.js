const initialState = {
  user: {},
  myRecipe: {},
  myRecipeList: [],
  loading: false,
  error: "",
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "REGISTER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "ACCESS_MY_PROFILE_REGUEST":
      return {
        ...state,
        loading: true,
      };
    case "ACCESS_MY_PROFILE_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "ACCESS_MY_PROFILE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "GET_USER_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "GET_USER_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "UPDATE_USER_IMAGE_REQUEST":
      return {
        ...state,
        loading: action.payload,
      };
    case "UPDATE_USER_IMAGE_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "UPDATE_USER_IMAGE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
