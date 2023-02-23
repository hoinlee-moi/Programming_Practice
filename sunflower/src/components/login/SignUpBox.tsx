import React, { useState } from "react";
import { JsxElement } from "typescript";
import styles from "../../pages/Login.module.css";
import MyInput from "../MyInput";

const SignUpBox = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userPasswordCheck, setUserPasswordCheck] = useState("");
  const [userNickname, setUserNickname] = useState("");
  const [dupCheck, setDupCheck] = useState(false)
   
  const signUpHandle = () => {
  }

  const onBlurCheck = (element:HTMLElement,value:string) => {
    // if(value.trim().length < 1) {
    //     element.onfocus
    // }
  }
  
  const duplicateCheckHandle = () => {
    if(userEmail.trim().length<1) return;
  }

  return (
    <div className={styles.signUpSection}>
      <h2>회원가입</h2>
      <div className={styles.signUpEmailSection}>
      <MyInput type="text" placeHolder="Email" onChange={setUserEmail} />
      <button className={styles.signUpEmailCheck}>중복검사</button>
      </div>
      <MyInput type="password" placeHolder="Password" onChange={setUserPassword} />
      <MyInput type="password" placeHolder="Re-enter password" onChange={setUserPasswordCheck} />
      <MyInput type="text" placeHolder="Nickname" onChange={setUserNickname} />
      <button className={styles.signUpBtn}>가입하기</button>
    </div>
  );
};

export default SignUpBox;
