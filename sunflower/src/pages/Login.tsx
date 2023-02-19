import React from "react";
import styles from './Login.module.css'

const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.REACT_APP_KAKAOLOGIN_API_KEY}&redirect_uri=${process.env.REACT_APP_KAKAOLOGIN_REDIRECT_URI}`

const Login =() => {

    const kakaoLoginHandle = () =>{
        window.open(KAKAO_AUTH_URL,"카카오 로그인","width = 400px, height=500px")
    }

    return <div className={styles.login}>
        <h3>해바라기</h3>
        <div className={styles.loginContainer}>
            <div className={styles.loginSection}>
            <div className={styles.loginBox}>
            <h4>로그인</h4>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />
            <button>로그인</button>
            </div>
            <hr />
            <div className={styles.KakaoLoginBox}>
            <p>SNS 계정으로 로그인 하기</p>
            <button onClick={kakaoLoginHandle}>카카오 로그인</button>
            </div>
            </div>
        </div>
    </div>
}

export default Login