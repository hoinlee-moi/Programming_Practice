import { useRecoilValue } from "recoil";
import { UserData } from "../Recoil/RecoilState";
import styles from "./Profile.module.css";
const ProfileBox = () => {
  const userData = useRecoilValue(UserData)
  return (
    <section className={styles.profileContainer}>
      <div className={styles.profileImgContainer}>
        <div className={styles.profileImgBox}>
          <img src={`${process.env.PUBLIC_URL}/assets/basic_profile.jpg`} />
        </div>
      </div>
      <div className={styles.prfileContentBox}>
        <div className={styles.profileName}>
          <h2>닉네임{userData.nickname}</h2>
          <button>프로필 편집</button>
        </div>
        <div className={styles.profileContent}>
          <p>성별{userData.gender}</p>         
          <div className={styles.content}>
            <p>소개글{userData.userContents}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileBox;
