import React, { useRef, useEffect, useCallback, useState } from "react";
import { useRecoilState } from "recoil";
import styles from "../../styles/board/postDetail.module.css";
import { postDetailModal } from "../../recoil/recoilState";
import { getDetailPost } from "../../api";
import { dummy } from "../../dummy";
import Loading from "../Loading";

const PostDetail = () => {
  const imgParentRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const [postDetail, setPostDetail] = useRecoilState(postDetailModal);
  const [data, setData] = useState({
    postId: 0,
    postImageUrls: "",
    postLikeCounts: 0,
    commentCounts: 0,
    nuKcal: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    getPostDataHandle();
    
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  useEffect(()=>{
    if (imgRef.current && imgRef.current.complete) resizeModalHandle();
  },[loading])

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
      dummy.forEach((val) => {
        let post = val.find((value) => {
          return value.postId === postDetail.postId;
        });
        if (post) {
          setData(post);
        }
      });
    }
    setLoading(false);
  };

  const resizeModalHandle = () => {
    const parentEle = imgParentRef.current;
    const imgEle = imgRef.current;
    if (parentEle && imgEle) {
      const { naturalWidth, naturalHeight } = imgEle;
      const parentWidth = parentEle.offsetWidth;
      parentEle.style.aspectRatio = `${naturalWidth}/${naturalHeight}`;

    }
  };

  return (
    <div className={styles.modalBack} onMouseDown={closeModalHandle}>
      <div
        className={styles.modalContent}
        onMouseDown={(e) => e.stopPropagation()}
        ref={imgParentRef}
      >
        {loading ? (
          <Loading />
        ) : (
          <>
            <section className={styles.imgWrap}>
              <img src={data.postImageUrls} ref={imgRef} />
            </section>
            <section className={styles.contentWrap}></section>
          </>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
