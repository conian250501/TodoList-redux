import React from "react";
const initState = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos"))
  : [];

const todolistReducer = (state = initState, action) => {
  switch (action.type) {
    case "todoList/addTodo":
      const newTodo = [...state];
      newTodo.push(action.payload);
      return newTodo;
    case "todoList/statusTodo":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case "todoList/removeTodo":
      const newTodoList = [...state];
      newTodoList.splice(action.payload, 1);
      return newTodoList;
    default:
      return state;
  }
};

export default todolistReducer;
