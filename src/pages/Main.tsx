import styles from "../styles/main/main.module.css";
import MainSection01 from "../components/mainComponents/MainSection01";
import MainSection02 from "../components/mainComponents/MainSection02";
import MainSection03 from "../components/mainComponents/MainSection03";

const Main = () => {
  return (
    <div className={styles.container}>
      <header>
        <article className={styles.logoBox}>
          <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} />
        </article>
        <article className={styles.signUpBox}>
          <button>로그인</button>
          <button>회원가입</button>
        </article>
      </header>
      <MainSection01 />
      <MainSection02 />
      <MainSection03 />
    </div>
  );
};

export default Main;
