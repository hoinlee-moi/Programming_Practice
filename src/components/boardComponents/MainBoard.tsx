import React, { useRef, useEffect, useState,useCallback } from "react";
import { useRecoilState } from "recoil";
import { getBoardPostList } from "../../api";
import useObserver from "../../hooks/useObserve";
import { boardItemListState } from "../../recoil/recoilState";
import styles from "../../styles/board/mainBoard.module.css";
import PostItem from "./PostItem";

const MainBoard = () => {
  const [boardItemList , setBoardItemList] = useRecoilState(boardItemListState)
  const [observer, setObserver] = useObserver(
    async (entry: any, observer: any) => {
      await itemListHandle();
      await setPage((prevPage) => prevPage + 1);
    },
    {}
  );
  const [loading, setLoading] = useState(false);
  const [page,setPage] = useState(1)
  
  useEffect(()=>{
    itemListHandle()
  },[])

  const itemListHandle =useCallback(async()=> {
    try {
      const response = await getBoardPostList(page)
      if(response.status===200){
        setBoardItemList((snap:any) => [...snap, ...response.data.content]);
        setPage(page + 1);
        setLoading(false);
      }
    } catch (err) {
      console.log(err)
    }
  },[page,boardItemList])

  return (
  <div className={styles.postItemWrap}>
    {boardItemList.map((item,idx)=>{
      let style = styles.postItemBox
      if(idx%2===0){
        style = styles.postItemBox2
      }
      return <div className={style}>{item.map((val,id)=>{
        return <PostItem listItem={val}/>
      })}</div>
    })}
  </div>
  );
};

export default MainBoard;