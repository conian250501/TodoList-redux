import React, { useState, useEffect } from "react";
import { IoMdRemoveCircleOutline } from "react-icons/io";
import "./todo.scss";
import { useDispatch } from "react-redux";
import { removeTodo, statusTodo } from "../../redux/Action";

const Todo = ({ name, priority, id }) => {
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const handleChecked = () => {
    setChecked(!checked);
    dispatch(statusTodo(id));
  };

  return (
    <div
      className="todo"
      style={{
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <input
        type="checkbox"
        className="todo__checkbox"
        onClick={handleChecked}
      />
      <h2 className="todo__name">{name}</h2>
      <div className="todo__priority">{priority}</div>
      <IoMdRemoveCircleOutline
        onClick={() => dispatch(removeTodo(id))}
        className="todo__remove"
        style={{ fontSize: "32px", marginLeft: "12px", color: "#fff" }}
      />
    </div>
  );
};

export default Todo;
