import React from "react";
import { Link } from "react-router-dom";
import classes from "../pages/styles.module.css";
const Header = () => {
  return (
    <nav className={classes.headerdiv}>
      <ul className={classes.container}>
        <Link to="/" className={classes.navlink}>
          Home
        </Link>
        <Link to="/todos" className={classes.navlink}>
          Todos
        </Link>
      </ul>
    </nav>
  );
};

export default Header;
