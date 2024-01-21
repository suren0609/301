import React from "react";
import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.Contact}>
      <div className={styles.container}>
        <div className={styles.iconNTitle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="30"
            viewBox="0 0 40 30"
            fill="none"
          >
            <path d="M2 3L19.5385 15L38 3" stroke="#DD264E" stroke-width="3" />
            <rect
              x="1.5"
              y="1.5"
              width="37"
              height="27"
              rx="3.5"
              stroke="#DD264E"
              stroke-width="3"
            />
          </svg>
          <h2>Напишите нам</h2>
        </div>
        <form action="">
          <div className={styles.names}>
            <input type="text" placeholder="Ваша имя" />
            <input type="text" placeholder="Ваша почта" />
          </div>
          <div className={styles.messageBtn}>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Написать "
              
            ></textarea>
            <button className={styles.send}>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
