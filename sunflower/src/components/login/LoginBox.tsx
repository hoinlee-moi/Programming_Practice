import React, { useState, useEffect,useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";

import useInput from "../../hooks/useInput";
import { setCookie } from "../../etc/Cookie";


import axios from "axios";

import styles from "./Login.module.css";
import MyButton from "../MyButton";
import { UserToken } from "../../etc/TypeColletion";

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAOLOGIN_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAOLOGIN_REDIRECT_URI}`;

const LoginBox = () => {
  const navigate = useNavigate();
  // const [token,SetUserToken] = useRecoilState<UserToken[]>(userToken)
  const [loginFail, setLoginFail] = useState(false);
  const [userData, setUserData] = useInput({
    email: "",
    password: "",
  });

  useEffect(() => {
    setLoginFail(false);
  }, [userData]);

  const kakaoLoginHandle = useCallback(() => {
    window.open(KAKAO_AUTH_URL, "카카오 로그인", "width = 400px, height=500px");
  },[]);

  const loginHandle = () => {
    const userLogin = {
      emailId: userData.email,
      password: userData.password,
    };
    axios
      .post("/api/auth/login", userLogin)
      .then((res) => {
        console.log(
          res.data.accessToken,
          "리프레시 토큰",
          res.data.refreshToken
        );
        setCookie("accessToken", res.data.accessToken);
        setCookie("refreshToken", res.data.refreshToken);
        navigate("/main", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        // 아래 빨간색 글씨 나오도록 (비번이나 아이디가 틀리다)
        setLoginFail(true);
      });
  };

  return (
    <div className={styles.loginSection}>
      <div className={styles.loginBox}>
        <h4>로그인</h4>
        <input
          type="text"
          placeholder="Email"
          onChange={setUserData}
          name="email"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Password"
          onChange={setUserData}
          name="password"
          autoComplete="off"
        />
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

export default React.memo(LoginBox);
