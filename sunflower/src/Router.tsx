import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
            <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
