import React, { useState } from "react";
import { JsxElement } from "typescript";
import styles from "../../pages/Login.module.css";

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
      <input type="text" placeholder="Email" onChange={(e)=>setUserEmail(e.target.value)} />
      <button className={styles.signUpEmailCheck}>중복검사</button>
      </div>
      <input type="password" placeholder="Password" onChange={(e)=>setUserPassword(e.target.value)} />
      <input type="password" placeholder="Re-enter password" onChange={(e)=>setUserPasswordCheck(e.target.value)} />
      <input type="text" placeholder="Nickname" onChange={(e)=>setUserNickname(e.target.value)} />
      <button className={styles.signUpBtn}>가입하기</button>
    </div>
  );
};

export default SignUpBox;
