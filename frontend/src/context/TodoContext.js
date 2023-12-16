import { createContext, useReducer } from "react";

export const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return { todolist: action.payload };
    case "ADD":
      return { todolist: [action.payload, ...state.todolist] };

    case "REMOVE":
      return { todoList: null };
    default:
      return state;
  }
};

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, {
    todolist: [
      {
        todo_title: "Mern",
        todo_description: "to learn   mern",
        todo_date: "23/12/32",
      },
      {
        todo_title: "Mern",
        todo_description: "to learn mern",
        todo_date: "23/12/32",
      },
      {
        todo_title: "Mern",
        todo_description: "to learn mern",
        todo_date: "23/12/32",
      },
      {
        todo_title: "Mern",
        todo_description: "to learn mern",
        todo_date: "23/12/32",
      },
    ],
  });

  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
