import { animated, useSpring } from "@react-spring/web";
import React, { useState } from "react";
import img579 from "../../assets/image 579.png";
import styles from "./Card.module.scss";

const Card = () => {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className={styles.Card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={img579} />
      <div className={styles.cardBottom}>
        <h4>Дети из Арцаха отметили новогодние праздники в фонде "301"</h4>
        <p>23.03.2023</p>
      </div>
    </animated.div>
  );
};

export default Card;
