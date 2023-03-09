import axios, { AxiosHeaders } from "axios";
import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { dummy } from "../../dummy";
import { getCookie } from "../../etc/Cookie";
import { FloatingMenuWidth } from "../Recoil/RecoilState";
import PostItemBox from "./PostItemBox";
import styles from "./postList.module.css";

const PostList = () => {
  const menuWidth = useRecoilValue(FloatingMenuWidth);
  const [postItemList, setPostListItem] = useState(dummy);

  useEffect(() => {
    axios
      .get("http://15.165.19.237:8080/posts/", {
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // axios.get("http://15.165.19.237:8080/posts").then(res=>{
    //   console.log(res)
    // }).catch(err=>{
    //   console.log(err)
    // })
  }, []);
  /*axios({
  method: 'get',
  url: 'url',
  headers: 
  'Content-Type':'application/json',
  'X-Requested-With': 'XMLHttpRequest',
}) */
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
