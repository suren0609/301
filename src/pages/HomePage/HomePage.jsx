import React from "react";
import Contact from "../../components/Contact/Contact";
import Ecosystem from "../../components/Ecosystem/Ecosystem";
import HeadBlock from "../../components/HeadBlock/HeadBlock";
import HypothesesFuture from "../../components/HypothesesFuture/HypothesesFuture";
import News from "../../components/News/News";
import OurMission from "../../components/OurMission/OurMission";
import OurProjects from "../../components/OurProjects/OurProjects";
import WhyImportant from "../../components/WhyImportant/WhyImportant";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <div className={styles.HomePage}>
      <HeadBlock />
      <OurMission />
      <WhyImportant />
      <HypothesesFuture />
      <OurProjects />
      <Ecosystem />
      <News />
      <Contact />
    </div>
  );
};

export default HomePage;
