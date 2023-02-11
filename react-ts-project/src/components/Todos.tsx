import React from "react";

const Todos: React.FC<{ items: string[] }> = ({ items }) => {
  return (
    <ul>
      {items.map((it) => (
        <li key={it}>{it}</li>
      ))}
    </ul>
  );
};

export default Todos;
