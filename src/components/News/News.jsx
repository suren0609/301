import React from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "../Card/Card";
import Carrousel from "../Carrousel/Carrousel";
import styles from "./News.module.scss";

const News = () => {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
      ),
    },
    {
      key: uuidv4(),
      content: <Card />,
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      ),
    },
  ];
  return (
    <div className={styles.News}>
      <div className={styles.newsBlock}>
        <div className={styles.iconNTitle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="37"
            viewBox="0 0 36 37"
            fill="none"
          >
            <path
              d="M6.5 10H22.5"
              stroke="#DD264E"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M6.5 17H22.5"
              stroke="#DD264E"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M6.5 24H22.5"
              stroke="#DD264E"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              d="M1.5 5C1.5 3.067 3.067 1.5 5 1.5H25C26.933 1.5 28.5 3.067 28.5 5V35.5H5C3.067 35.5 1.5 33.933 1.5 32V5Z"
              stroke="#DD264E"
              stroke-width="3"
            />
            <path
              d="M28.5 11C28.5 9.61929 29.6193 8.5 31 8.5H32C33.3807 8.5 34.5 9.61929 34.5 11V33C34.5 34.3807 33.3807 35.5 32 35.5H28.5V11Z"
              stroke="#DD264E"
              stroke-width="3"
            />
          </svg>
          <h2>Новости "301"</h2>
        </div>
        <div className={styles.slider}>
          <Carrousel
            cards={cards}
            height="500px"
            width="30%"
            margin="0 auto"
            offset={2}
            showArrows={false}
          />
        </div>
        <button className={styles.btn}>Все новости</button>
      </div>
    </div>
  );
};

export default News;
