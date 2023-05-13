import { createBrowserRouter } from "react-router-dom";
import KakaoLogin from "./pages/KakaoLogin";
import Home from "./pages/Home";
import Main from "./pages/Main";
import MainBoard from "./components/boardComponents/MainBoard";
import MainProfile from "./components/profileComponents/MainProfile";

const Router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/kakaoLogin", element: <KakaoLogin /> },
  {
    path: "/main",
    element: <Main />,
    children: [
      { path: "", element: <MainBoard /> },
      { path: "profile", element: <MainProfile /> },
    ],
  },
]);

export default Router;
