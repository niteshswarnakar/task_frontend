import React from "react";
import classes from "../pages/styles.module.css";
const Todo = ({ todo }) => {
  return (
    <div className={classes.todocard}>
      <h4>{todo.title}</h4>
      <h5>{todo.body}</h5>
      <span>{todo.timestamp}</span>
    </div>
  );
};

export default Todo;
