import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { dummy } from "../../dummy";
import { FloatingMenuWidth } from "../Recoil/RecoilState";
import PostItemBox from "./PostItemBox";
import styles from "./postList.module.css";

const PostList = () => {
  const menuWidth = useRecoilValue(FloatingMenuWidth);
  const [postItemList, setPostListItem] = useState(dummy);
  useEffect(()=>{
    axios.get("http://3.36.57.184/api/posts").then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  },[])
  //데이터 받을 때 5개씩 묶여서 오는게 가능한지
  return (
    <div
      className={styles.postListContianer}
      style={{ marginLeft: `${menuWidth}px` }}
    >
      <PostItemBox itemList={postItemList} />
    </div>
  );
};

export default PostList;
