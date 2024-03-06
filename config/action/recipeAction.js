import api from "./api";
export const getAllList =
  ({ page, pageSize, filter, sort, sortOrder, search }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: "GET_ALL_LIST_REQUEST",
      });
      const response = await api.get("/recipes", {
        params: {
          page,
          pageSize,
          filter,
          sort,
          sortOrder,
          ...(search ? { search: search } : {}),
        },
      });
      const { data } = response.data;
      dispatch({
        type: "GET_ALL_LIST_SUCCESS",
        payload: {
          recipeList: data.recipe,
          totalPages: data.totalPages,
        },
      });
    } catch (error) {
      dispatch({
        type: "GET_ALL_LIST_FAILURE",
        payload: error.response,
      });
    }
  };
export const getMyRecipe = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_MY_RECIPE_REQUEST" });
    const response = await api.get(`/users/profile/recipes`);
    const recipe = response.data.data;
    console.log(recipe);
    dispatch({
      type: "GET_MY_RECIPE_SUCCESS",
      payload: recipe,
    });
  } catch (error) {
    dispatch({
      type: "GET_MY_RECIPE_FAILURE",
      payload: error,
    });
  }
};
export const getDataRecipeById = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DETAIL_RECIPE_BY_ID_REQUEST",
    });
    const response = await api.get(`recipes/${id}`);
    const recipe = response.data.data;
    console.log("recipe ", recipe);
    dispatch({
      type: "GET_RECIPE_BY_ID",
      payload: recipe,
    });
  } catch (error) {
    console.log(error);
  }
};
export const updateAllDataRecipe = (id, data) => async (dispatch) => {
  try {
    dispatch({
      type: "UPDATE_ALL_DATA_RECIPE_REQUEST",
    });
    const response = await api.put(`recipes/${id}`, data);
    const recipe = response.data.data;
    dispatch({
      type: "UPDATE_ALL_DATA_RECIPE_SUCCESS",
      payload: recipe,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createRecipe = (data) => async (dispatch) => {
  try {
    dispatch({ type: "CREATE_RECIPE_REQUEST" });
    const response = await api.post("/recipes", data);
    const recipe = response.data.data;
    dispatch({ type: "CREATE_RECIPE_SUCCESS", payload: recipe });
    return recipe;
  } catch (error) {
    dispatch({ type: "CREATE_RECIPE_FAILURE", payload: error });
    throw error.response;
  }
};

export const updateDataRecipe = (id, data) => async (dispatch) => {
  try {
    dispatch({ type: "UPDATE_RECIPE_REQUEST" });
    const response = await api.patch("/recipes/" + id, data);
    const user = response.data.data;
    dispatch({ type: "UPDATE_RECIPE_SUCCESS", payload: user });
    return user;
  } catch (error) {
    dispatch({ type: "UPDATE_RECIPE_FAILURE", payload: error.response.data.message });
    throw error.response;
  }
};
export const deleteRecipe = (id, data) => async (dispatch) => {
  try {
    dispatch({ type: "DELETE_RECIPE_REQUEST" });
    const response = await api.delete("/recipes/" + id, data);
    const user = response.data.data;
    dispatch({ type: "DELETE_RECIPE_SUCCESS", payload: user });
    return user;
  } catch (error) {
    dispatch({ type: "DELETE_RECIPE_FAILURE", payload: error.response.data.message });
    throw error.response;
  }
};
export const popularRecipe = (data) => async (dispatch) => {
try {
  dispatch({
    type : "GET_POPULAR_RECIPE_REQUEST"
  })
  const response = await api.get("/recipes/popular", data)
  const recipe = response.data.data
  dispatch({ type : "GET_POPULAR_RECIPE_SUCCESS", payload : recipe})
  return recipe
} catch (error) {
  dispatch({ type : "GET_POPULAR_RECIPE_FAILURE", payload : error.response.data.message})
  throw error.response
}
}
export const newRecipe = (data) => async (dispatch) => {
try {
  dispatch({
    type : "GET_NEW_RECIPE_REQUEST"
  })
  const response = await api.get("/recipes/new", data)
  const recipe = response.data.data
  dispatch({ type : "GET_NEW_RECIPE_SUCCESS", payload : recipe})
  return recipe
} catch (error) {
  dispatch({ type : "GET_NEW_RECIPE_FAILURE", payload : error.response.data.message})
  throw error.response
}
}

export const likeRecipe = (id, data) => async (dispatch) => {
    dispatch({
      type : "LIKE_RECIPE_REQUEST"
    })
    const response = await api.put(`/recipes/${id}/like`, data)
    const recipe = response.data.recipe 
    console.log (response.data)
    dispatch({type : "LIKE_RECIPE_SUCCESS", payload : recipe})
    return recipe
  
}
export const unLikeRecipe = (id, data) => async (dispatch) => {
    dispatch({
      type : "UNLIKE_RECIPE_REQUEST"
    })
    const response = await api.put(`/recipes/${id}/unlike`, data)
    const recipe = response.data.recipe 
    dispatch({type : "UNLIKE_RECIPE_SUCCESS", payload : recipe})
    return recipe
  } 
export const likeCheckRecipe = (id) => async (dispatch) => {
    dispatch({
      type : "LIKE_CHECK_RECIPE_REQUEST"
    })
    const response = await api.get(`/recipes/${id}/like`)
    const recipe = response.data.data 
    dispatch({type : "LIKE_CHECK_RECIPE_SUCCESS", payload : recipe})
    return recipe
  } 

