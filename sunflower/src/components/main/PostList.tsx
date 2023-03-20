import axios, { AxiosHeaders } from "axios";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRecoilValue } from "recoil";

import { dummy } from "../../dummy";
import { getCookie } from "../../etc/Cookie";
import {useIntersectionObserver} from "../../hooks/useObserver";
import { FloatingMenuWidth } from "../Recoil/RecoilState";
import PostItemBox from "./PostItemBox";
import styles from "./PostList.module.css";

const PostList = () => {
  const menuWidth = useRecoilValue(FloatingMenuWidth);
  const [postItemList, setPostListItem] = useState(dummy);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    getPostList();
  }, []);

  const getPostList = async () => {
    console.log(page)
    setLoading(false);
    await axios
      .get(`/posts/${page}`, {
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      })
      .then((res) => {
        setPostListItem((snap) => [...snap, ...res.data]);
        setPage(page+1);
      })
      .catch((err) => {
        console.log(err);
        setPage(page+1);
      })
      .finally(() => {
        setLoading(true);
      });
  };
  const setObserver = useIntersectionObserver(getPostList);
  return (
    <div
      className={styles.postListContianer}
      style={{ marginLeft: `${menuWidth}px` }}
    >
      <PostItemBox itemList={postItemList} />
      {loading && <div ref={setObserver}>Loading...</div>}
    </div>
  );
};

export default PostList;
