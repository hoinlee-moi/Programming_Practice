import styles from "../../pages/Login.module.css"

const SignUpBox = () => {
    return <div className={styles.signUpSection}>
        <h2>회원가입</h2>
        <input type="text" placeholder="Email"/>
        <input type="text" placeholder="Password"/>
        <input type="text" placeholder="Re-enter password"/>
        <input type="text" placeholder="Nickname"/>
        <button>가입하기</button>
    </div>
}

export default SignUpBox