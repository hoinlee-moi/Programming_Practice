import React, { useState, useEffect } from "react";
import { PostItemBoxProps } from "../../etc/TypeColletion";
import PostItem from "./PostItem";
import styles from "./postList.module.css";



const PostItemBox = ({ itemList }: PostItemBoxProps) => {

  return (
    <div className={styles.postItemContainer}>
      {itemList.map((it , idx) => {
        return <PostItem idx={idx} />;
      })}
    </div>
  );
};

export default PostItemBox;
