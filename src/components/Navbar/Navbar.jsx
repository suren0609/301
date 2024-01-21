import React from "react";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Media</a>
        </li>
        <li>
          <a href="#">Calendar</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <button className={styles.lang}>ENG</button>
    </nav>
  );
};

export default Navbar;
