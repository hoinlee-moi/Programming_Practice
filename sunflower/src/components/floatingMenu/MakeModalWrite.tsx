import styles from "./FloatingMenu.module.css";
const MakeModalWrite = () => {
    return (<div className={styles.wirteBox}>
        {/* 플랙스 아래정렬으로 */}
        <div className={styles.nickNameBox}>
            {/* 플랙스 넣기 */}
            <img src="" className={styles.profileImg} />
            <p className={styles.userNickname}></p>
        </div>
        <div>
            <textarea name="" id="" cols={30} rows={10} maxLength={255} autoComplete="off"></textarea>
        </div>
    </div>)
}

export default MakeModalWrite