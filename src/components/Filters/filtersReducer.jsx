import React from "react";

const initState = {
  search: "",
  status: "All",
};

const filtersReducer = (state = initState, action) => {
  switch (action.type) {
    case "filters/searchText":
      return {
        ...state,
        search: action.payload,
      };
    case "filters/statusFilter":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

export default filtersReducer;
