import React, { useState } from "react";
import Todo from "../models/todo";

type TodosContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodsContextProvider:React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((currentTodos) => currentTodos.concat(newTodo));
  };

  const deleteHandler = (todoId: string) => {
    setTodos((prevTodos) => prevTodos.filter((it) => it.id !== todoId));
  };
  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: deleteHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodsContextProvider