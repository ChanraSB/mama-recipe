import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Main/Home/Home";
import Login from "./Pages/Auth/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
