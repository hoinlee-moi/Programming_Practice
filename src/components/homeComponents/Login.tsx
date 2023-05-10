import React, { useCallback, useEffect, useState } from "react";
import styles from "../../styles/home/homeModal.module.css"
import KakaoSignUp from "./KakaoSignUp";
const Login = () => {
  return (
    <div>
      <div className={styles.logoImg}>
        <img src={`${process.env.PUBLIC_URL}/assets/logoPic.png`} />
      </div>
      <div className={styles.loginContent}>
        <h1>해바라기에 오신 것을 환영합니다</h1>
        <p>꼭 그렇게 다 먹어야만 속이 후련했냐</p>
      </div>
      <div className={styles.loginInput}>
        <div>
          <input
            type="text"
            placeholder="E-Mail"
            name="email"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            maxLength={14}
          />
        </div>
        <button>로그인</button>
      </div>
      <KakaoSignUp />
    </div>
  );
};

export default React.memo(Login);
