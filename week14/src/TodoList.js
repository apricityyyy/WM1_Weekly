// TodoList.jsx
import React, { useState, useContext, useReducer } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";
import { ThemeContext } from "./App";

const TODO_ACTIONS = {
  ADD_TODO: "ADD_TODO",
  REMOVE_TODO: "REMOVE_TODO",
  STRIKE_TODO: "STRIKE_TODO",
};

function reducer(todoItems, action) {
  switch (action.type) {
    case TODO_ACTIONS.ADD_TODO:
      return [{ content: action.payload, completed: false }, ...todoItems];
    case TODO_ACTIONS.REMOVE_TODO:
      return todoItems.filter((_, idx) => idx !== action.payload);
    case TODO_ACTIONS.STRIKE_TODO:
      return todoItems.map((item, idx) => {
        if (idx === action.payload) {
          return { ...item, completed: !item.completed };
        }
        return item;
      });
    default:
      return todoItems;
  }
}

export default function TodoList() {
  const theme = useContext(ThemeContext);
  const [item, setItem] = useState("");
  const [items, dispatch] = useReducer(reducer, []);

  const handleClick = (event) => {
    event.preventDefault();
    if (item.trim() !== "") {
      dispatch({ type: TODO_ACTIONS.ADD_TODO, payload: item.trim() });
      setItem("");
    }
  };

  const removeTodoItem = (id) => {
    dispatch({ type: TODO_ACTIONS.REMOVE_TODO, payload: id });
  };

  const strikeTodoItem = (id) => {
    dispatch({ type: TODO_ACTIONS.STRIKE_TODO, payload: id });
  };

  const handleChange = (event) => {
    setItem(event.target.value.toUpperCase());
  };

  return (
    <div className={"theme-" + theme}>
      <div className="todo-form">
        <form onSubmit={handleClick}>
          <input
            onChange={handleChange}
            type="text"
            name="todo-input"
            id="todo-input"
            value={item}
          />
          <input type="submit" value="ADD" />
        </form>
      </div>
      <div className="todo-items">
        <ul>
          {items.map((item, idx) => (
            <TodoItem
              key={idx}
              id={idx}
              content={item.content}
              completed={item.completed}
              onComplete={removeTodoItem}
              onClick={strikeTodoItem}
              theme={theme}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}