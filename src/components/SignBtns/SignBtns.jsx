import React from "react";
import styles from "./SignBtns.module.scss";

const SignBtns = () => {
  return (
    <div className={styles.SignBtns}>
      <button className={styles.donate}>Donate</button>
      <button className={styles.signIn}>Sign in</button>
    </div>
  );
};

export default SignBtns;
