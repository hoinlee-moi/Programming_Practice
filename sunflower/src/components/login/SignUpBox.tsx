import axios from "axios";
import React, { useState, FocusEvent, useEffect } from "react";
import useInput from "../../hooks/useInput";
import styles from "../../pages/Login.module.css";
import AlertModal from "../AlertModal";

const reg = {
  regPs: new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#])[\da-zA-Z!@#]{8,14}$/
  ),
  regEmail: new RegExp(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/),
  regNickname: new RegExp(/^(?=.*[a-z0-9가-힣])[a-z0-9가-힣-_]{2,12}$/),
};

const SignUpBox = () => {
  const [userData, setUserData] = useInput({
    email: "",
    password: "",
    passwordCheck: "",
    nickname: "",
  });
  const [signupMessage, setSignupMessage] = useState("");
  const [dupCheckModal, setDupCheckModal] = useState(false);
  const [dupCheckModalMs, setDupCheckModalMs] = useState("");
  const [dupCheck, setDupCheck] = useState(false);

  //useEffect를 통해
  useEffect(() => {
    setSignupMessage("");
  }, [userData]);
  const signUpHandle = () => {
    if (!dupCheck) {
      setSignupMessage("Email중복검사를 완료해주세요");
      return;
    }
    if (!reg.regPs.test(userData.password)) {
      setSignupMessage(
        "비밀번호는 8~14자이내 영어 대소문자,숫자,특수기호를 최소 1개이상 포함하여야 합니다."
      );
      return;
    }
    if (userData.password !== userData.passwordCheck) {
      setSignupMessage("비밀번호 재입력이 올바르지 않습니다");
      return;
    }
    if (!reg.regNickname.test(userData.nickname)) {
      setSignupMessage(
        "닉네임은 2~12자이내 한글,영문,_,-를 포함하여 만들수 있습니다"
      );
      return;
    }

    const signData = {
      emailId: userData.email,
      password: userData.password,
      nickname: userData.nickname,
    };

    axios
      .post("http://15.165.19.237:8080/api/auth/signup", signData)
      .then((res) => {
        console.log(res);
        //가입완료
      })
      .catch((err) => {
        console.log(err);
        //가입실패
      });
  };

  const onBlurCheck = (e: FocusEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
  };

  const duplicateCheckHandle = () => {
    if (!reg.regEmail.test(userData.email)) {
      setDupCheckModalMs("형식에 맞는 Email을 입력해주세요");
      setDupCheckModal(!dupCheckModal);
      return;
    }

    axios
      .get(`http://15.165.19.237:8080/api/auth/emailIds/${userData.email}/exists`)
      .then((res) => {
        //중복 검사 완료 모달
        console.log(res)
        setDupCheckModalMs("사용가능한 Email입니다");
        setDupCheck(true);
        setDupCheckModal(!dupCheckModal);
      })
      .catch((err) => {
        console.log(err)
        setDupCheckModalMs("이미 사용중인 Email입니다");
        setDupCheck(true);
        setDupCheckModal(!dupCheckModal);
      });
  };

  return (
    <div className={styles.signUpSection}>
      <h2>회원가입</h2>
      <div className={styles.signUpEmailSection}>
        <input
          type="text"
          placeholder="Email"
          onChange={setUserData}
          name="email"
          autoComplete="off"
          onBlur={onBlurCheck}
        />
        <button
          className={styles.signUpEmailCheck}
          onClick={duplicateCheckHandle}
        >
          중복검사
        </button>
      </div>

      {dupCheckModal && (
        <AlertModal closeModal={() => setDupCheckModal(!dupCheckModal)}>
          {dupCheckModalMs}
        </AlertModal>
      )}

      <input
        type="password"
        placeholder="Password"
        onChange={setUserData}
        name="password"
        autoComplete="off"
        onBlur={onBlurCheck}
      />

      <input
        type="password"
        placeholder="Re-enter password"
        onChange={setUserData}
        name="passwordCheck"
        autoComplete="off"
      />
      <input
        type="text"
        placeholder="Nickname"
        onChange={setUserData}
        name="nickname"
        autoComplete="off"
      />
      {signupMessage === "" ? <></> : <span>{signupMessage}</span>}
      <button className={styles.signUpBtn} onClick={signUpHandle}>
        가입하기
      </button>
    </div>
  );
};

export default SignUpBox;
