import { createStore } from "redux";
import rootReducer from "./Reducer";

const store = createStore(rootReducer);

export default store;

// redux-toolkit
// import { configureStore } from "@reduxjs/toolkit";
// import flitersSlice from "../components/Filters/filtersReducer";
// import todosSlice from "../components/TodoList/todolistReducer";

// const store = configureStore({
//   reducer: {
//     filters: flitersSlice.reducer,
//     todoList: todosSlice.reducer,
//   },
// });
// export default store;
