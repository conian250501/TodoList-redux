import { combineReducers } from "redux";
import filtersReduder from "../components/Filters/filtersReducer";
import todoListReducer from "../components/TodoList/todolistReducer";

const rootReducer = combineReducers({
  filters: filtersReduder,
  todoList: todoListReducer,
});

export default rootReducer;
