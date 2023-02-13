import React from "react";
import Todo from "../models/todo";

const TodoItem: React.FC<{ item: Todo; onDelete: () => void }> = ({
  item,
  onDelete,
}) => {
  return <li onClick={onDelete}>{item.text}</li>;
};

export default TodoItem;
