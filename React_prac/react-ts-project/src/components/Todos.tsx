import React, { useContext } from "react";

import TodoItem from "./TodoItem";

import { TodosContext } from "../store/todos-context";
const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul>
      {todosCtx.items.map((it) => (
        <TodoItem
          key={it.id}
          item={it}
          onDelete={todosCtx.removeTodo.bind(null, it.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
