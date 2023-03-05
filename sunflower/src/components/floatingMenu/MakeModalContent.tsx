import React, { useState, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { UploadFiles } from "../Recoil/RecoilState";

import styles from "./FloatingMenu.module.css";
import MakeModalUpload from "./MakeModalUpload";

const MakeModalContent = () => {
  const uploadedImages = useRecoilValue(UploadFiles)
  return  (<div className={styles.contentBox}>
    <MakeModalUpload />
  </div>)
};

export default MakeModalContent;
