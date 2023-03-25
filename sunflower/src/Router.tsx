import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import KakaoLogin from "./pages/KakaoLogin";

const Router = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/KakaoLogin" element={<KakaoLogin />} />
            <Route path="/main" element={<Main />} />
            <Route path='/profile/:userId' element={<Profile />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Router;
