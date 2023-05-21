import { debounce } from "lodash";
import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api";
import { setCookie } from "../../etc/cookie";
import useInput from "../../hooks/useInput";
import styles from "../../styles/home/homeModal.module.css";
import KakaoSignUp from "./KakaoSignUp";
const Login = () => {

  const navigate = useNavigate();
  const [userData, setUserData] = useInput({
    emailId: "",
    password: "",
  });
  const [loginFailMs, setLoginFailMs] = useState("");

  useEffect(() => {
    setLoginFailMs("");
  }, [userData]);

  const loginHandle = useCallback(
    debounce(async () => {
      if (userData.emailId === "" || userData.password === "") {
        setLoginFailMs("아직 입력되지 않은부분이 있습니다");
        return;
      }
      try {
        const response = await login(userData);
        if (response.status === 201) {
          setCookie("accessToken", response.data.accessToken);
          setCookie("refreshToken", response.data.refreshToken);
          sessionStorage.setItem("emailId", response.data.emailId);
          navigate("/main", { replace: true });
        }
      } catch (err) {
        setLoginFailMs("E-Mail 또는 비밀번호가 올바르지 않습니다");
      }
    }, 1500),
    [userData]
  );

  return (
    <div>
      <div className={styles.logoImg}>
        <img src={`${process.env.PUBLIC_URL}/assets/logoPic.png`} />
      </div>
      <div className={styles.loginContent}>
        <h1>오태식에 오신 것을 환영합니다</h1>
        <p>꼭 그렇게 다 먹어야만 속이 후련했냐</p>
      </div>
      <div className={styles.loginInput}>
        <div>
          <input
            type="text"
            placeholder="E-Mail"
            name="emailId"
            autoComplete="off"
            onChange={setUserData}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            maxLength={14}
            onChange={setUserData}
          />
        </div>
        {userData !== "" && <p>{loginFailMs}</p>}
        <button onClick={loginHandle}>로그인</button>
      </div>
      <KakaoSignUp />
    </div>
  );
};

export default React.memo(Login);
