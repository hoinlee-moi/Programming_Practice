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
  const [dupCheckModal,setDupCheckModal] = useState(false)
  const [dupCheck, setDupCheck] = useState(false);

  const signUpHandle = () => {};

  const onBlurCheck = (element: HTMLElement, value: string) => {
    // if(value.trim().length < 1) {
    //     element.onfocus
    // }
  };

  const duplicateCheckHandle = () => {
    if (userData.email.trim().length < 1) return;

    axios.post("url",userData.email).then(res=>{
      //중복 검사 완료 모달
      setDupCheck(true)
      setDupCheckModal(!dupCheckModal)
    }).catch(err=>{
      setDupCheck(false)
      setDupCheckModal(!dupCheckModal)
    })
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
        <button className={styles.signUpEmailCheck} onClick={()=>setDupCheckModal(!dupCheckModal)}>중복검사</button>
      </div>
      {dupCheckModal&&<AlertModal closeModal={()=>setDupCheckModal(!dupCheckModal)}>{dupCheck?"중복된 이메일 없습니다":"중복된 이메일이 있습니다"}</AlertModal>}
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
      <button className={styles.signUpBtn}>가입하기</button>
    </div>
  );
};

export default SignUpBox;
