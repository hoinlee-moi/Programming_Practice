import styles from "./Profile.module.css";
const ProfileBox = () => {
  return (
    <section className={styles.profileContainer}>
      <div className={styles.profileImgContainer}>
        <div className={styles.profileImgBox}>
          <img src={`${process.env.PUBLIC_URL}/assets/basic_profile.jpg`} />
        </div>
      </div>
      <div className={styles.prfileContentBox}>
        <div className={styles.profileName}>
          <h2>닉네임</h2>
          <button>프로필 편집</button>
        </div>
        <div className={styles.profileContent}>
          <p>성별</p>         
          <div className={styles.content}>
            <p>소개글</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileBox;
