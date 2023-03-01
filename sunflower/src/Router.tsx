import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import Login from "./pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
