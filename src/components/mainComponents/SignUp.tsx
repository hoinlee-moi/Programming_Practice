import React, { useCallback, useEffect, useState } from "react";
import useInput from "../../hooks/useInput";

import styles from "../../styles/main/mainSection03.module.css";
import { emailDuplicate, nickNameDuplicate } from "../../api";
import KakaoSignUp from "./KakaoSignUp";

const reg = {
  regPs: new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#])[\da-zA-Z!@#]{8,14}$/
  ),
  regEmail: new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/),
  regNickname: new RegExp(/^(?=.*[a-z0-9가-힣])[a-z0-9가-힣-_]{2,12}$/),
};
const SignUp = () => {
  const [userData, setUserData] = useInput({
    email: "",
    password: "",
    passwordCheck: "",
    nickname: "",
  });
  const [emailCheck, setEmailCheck] = useState(false);
  const [psCheck, setPsCheck] = useState(false);
  const [rePsCheck, setRePsCheck] = useState(false);
  const [nikCheck, setNickCheck] = useState(false);
  const [alertMs, setAlertMs] = useState("");
  useEffect(() => {
    setAlertMs("");
  }, [userData]);
  useEffect(() => {
    setEmailCheck(false);
  }, [userData.email]);
  useEffect(() => {
    setPsCheck(false);
  }, [userData.password]);
  useEffect(() => {
    setRePsCheck(false);
  }, [userData.passwordCheck]);
  useEffect(() => {
    setNickCheck(false);
  }, [userData.nickname]);
  const checkSignUpData = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const inputName = e.target.name;
      const inputValue = e.target.value;
      switch (inputName) {
        case "password":
          if (!reg.regPs.test(inputValue)) {
            setPsCheck(true);
            setAlertMs(
              "비밀번호는 8~14자이내 영어 대소문자,숫자,특수기호를 최소 1개이상 포함하여야 합니다."
            );
            return;
          }
          break;
        case "passwordCheck":
          if (userData.password !== inputValue) {
            setRePsCheck(true);
            setAlertMs("비밀번호 재입력이 올바르지 않습니다");
            return;
          }
          break;
        default:
          return;
      }
    },
    [userData]
  );
  const emailCheckHandle = useCallback(
    async (e: React.FocusEvent<HTMLInputElement>) => {
      const inputValue = e.target.value;
      if (!reg.regEmail.test(inputValue)) {
        setEmailCheck(true);
        setAlertMs("E-Mail이 올바르지 않습니다");
        return;
      }
      try {
        await emailDuplicate(inputValue);
      } catch (err) {
        console.log(err);
        setEmailCheck(true);
        setAlertMs("사용중인 E-Mail입니다");
        // 에러 처리
      }
    },
    [userData.email]
  );
  const nickCheckHandle = useCallback(
    async (e: React.FocusEvent<HTMLInputElement>) => {
      if (!reg.regNickname.test(e.target.value)) {
        setNickCheck(true);
        setAlertMs(
          "닉네임은 2~12자이내 한글,영문,_,-를 포함하여 만들수 있습니다"
        );
        return;
      }
      try {
        await nickNameDuplicate(e.target.value);
      } catch (err) {
        console.log(err);
        setNickCheck(true);
        setAlertMs("사용중인 닉네임입니다");
      }
    },
    [userData.nickname]
  );
  return (
    <div>
      <div className={styles.logoImg}>
        <img src={`${process.env.PUBLIC_URL}/assets/logoPic.png`} />
      </div>
      <div className={styles.signUpContent}>
        <h1>해바라기에 오신 것을 환영합니다</h1>
        <p>꼭 그렇게 다 먹어야만 속이 후련했냐</p>
      </div>
      <div className={styles.signUpInput}>
        <div>
          <input
            type="text"
            placeholder="E-Mail"
            name="email"
            onChange={setUserData}
            onBlur={emailCheckHandle}
          />
          {emailCheck && <span />}
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            maxLength={14}
            onChange={setUserData}
            onBlur={checkSignUpData}
          />
          {psCheck && <span />}
        </div>
        <div>
          <input
            type="password"
            placeholder="Re-enter password"
            name="passwordCheck"
            maxLength={14}
            onChange={setUserData}
            onBlur={checkSignUpData}
          />
          {rePsCheck && <span />}
        </div>
        <div>
          <input
            type="text"
            placeholder="Nickname"
            name="nickname"
            maxLength={12}
            onChange={setUserData}
            onBlur={nickCheckHandle}
          />
          {nikCheck && <span />}
        </div>
        {alertMs !== "" && <p>{alertMs}</p>}
        <button>회원가입</button>
      </div>
      <KakaoSignUp />
    </div>
  );
};

export default React.memo(SignUp);
