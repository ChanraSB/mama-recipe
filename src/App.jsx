import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "./Component/Module/PrivateRoute/PrivateRoute";
import Home from "./Pages/Main/Home/Home";
import Main from "./Pages/Main/Main";
import Login from "./Pages/Auth/Login/Login";
import Register from "./Pages/Auth/Register/Register";
import Profile from "./Pages/Main/Profile/Profile";
import DetailRecipe from "./Pages/Main/DetailRecipe/DetailRecipe";
import AddRecipe from "./Pages/Main/Add Recipe/AddRecipe";
import EditRecipe from "./Pages/Main/EditRecipe/EditRecipe";
import ListRecipe from "./Pages/Main/ListResipe/ListRecipe";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Main />}>
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  {" "}
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/edit+recipe/:id"
              element={
                <PrivateRoute>
                  <EditRecipe />{" "}
                </PrivateRoute>
              }
            />
            <Route path="/detail+recipe/:id" element={<DetailRecipe />} />
            <Route path="/list-recipe" element={<ListRecipe />} />
            <Route
              path="/post/add"
              element={
                <PrivateRoute>
                  <AddRecipe />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
