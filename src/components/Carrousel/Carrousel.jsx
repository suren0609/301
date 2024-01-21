import React, { useEffect, useState } from "react";
import { config } from "react-spring";
import Carousel from "react-spring-3d-carousel";
import styles from "./Carrousel.module.scss";

const Carrousel = (props) => {
  const table = props.cards.map((element, index) => {
    return { ...element, onClick: () => setGoToSlide(index) };
  });

  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showArrows, setShowArrows] = useState(false);
  const [goToSlide, setGoToSlide] = useState(null);
  const [cards] = useState(table);

  useEffect(() => {
    setOffsetRadius(props.offset);
    setShowArrows(props.showArrows);
  }, [props.offset, props.showArrows]);

  const handlePrev = () => {
    setGoToSlide((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setGoToSlide((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div
      className={styles.Carrousel}
      style={{ width: props.width, height: props.height, margin: props.margin }}
    >
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        showNavigation={showArrows}
        animationConfig={config.gentle}
      />

      <div className={styles.left} onClick={handlePrev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="190"
          height="190"
          viewBox="0 0 190 190"
          fill="none"
        >
          <g filter="url(#filter0_d_2762_36395)">
            <circle cx="94.8177" cy="91.0882" r="85.8177" fill="white" />
          </g>
          <path
            d="M67.0685 88.2592C65.5064 89.8213 65.5064 92.354 67.0685 93.9161L92.5243 119.372C94.0864 120.934 96.6191 120.934 98.1812 119.372C99.7433 117.81 99.7433 115.277 98.1812 113.715L75.5538 91.0877L98.1812 68.4602C99.7433 66.8981 99.7433 64.3655 98.1812 62.8034C96.6191 61.2413 94.0864 61.2413 92.5243 62.8034L67.0685 88.2592ZM119.727 87.0876L69.8969 87.0877L69.8969 95.0877L119.727 95.0876L119.727 87.0876Z"
            fill="#313A4B"
          />
          <defs>
            <filter
              id="filter0_d_2762_36395"
              x="0"
              y="0.270508"
              width="189.633"
              height="189.635"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2762_36395"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2762_36395"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className={styles.right} onClick={handleNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="190"
          height="190"
          viewBox="0 0 190 190"
          fill="none"
        >
          <g filter="url(#filter0_d_2762_36398)">
            <circle
              cx="95.1432"
              cy="91.0883"
              r="85.8177"
              transform="rotate(-180 95.1432 91.0883)"
              fill="white"
            />
          </g>
          <path
            d="M122.877 93.9178C124.439 92.3557 124.439 89.823 122.877 88.2609L97.421 62.8051C95.8589 61.243 93.3262 61.243 91.7641 62.8051C90.202 64.3672 90.202 66.8998 91.7641 68.4619L114.392 91.0894L91.7641 113.717C90.202 115.279 90.202 117.812 91.7641 119.374C93.3262 120.936 95.8589 120.936 97.421 119.374L122.877 93.9178ZM70.2188 95.0894L120.048 95.0894L120.048 87.0894L70.2187 87.0894L70.2188 95.0894Z"
            fill="#313A4B"
          />
          <defs>
            <filter
              id="filter0_d_2762_36398"
              x="0.328125"
              y="0.270508"
              width="189.633"
              height="189.635"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="4.5" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_2762_36398"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_2762_36398"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Carrousel;
