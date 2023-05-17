import React, { useRef, useEffect, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import styles from "../../styles/board/postDetail.module.css";
import { postDetailModal } from "../../recoil/recoilState";
import { getDetailPost } from "../../api";
import { dummy } from "../../dummy";

const PostDetail = () => {
  const imgParentRef = useRef(null);
  const imgRef = useRef(null);
  const [postDetail, setPostDetail] = useRecoilState(postDetailModal);
  const [data, setData] = useState();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const closeModalHandle = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.button === 0)
        setPostDetail((snap) => {
          return { ...snap, modal: false };
        });
    },
    []
  );
  const getPostDataHandle = async () => {
    try {
      const res = await getDetailPost(postDetail.postId);
      if (res.status === 200) {
        setData(res.data);
      }
    } catch (error) {
        dummy.forEach(val=>{
             val.find(value=>{value.postId===postDetail.postId})
        })
    }
  };

  return (
    <div className={styles.modalBack} onMouseDown={closeModalHandle}>
      <section
        className={styles.modalContent}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <img src={} />
      </section>
    </div>
  );
};

export default PostDetail;
