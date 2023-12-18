// TodoItem.jsx
import React from "react";

export default function TodoItem(props) {
  const style = props.completed ? { textDecoration: "line-through" } : {};

  return (
    <li>
      <span onClick={() => props.onClick(props.id)} style={style}>
        {props.content}
      </span>
      <button onClick={() => props.onComplete(props.id)}>Complete</button>
    </li>
  );
}