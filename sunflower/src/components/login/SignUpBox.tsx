import axios from "axios";
import React, { useState } from "react";
import useInput from "../../hooks/useInput";
import styles from "../../pages/Login.module.css";
import AlertModal from "../AlertModal";

const SignUpBox = () => {
  const [userData, setUserData] = useInput({
    email: "",
    password: "",
    passwordCheck: "",
    nickname: "",
  });
  const [signupMessage, setSignupMessage] = useState("");
  const [dupCheckModal, setDupCheckModal] = useState(false);
  const [dupCheck, setDupCheck] = useState(false);

  //useEffect를 통해 

  const signUpHandle = () => {
    const psReg = new RegExp(
      "/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/"
    );
    if (userData.password.trim().length < 1 || psReg.test(userData.password)) {
      setSignupMessage("비밀번호 형식을 지켜주세요");
      return;
    }
    if (userData.password !== userData.passwordCheck) {
      setSignupMessage("비밀번호가 일치하지 않습니다");
      return;
    }
    //중복검사 확인 
    //닉네임 확인

    axios.post("url",userData).then(res=>{
      //가입완료
    }).catch(err=>{
      //가입실패
    })
  };

  const onBlurCheck = (element: HTMLElement, value: string) => {
    // if(value.trim().length < 1) {
    //     element.onfocus
    // }
  };

  const duplicateCheckHandle = () => {
    const regEmail = new RegExp(
      "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
    );
    if (userData.email.trim().length < 1 || !regEmail.test(userData.email)) {
      setSignupMessage("형식에 맞는 Email을 입력해주세요");
      return;
    }

    axios
      .post("url", userData.email)
      .then((res) => {
        //중복 검사 완료 모달
        setDupCheck(true);
        setDupCheckModal(!dupCheckModal);
      })
      .catch((err) => {
        setDupCheck(false);
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
        />
        <button
          className={styles.signUpEmailCheck}
          onClick={duplicateCheckHandle}
        >
          중복검사
        </button>
      </div>
      {signupMessage === "" ? <></> : <p>{signupMessage}</p>}
      {dupCheckModal && (
        <AlertModal closeModal={() => setDupCheckModal(!dupCheckModal)}>
          {dupCheck ? "중복된 이메일 없습니다" : "중복된 이메일이 있습니다"}
        </AlertModal>
      )}
      <input
        type="password"
        placeholder="Password"
        onChange={setUserData}
        name="password"
        autoComplete="off"
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
      <button className={styles.signUpBtn} onClick={signUpHandle}>
        가입하기
      </button>
    </div>
  );
};

export default SignUpBox;
