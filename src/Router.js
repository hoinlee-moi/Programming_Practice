import { createBrowserRouter } from "react-router-dom";
import KakaoLogin from "./pages/KakaoLogin";
import Home from "./pages/Home";

const Router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/kakaoLogin", element: <KakaoLogin /> },
]);

export default Router;
