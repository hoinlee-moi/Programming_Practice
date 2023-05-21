import styles from "./Profile.module.css";

const ProfileList = () => {
    return (<div className={styles.profileListWrap}>
        <div className={styles.profileListBox}>
            <div>안녕</div>
            <div>여기가</div>
            <div>게시물</div>
        </div>
        <div className={styles.profileListBox}></div>
        <div className={styles.profileListBox}></div>
    </div>)
}

export default ProfileList