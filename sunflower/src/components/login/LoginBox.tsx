import React, { useState, useEffect } from "react";
import axios from "axios";
import { setCookie } from "../../etc/Cookie";
import styles from "../../pages/Login.module.css";
import MyButton from "./MyButton";
import useInput from "../../hooks/useInput";

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAOLOGIN_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAOLOGIN_REDIRECT_URI}`;

const LoginBox = () => {
  const [loginFail, setLoginFail] = useState(false);
  const [userData, setUserData] = useInput({
    email: "",
    password: "",
  });

  useEffect(() => {
    setLoginFail(false);
  }, [userData]);

  const kakaoLoginHandle = () => {
    window.open(KAKAO_AUTH_URL, "카카오 로그인", "width = 400px, height=500px");
  };

  const loginHandle = () => {
    if(userData.email.length<1 || userData.password.length <1){
      setLoginFail(true)
      return;
    }
    axios
      .post("주소", userData)
      .then((res) => {
        console.log(res.data.token);
        setCookie("login", `${res.data.token}`);
      })
      .catch((err) => {
        // 아래 빨간색 글씨 나오도록 (비번이나 아이디가 틀리다)
        setLoginFail(true);
      });
  };

  return (
    <div className={styles.loginSection}>
      <div className={styles.loginBox}>
        <h4>로그인</h4>
        <input type="text" placeholder="Email" onChange={setUserData} name="email" />
        <input type="password" placeholder="Password" onChange={setUserData} name="password" />
        <span
          className={loginFail ? styles.spanDisplay : styles.spanDisplayNone}
        >
          아이디 또는 비번이 틀립니다.
        </span>
        <MyButton onClick={loginHandle}>로그인</MyButton>
      </div>
      <hr />
      <div className={styles.KakaoLoginBox}>
        <p>SNS 계정으로 로그인 하기</p>
        <MyButton onClick={kakaoLoginHandle}>
          <img src={process.env.PUBLIC_URL + `/assets/kakao_login_btn.png`} />
        </MyButton>
      </div>
    </div>
  );
};

export default LoginBox;
