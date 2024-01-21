import React from "react";
import Navbar from "../Navbar/Navbar";
import SignBtns from "../SignBtns/SignBtns";
import styles from "./NavAndSign.module.scss";

const NavAndSign = () => {
  return (
    <div className={styles.NavAndSign}>
      <Navbar />
      <SignBtns />
    </div>
  );
};

export default NavAndSign;
