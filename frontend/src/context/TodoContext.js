import { createContext, useReducer } from "react";
 

export const TodoContext = createContext();

const todoReducer = (state, action) => {
  switch (action.type) {
    case "SET":
      return { todolist: action.payload };
    case "ADD":
      return { todolist: [action.payload, ...state.todolist] };
    case "UPDATE_STATUS":
      return {todolist:[...state.todolist.map((item)=>{ return (item._id===action.payload._id ?{...item,todo_status:true}:item)})]}
    case "REMOVE":
      return { todoList: null };
    case "DELETE":
      
      return {todolist:state.todolist.filter(item=> item._id!==action.payload._id)};
    default:
      return state;
  }
};

export const TodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, {
    todolist:null
  });


  
   
  return (
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
