import axios, { AxiosHeaders } from "axios";
import React, { useState, useEffect, useCallback,useRef } from "react";
import { useRecoilValue } from "recoil";

import { dummy } from "../../dummy";
import { getCookie } from "../../etc/Cookie";
import useObserver from "../../hooks/useObserver";
import { FloatingMenuWidth } from "../Recoil/RecoilState";
import PostItemBox from "./PostItemBox";
import styles from "./PostList.module.css";

const PostList = () => {
  const menuWidth = useRecoilValue(FloatingMenuWidth);
  const observer = useObserver
  const [postItemList, setPostListItem] = useState(dummy);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getPostList(page);
  }, []);

  const getPostList = async (page: number) => {
    await axios
      .get(`/posts/${page}`, {
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      })
      .then((res) => {
        setPostListItem((snap) => [...snap, ...res.data]);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  return (
    <div
      className={styles.postListContianer}
      style={{ marginLeft: `${menuWidth}px` }}
    >
      <PostItemBox itemList={postItemList} />
       <div ref={observerRef}>{loading &&"Loading..."}</div>
    </div>
  );
};

export default PostList;
