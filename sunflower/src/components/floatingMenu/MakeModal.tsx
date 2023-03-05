import React, { useState, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { MakeModalProps } from "../../etc/TypeColletion";
import usefileUpload from "../../hooks/usefileUpload";
import { UploadFiles } from "../Recoil/RecoilState";
import styles from "./FloatingMenu.module.css";
import MakeModalContent from "./MakeModalContent";

const MakeModal = ({ closeModal, anime }: MakeModalProps) => {
  const uploadedImages = useRecoilValue(UploadFiles)
  return (
    <section
      className={`${styles.modal} ${anime && styles.onModal}`}
      onMouseDown={closeModal}
    >
      <div
        className={`${styles.content} ${anime && styles.onContent} ${
          uploadedImages.length > 0 && styles.modalWrite
        }`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className={styles.modalContentBox}>
          <div className={styles.modalTitle}>
            <p>새 게시물 만들기</p>
          </div>
          <MakeModalContent/>
        </div>
      </div>
    </section>
  );
};
export default MakeModal;
