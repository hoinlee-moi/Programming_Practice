import React, { useRef, useEffect, useState, useCallback } from "react";
import { useRecoilState } from "recoil";
import { getBoardPostList } from "../../api";
import useObserver from "../../hooks/useObserve";
import { boardItemListState } from "../../recoil/recoilState";
import styles from "../../styles/board/mainBoard.module.css";
import PostItem from "./PostItem";
import _, { debounce, divide } from "lodash";
import { dummy } from "../../dummy";

const MainBoard = () => {
  const [boardItemList, setBoardItemList] = useRecoilState(boardItemListState);
  const [observer, setObserver] = useObserver(
    async (entry: any, observer: any) => {
      debounceHandleScroll()
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
    console.log("끝", page);
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
      {boardItemList.map((item, idx) => {
        let style = styles.postItemBox;
        if (idx % 2 === 0) {
          style = styles.postItemBox2;
        }
        return (
          <div className={style}>
            {item.map((val, id) => {
              return <PostItem listItem={val} />;
            })}
          </div>
        );
      })}
      {loading && (
        <div ref={setObserver} className={styles.ListLoading}>
          <svg>
            <circle cx="50%" cy="50%" r="25"></circle>
          </svg>
        </div>
      )}
    </div>
  );
};

export default MainBoard;
