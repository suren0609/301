import React from "react";
import styles from "./HeadBlock.module.scss";

const HeadBlock = () => {
  return (
    <div className={styles.HeadBlock}>
      <div className={styles.articleBlock}>
        <div className={styles.titleAndTxt}>
          <h2>ЗЕМЛЯ МУДРОСТИ</h2>
          <p>
            Изменение сценария будущего Армении путем создания онтологической
            безопасности. <br /> В центре нашего внимания Армения — земля
            многовековой культуры и мудрости, которой есть что предложить миру.
          </p>
        </div>
        <div className={styles.btns}>
          <button>Стань одним из 301</button>
          <button>Весь проект</button>
        </div>
      </div>
    </div>
  );
};

export default HeadBlock;
