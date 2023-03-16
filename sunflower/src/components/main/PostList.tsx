import axios, { AxiosHeaders } from "axios";
import React, { useState, useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

import { dummy } from "../../dummy";
import { getCookie } from "../../etc/Cookie";
import { FloatingMenuWidth } from "../Recoil/RecoilState";
import PostItemBox from "./PostItemBox";
import styles from "./PostList.module.css";

const PostList = () => {
  const menuWidth = useRecoilValue(FloatingMenuWidth);
  const [postItemList, setPostListItem] = useState(dummy);

  useEffect(() => {
    axios
      .get("/posts/", {
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));


  }, []);

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
