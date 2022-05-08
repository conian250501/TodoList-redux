import React, { useState, useRef, useEffect } from "react";
import { BsCardList } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";

import "./todolist.scss";
import Todo from "../Todo";
import { addTodo } from "../../redux/Action";
import { todosRemaining } from "../../redux/Selector";
import Loading from "../Loading";

const TodoList = () => {
  const inputRef = useRef();
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("High");

  const dispatch = useDispatch();
  const selector = useSelector(todosRemaining);

  const handleInput = (e) => {
    setName(e.target.value);
  };
  const handleAddTodo = () => {
    dispatch(
      addTodo({
        id: uuidv4(),
        name: name,
        completed: false,
        priority: priority,
      })
    );
    setName("");
    inputRef.current.focus();
  };
  const hanleSelect = (e) => {
    setPriority(e.target.value);
  };

  // Add data to LocalStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(selector));
  }, [selector]);

  return (
    <div className="todolist">
      <div className="row">
        {selector.length ? (
          <div className="todolist__col">
            {selector.map((todo, index) => (
              <Todo
                key={todo.id}
                name={todo.name}
                priority={todo.priority}
                id={index}
              />
            ))}
          </div>
        ) : (
          <Loading />
        )}

        <label id="heading">
          Todo List
          <BsCardList style={{ marginLeft: "8px" }} />
        </label>
        <div className="todolist__add">
          <input
            ref={inputRef}
            value={name}
            type="text"
            placeholder="add your todo"
            className="todolist__input"
            onChange={handleInput}
          />
          <select
            value={priority}
            name="proirity"
            className="todolist__proirity"
            onChange={hanleSelect}
            style={{
              paddingRight: "10px",
            }}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <button className="todolist__btn" onClick={handleAddTodo}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
