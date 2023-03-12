import React, { useState, useEffect } from "react";
import { PostItemBoxProps } from "../../etc/TypeColletion";
import PostItem from "./PostItem";
import styles from "./PostList.module.css";



const PostItemBox = ({ itemList }: PostItemBoxProps) => {

  return (
    <div className={styles.postItemContainer} key={Math.random()}>
      {itemList.map((it , idx) => {
        return <PostItem idx={idx} />;
      })}
    </div>
  );
};

export default PostItemBox;
