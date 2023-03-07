import React, { useState } from "react";

import styles from "./FloatingMenu.module.css";

const MakeModalWrite = () => {
  const [content, setContent] = useState("");

  return (
    <div className={styles.writeContainer}>
      <div className={styles.writeBox}>
        <div className={styles.nickNameBox}>
          {/* 플랙스 넣기 */}
          <div className={styles.profileImgBox}>
            <img
              src={process.env.PUBLIC_URL + `/assets/basic_profile.jpg`}
            //   유저 프로필 있으면 사진이 들어가도록 변경
              className={styles.profileImg}
            />
          </div>
          <p className={styles.userNickname}>닉네임</p>
        </div>
        <div className={styles.contentBox}>
          <textarea
            name=""
            id=""
            cols={30}
            rows={8}
            maxLength={255}
            autoComplete="off"
            placeholder="내용 입력..."
            onChange={(e)=>setContent(e.target.value)}
          ></textarea>
          <p className={styles.textLength}>{`${content.length}/255`}</p>
        </div>
      </div>
        <div className={styles.searchCalBox}>
          <input type="text" placeholder="칼로리 검색해보기" />
          <button>검색</button>
        </div>
    </div>
  );
};

export default MakeModalWrite;
