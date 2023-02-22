import axios from "axios";
import { setCookie } from "../../etc/Cookie";
import styles from "../../pages/Login.module.css";
import MyInput from "../MyInput";
import MyButton from "./MyButton";

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAOLOGIN_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAOLOGIN_REDIRECT_URI}`;

const LoginBox = () => {
  const kakaoLoginHandle = () => {
    window.open(KAKAO_AUTH_URL, "카카오 로그인", "width = 400px, height=500px");
  };

  const loginHandle = (email: string, ps: string) => {
    if (email.trim().length < 1 || ps.trim().length < 1) {
      return;
      //아이디나 비번 아래 빨간색으로 유효성 검사가 되도록
    }
    const user:{email:string,ps:string} = {
      email : email,
      ps : ps
    }
    axios.post("주소",user).then(res => {
      console.log(res.data.token)
      setCookie("login", `${res.data.token}`)
      return 
    }).catch(err=>{
      // 아래 빨간색 글씨 나오도록 (비번이나 아이디가 틀리다)
      alert("비번이 틀립니다")
    })
  };

  return (
    <div className={styles.loginSection}>
      <div className={styles.loginBox}>
        <h4>로그인</h4>
        <MyInput type="text" placeHolder="Email" />
        <MyInput type="password" placeHolder="Password" />
        <span>아이디 또는 비번이 틀립니다.</span>
        <button>로그인</button>
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
