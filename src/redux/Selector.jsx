import { createSelector } from "@reduxjs/toolkit";

// export const todoListSelector = (state) => {
//     const todoRemaining = state.todoList.filter(todo => {
//         return todo.name.toLowerCase().includes(state.filters.name.toLowerCase())
//     })
//     return todoRemaining
// };

export const todoListSelecotr = (state) => state.todoList;
export const searchSelector = (state) => state.filters.search;

export const todosRemaining = createSelector(
  todoListSelecotr,
  searchSelector,
  (todoList, searchText) => {
    return todoList.filter((todo) => {
      return todo.name.toLowerCase().includes(searchText.toLowerCase());
    });
  }
);
