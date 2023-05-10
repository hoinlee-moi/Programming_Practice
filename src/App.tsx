import React from "react";
import { CookiesProvider } from "react-cookie";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Router from "./Router";

function App() {
  return (
    <CookiesProvider>
      <RouterProvider router={Router} />
    </CookiesProvider>
  );
}

export default App;
