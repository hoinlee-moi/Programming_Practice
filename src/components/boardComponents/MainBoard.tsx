import React, { useEffect, useState, useCallback } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getBoardPostList } from "../../api";
import useObserver from "../../hooks/useObserve";
import { boardItemListState, postDetailModal } from "../../recoil/recoilState";
import styles from "../../styles/board/mainBoard.module.css";
import PostItem from "./PostItem";
import _, { debounce, divide } from "lodash";
import { dummy } from "../../dummy";
import PostDetail from "./PostDetail";
import Loading from "../Loading";

const MainBoard = () => {
  const [boardItemList, setBoardItemList] = useRecoilState(boardItemListState);
  const detailModal = useRecoilValue(postDetailModal);
  const [observer, setObserver] = useObserver(
    async (entry: any, observer: any) => {
      debounceHandleScroll();
    },
    {}
  );
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    getPostList();
  }, []);

  const debounceHandleScroll = debounce(async () => {
    await getPostList();
    await setPage((prevPage) => prevPage + 1);
  }, 1000);

  const getPostList = useCallback(async () => {
    try {
      const response = await getBoardPostList(page);
      if (response.status === 200) {
        setBoardItemList((snap: any) => [...snap, ...response.data.content]);
        setPage(page + 1);
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      setBoardItemList((snap: any) => [...snap, ...dummy]);
      setLoading(true);
    }
  }, [page, boardItemList]);

  return (
    <div className={styles.postItemWrap}>
      {detailModal.modal && <PostDetail />}
      {boardItemList.map((item, idx) => {
        let style = styles.postItemBox;
        if (idx % 2 === 0) {
          style = styles.postItemBox2;
        }
        return (
          <div className={style} key={idx}>
            {item.map((val) => {
              return <PostItem listItem={val} key={val.postId} />;
            })}
          </div>
        );
      })}
      {loading && (
        <div ref={setObserver} className={styles.ListLoading}>
          <Loading />
        </div>
      )}
    </div>
  );
};

export default MainBoard;
