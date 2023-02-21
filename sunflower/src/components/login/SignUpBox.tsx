import styles from "../../pages/Login.module.css"
import MyInput from "../MyInput"

const SignUpBox = () => {
    return <div className={styles.signUpSection}>
        <h2>회원가입</h2>
        <MyInput type="text" placeHolder="Email"/>
        <MyInput type="password" placeHolder="Password"/>
        <MyInput type="password" placeHolder="Re-enter password"/>
        <MyInput type="text" placeHolder="Nickname"/>
        <button>가입하기</button>
    </div>
}

export default SignUpBox