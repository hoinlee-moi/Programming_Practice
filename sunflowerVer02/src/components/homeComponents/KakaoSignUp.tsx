import { useCallback } from "react";
import styles from "../../styles/home/homeModal.module.css";

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAOLOGIN_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAOLOGIN_REDIRECT_URI}`;

const KakaoSignUp = () => {
  const kakaoLoginHandle = useCallback(() => {
    window.location.href = KAKAO_AUTH_URL;
  }, []);
  return (
    <div className={styles.kakaoLogin}>
      <button onClick={kakaoLoginHandle}>
        <img src={process.env.PUBLIC_URL + `/assets/kakao_login_btn.png`} />
      </button>
    </div>
  );
};

export default KakaoSignUp;
