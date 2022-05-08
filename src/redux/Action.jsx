export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const statusTodo = (todoId) => {
  return {
    type: "todoList/statusTodo",
    payload: todoId,
  };
};

export const searchText = (text) => {
  return {
    type: "filters/searchText",
    payload: text,
  };
};

export const removeTodo = (data) => {
  return {
    type: "todoList/removeTodo",
    payload: data,
  };
};
