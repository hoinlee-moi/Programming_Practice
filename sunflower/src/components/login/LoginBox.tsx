import styles from "../../pages/Login.module.css"
import MyInput from "../MyInput";

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAOLOGIN_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAOLOGIN_REDIRECT_URI}`;


const LoginBox = () => {
    const kakaoLoginHandle = () => {
        window.open(KAKAO_AUTH_URL, "카카오 로그인", "width = 400px, height=500px");
      };
      
  return (
    <div className={styles.loginSection}>
      <div className={styles.loginBox}>
        <h4>로그인</h4>
        <MyInput type="text" placeHolder="Email"/>
        <MyInput type="password" placeHolder="Password"/>
        <button>로그인</button>
      </div>
      <hr />
      <div className={styles.KakaoLoginBox}>
        <p>SNS 계정으로 로그인 하기</p>
        <button onClick={kakaoLoginHandle}>
          <img src={process.env.PUBLIC_URL + `/assets/kakao_login_btn.png`} />
        </button>
      </div>
    </div>
  );
};

export default LoginBox;
