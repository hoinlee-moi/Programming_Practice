import React from "react";

import Todo from "../models/todo";

const Todos: React.FC<{ items: Todo[] }> = ({ items }) => {
  return (
    <ul>
      {items.map((it) => (
        <li key={it.id}>{it.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
