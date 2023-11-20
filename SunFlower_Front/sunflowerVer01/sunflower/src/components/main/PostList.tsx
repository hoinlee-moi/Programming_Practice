import axios, { AxiosHeaders } from "axios";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { dummy } from "../../dummy";
import { getCookie } from "../../etc/Cookie";
import useObserver from "../../hooks/useObserver";
import { DetailItemModal, FloatingMenuWidth, PostItemList } from "../Recoil/RecoilState";
import DetailItem from "./DetailItem";
import PostItemBox from "./PostItemBox";
import styles from "./PostList.module.css";

const PostList = () => {
  const menuWidth = useRecoilValue(FloatingMenuWidth);
  const [postItemList, setPostListItem] = useRecoilState(PostItemList);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [detailModal, setDetailModal] = useRecoilState(DetailItemModal);

  useEffect(() => {
    getPostList();
    setPostListItem(dummy)
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
  }, [page, postItemList]);

  const [observer, setObserver] = useObserver(
    async (entry: any, observer: any) => {
      await getPostList();
      await setPage((prevPage) => prevPage + 1);
    },
    {}
  );

  return (
    <>
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
    {detailModal && (
      <DetailItem />
    )}
    </>
  );
};

export default PostList;
