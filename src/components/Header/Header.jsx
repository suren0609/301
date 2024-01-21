import React, { useState } from "react";
import Logo from "../Logo";
import MobileHeader from "../MobileHeader/MobileHeader";
import NavAndSign from "../NavAndSign/NavAndSign";
import styles from "./Header.module.scss";

const Header = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const menuHandler = () => {
    setIsMenuActive((prev) => !prev);
  };
  return (
    <header className={styles.Header}>
      <div className={styles.container}>
        <Logo />
        <NavAndSign />
        <MobileHeader menuHandler={menuHandler} />
        <nav
          className={styles.mobileNav}
          style={{
            height: `${isMenuActive ? "unset" : "0"}`,
            padding: `${isMenuActive ? "10px" : "0"}`,
          }}
        >
          <ul style={{ display: `${isMenuActive ? "flex" : "none"}` }}>
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
        </nav>
      </div>
    </header>
  );
};

export default Header;
