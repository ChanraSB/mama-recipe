const initialState = {
  recipe: {},
  recipeList: [],
  popularRecipeList : [],
  newRecipeList : [],
  myLikeList : [],
  loading: false,
  error: "",
  totalPages: 1,
  likedRecipe : []
};
const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ALL_LIST_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ALL_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        recipeList: action.payload.recipeList,
        totalPages: action.payload.totalPages,
      };
    case "GET_ALL_LIST_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_MY_RECIPE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_MY_RECIPE_SUCCESS":
      return {
        ...state,
        loading: false,
        recipeList: action.payload,
      };
    case "GET_MY_RECIPE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case "GET_RECIPE_BY_ID":
      return {
        ...state,
        recipe: action.payload,
      };

    case "CREATE_RECIPE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "CREATE_RECIPE_SUCCESS":
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case "CREATE_RECIPE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "UPDATE_ALL_DATA_RECIPE":
      const updatedRecipeList = state.recipeList.map((recipe) =>
        recipe.id === action.payload.id ? action.payload : recipe
      );
      return {
        ...state,
        recipeList: updatedRecipeList,
      };
    case "GET_POPULAR_RECIPE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_POPULAR_RECIPE_SUCCESS":
      return {
        ...state,
        loading: false,
        popularRecipeList: action.payload,
      };
    case "GET_POPULAR_RECIPE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case "GET_NEW_RECIPE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_NEW_RECIPE_SUCCESS":
      return {
        ...state,
        loading: false,
        newRecipeList: action.payload,
      };
    case "GET_NEW_RECIPE_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      case "LIKE_RECIPE_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "LIKE_RECIPE_SUCCESS":
        return {
          ...state,
          loading: false,
          likedRecipe: action.payload,
        };
      case "LIKE_RECIPE_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case "UNLIKE_RECIPE_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "UNLIKE_RECIPE_SUCCESS":
        return {
          ...state,
          loading: false,
          likedRecipe: null
        };
      case "UNLIKE_RECIPE_FAILURE":
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      case "LIKE_CHECK_RECIPE_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "LIKE_CHECK_RECIPE_SUCCESS":
        return {
          ...state,
          loading: false,
          likedRecipe : action.payload
        };
      case "GET_MY_LIKE_LIST_REQUEST":
        return {
          ...state,
          loading: true,
        };
      case "GET_MY_LIKE_LIST_SUCCESS":
        return {
          ...state,
          loading: false,
          myLikeList : action.payload
        };
     

    default:
      return state;
  }
};

export default recipeReducer;
