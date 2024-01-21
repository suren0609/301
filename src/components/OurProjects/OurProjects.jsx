import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image from "../../assets/Rectangle 5099.png";
import styles from "./OurProjects.module.scss";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
};

const OurProjects = () => {
  return (
    <div className={styles.OurProjects}>
      <div className={styles.ourProjectsBlock}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="37"
          viewBox="0 0 30 37"
          fill="none"
        >
          <path
            d="M6.5 10H22.5"
            stroke="#DD264E"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M7 17H14"
            stroke="#DD264E"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M7 24H11"
            stroke="#DD264E"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M16 24H23"
            stroke="#DD264E"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M1.5 5C1.5 3.067 3.067 1.5 5 1.5H25C26.933 1.5 28.5 3.067 28.5 5V32C28.5 33.933 26.933 35.5 25 35.5H5C3.067 35.5 1.5 33.933 1.5 32V5Z"
            stroke="#DD264E"
            stroke-width="3"
          />
        </svg>
        <div className={styles.content}>
          <div className={styles.titleNTxt}>
            <h2>НАШИ ПРОЕКТЫ</h2>
            <p>
              За несколько лет работы фонда «301. Земля мудрости» мы запустили
              ряд важных проектов по направлениям образования, культуры, науки и
              инноваций и целостного развития территории. 
            </p>
          </div>
          <div className={styles.mobCards}>
            <div className={styles.carouselItem}>
              <img src={image} alt="" />
              <div className={styles.info}>
                <h4>Имя проекта</h4>
                <p>Культура</p>
                <div className={styles.author}>
                  <p>Виктор Браун </p>
                  <div className={styles.flag}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <path
                        d="M0 0H18L13.2158 6.16667L18 12.3333H0V0Z"
                        fill="#DD264E"
                      />
                      <rect width="1.33333" height="19" fill="#DD264E" />
                    </svg>
                    5
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.carouselItem}>
              <img src={image} alt="" />
              <div className={styles.info}>
                <h4>Имя проекта</h4>
                <p>Культура</p>
                <div className={styles.author}>
                  <p>Виктор Браун </p>
                  <div className={styles.flag}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <path
                        d="M0 0H18L13.2158 6.16667L18 12.3333H0V0Z"
                        fill="#DD264E"
                      />
                      <rect width="1.33333" height="19" fill="#DD264E" />
                    </svg>
                    5
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.carouselItem}>
              <img src={image} alt="" />
              <div className={styles.info}>
                <h4>Имя проекта</h4>
                <p>Культура</p>
                <div className={styles.author}>
                  <p>Виктор Браун </p>
                  <div className={styles.flag}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <path
                        d="M0 0H18L13.2158 6.16667L18 12.3333H0V0Z"
                        fill="#DD264E"
                      />
                      <rect width="1.33333" height="19" fill="#DD264E" />
                    </svg>
                    5
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.carouselItem}>
              <img src={image} alt="" />
              <div className={styles.info}>
                <h4>Имя проекта</h4>
                <p>Культура</p>
                <div className={styles.author}>
                  <p>Виктор Браун </p>
                  <div className={styles.flag}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="19"
                      viewBox="0 0 18 19"
                      fill="none"
                    >
                      <path
                        d="M0 0H18L13.2158 6.16667L18 12.3333H0V0Z"
                        fill="#DD264E"
                      />
                      <rect width="1.33333" height="19" fill="#DD264E" />
                    </svg>
                    5
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.slider}>
            <Carousel
              className={styles.carousel}
              responsive={responsive}
              autoPlay={true}
              swipeable={true}
              draggable={true}
              showDots={false}
              infinite={true}
              autoPlaySpeed={3000}
              partialVisible={false}
              dotListClass="custom-dot-list-style"
            >
              <div className={styles.carouselItem}>
                <img src={image} alt="" />
                <div className={styles.info}>
                  <h4>Имя проекта</h4>
                  <p>Культура</p>
                  <div className={styles.author}>
                    <p>Виктор Браун </p>
                    <div className={styles.flag}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                      >
                        <path
                          d="M0 0H18L13.2158 6.16667L18 12.3333H0V0Z"
                          fill="#DD264E"
                        />
                        <rect width="1.33333" height="19" fill="#DD264E" />
                      </svg>
                      5
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.carouselItem}>
                <img src={image} alt="" />
                <div className={styles.info}>
                  <h4>Имя проекта</h4>
                  <p>Культура</p>
                  <div className={styles.author}>
                    <p>Виктор Браун </p>
                    <div className={styles.flag}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                      >
                        <path
                          d="M0 0H18L13.2158 6.16667L18 12.3333H0V0Z"
                          fill="#DD264E"
                        />
                        <rect width="1.33333" height="19" fill="#DD264E" />
                      </svg>
                      5
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.carouselItem}>
                <img src={image} alt="" />
                <div className={styles.info}>
                  <h4>Имя проекта</h4>
                  <p>Культура</p>
                  <div className={styles.author}>
                    <p>Виктор Браун </p>
                    <div className={styles.flag}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                      >
                        <path
                          d="M0 0H18L13.2158 6.16667L18 12.3333H0V0Z"
                          fill="#DD264E"
                        />
                        <rect width="1.33333" height="19" fill="#DD264E" />
                      </svg>
                      5
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
          <button className={styles.other}>Другие проекты </button>
        </div>
      </div>
    </div>
  );
};

export default OurProjects;
