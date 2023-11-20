import React, { useEffect, useState, useCallback } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import styles from "../../styles/board/mainBoard.module.css";
import { useSetRecoilState } from "recoil";
import { postDetailModal } from "../../recoil/recoilState";

type props = {
  listItem: {
    postId: number;
    postImageUrls: string;
    postLikeCounts: number;
    commentCounts: number;
    nuKcal: number;
  };
};

const PostItem = ({ listItem }: props) => {
  const setDetailModal = useSetRecoilState(postDetailModal);

  const modalOnHandle = () => {
    setDetailModal({ postId: listItem.postId, modal: true });
  };

  return (
    <div className={styles.postItem} onClick={modalOnHandle}>
      <img src={listItem.postImageUrls} alt="" />
      <div className={styles.hoverDetail}>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <p>
            {listItem.commentCounts >= 10000
              ? `${Math.floor((listItem.commentCounts / 10000) * 10) / 10}만`
              : listItem.commentCounts}
          </p>
        </div>
        <div>
          <FontAwesomeIcon icon={faHeart} />
          <p>
            {listItem.postLikeCounts >= 10000
              ? `${Math.floor((listItem.postLikeCounts / 10000) * 10) / 10}만`
              : listItem.postLikeCounts}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
