import React, { useState, useEffect } from "react";
import Todo from "../components/Todo";
import classes from "./styles.module.css";
import axios from "axios";

const Todos = () => {
  const [todolist, setTodoList] = useState([]);

  const getTodos = async () => {
    try {
      const { data } = await axios.get("http://localhost:8000/app/todos/");
      console.log({ data });
      setTodoList(data);
    } catch (err) {
      console.log({ err });
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <section className={classes.todospage}>
      <main className={classes.container}>
        <p>Your Todos</p>
        <div classeName={classes.todocardpage}>
          {todolist.map((item) => {
            return <Todo key={item.title} todo={item} />;
          })}
        </div>
      </main>
    </section>
  );
};

export default Todos;
