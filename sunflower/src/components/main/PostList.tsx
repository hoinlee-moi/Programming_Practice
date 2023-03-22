import axios, { AxiosHeaders } from "axios";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRecoilValue } from "recoil";

import { dummy } from "../../dummy";
import { getCookie } from "../../etc/Cookie";
import useObserver from "../../hooks/useObserver";
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

  const getPostList = useCallback(async () => {
    await axios
      .get(`test/posts?page=${page}`, {
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(postItemList);
        // setPostListItem((snap) => [...snap, ...res.data.content]);
        // setPage(page + 1);
        // setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setPostListItem((snap) => [...snap, ...dummy]);
        setLoading(true);
      });
  },[page,postItemList]);

  const [observer, setObserver] = useObserver(
    async (entry: any, observer: any) => {
      await getPostList();
      await setPage(prevPage=>prevPage+1);
    },
    {}
  );

  return (
    <div
      className={styles.postListContianer}
      style={{ marginLeft: `${menuWidth}px` }}
    >
      <div>
        {postItemList.map((item) => {
          return <PostItemBox itemList={item} />;
        })}
      </div>

      {loading && <div ref={setObserver}>Loading...</div>}
    </div>
  );
};

export default PostList;
