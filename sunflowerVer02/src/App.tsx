import React from "react";
import { CookiesProvider } from "react-cookie";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

import "./App.css";
import Router from "./Router";

function App() {
  return (
    <CookiesProvider>
      <RecoilRoot>
        <RouterProvider router={Router} />
      </RecoilRoot>
    </CookiesProvider>
  );
}

export default App;
