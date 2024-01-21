import React from "react";
import styles from "./OurMission.module.scss";

const OurMission = () => {
  return (
    <div className={styles.OurMission}>
      <div className={styles.missionBlock}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="39"
          height="38"
          viewBox="0 0 39 38"
          fill="none"
        >
          <circle
            cx="14.6849"
            cy="23.3177"
            r="5.14583"
            stroke="#DD264E"
            stroke-width="3"
          />
          <circle
            cx="14.5"
            cy="23.5"
            r="13"
            stroke="#DD264E"
            stroke-width="3"
          />
          <path
            d="M15 23L26 13"
            stroke="#DD264E"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M26 6V12.6458H33.25"
            stroke="#DD264E"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M30 2V8.64583H37.25"
            stroke="#DD264E"
            stroke-width="3"
            stroke-linecap="round"
          />
        </svg>
        <div className={styles.txtNBtn}>
          <div className={styles.titleNTxt}>
            <h2>НАША МИССИЯ</h2>
            <h4>
              Наша миссия — обеспечить <span>онтологическую безопасность</span>{" "}
              Армении.
            </h4>
            <p>
              Мы запускаем научные проекты, реализовываем культурные инициативы,
              строим образовательную среду, формируем экспертное сообщество  —
              это актуализирует систему привычных ценностей и позволяет менять
              сценарий будущего. Мы верим, что именно такой подход сможет
              укрепить место армян как носителей уникального культурного кода в
              современном мире. Мы выстраиваем те границы Армении, которые
              никому не под силу нарушить. Мы создаем будущее, в котором
              армянская цивилизация уникальна и ценна для мира. 
            </p>
          </div>
          <button>Узнать больше</button>
        </div>
      </div>
    </div>
  );
};

export default OurMission;
