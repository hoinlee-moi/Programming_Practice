import { createBrowserRouter } from "react-router-dom";
import KakaoLogin from "./pages/KakaoLogin";
import Home from "./pages/Home";
import Main from "./pages/Main";

const Router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/kakaoLogin", element: <KakaoLogin /> },
  { path: "/main", element: <Main /> },
]);

export default Router;
