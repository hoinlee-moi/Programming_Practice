import styles from "../../styles/home/homeModal.module.css";
const HomeModal = () => {
  return (
    <div className={styles.modalBackgorund}>
      <section>
        <article>
          <div className={styles.logoImgBox}>
            <img src="" alt="" />
          </div>
          <h2>해바라기에 오신것을 환영합니다</h2>
        </article>
        <article className={styles.loginWrap}>
            <input type="text" placeholder="E-Mail"/>
            <input type="password" placeholder="Password"/>
        </article>
      </section>
    </div>
  );
};

export default HomeModal;
