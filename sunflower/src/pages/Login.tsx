import React from "react";

import LoginBox from "../components/login/LoginBox";
import SignUpBox from "../components/login/SignUpBox";

import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.login}>
      <h3>해바라기</h3>
      <div className={styles.loginContainer}>
        <LoginBox />
        <SignUpBox />
      </div>
    </div>
  );
};

export default Login;
