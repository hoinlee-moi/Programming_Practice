import React, { useState, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { UploadFiles } from "../../Recoil/RecoilState";

import styles from "./MakeModal.module.css";
import MakeModalUpload from "./MakeModalUpload";
import MakeModalWrite from "./MakeModalWrite";

const MakeModalContent = () => {
  const uploadedImages = useRecoilValue(UploadFiles)
  return  (<div className={styles.contentContainer}>
    <MakeModalUpload />
    {uploadedImages.length>0&&<MakeModalWrite />}
  </div>)
};

export default MakeModalContent;
