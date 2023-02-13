import React from "react";

import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodsContextProvider from "./store/todos-context";

function App() {
  return (
    <TodsContextProvider>
      <NewTodo />
      <Todos />
    </TodsContextProvider>
  );
}

export default App;
