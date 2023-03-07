import React, { useState, useEffect, useCallback } from "react";
import { useRecoilState } from "recoil";
import { MakeModalProps } from "../../etc/TypeColletion";

import AlertModal from "../AlertModal";
import { UploadFiles } from "../Recoil/RecoilState";
import styles from "./FloatingMenu.module.css";
import MakeModalContent from "./MakeModalContent";

const MakeModal = ({ closeModal }: MakeModalProps) => {
  const [uploadedImages, setUploadedImages] = useRecoilState(UploadFiles);
  const [modalAlert, setModalAlert] = useState(false);

  const closeCheckRepeat = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const target = (e.target as HTMLDivElement).textContent;
      if (target !== "확인") {
        setModalAlert(true);
        return;
      }
      setModalAlert(false);
      closeModal();
      setUploadedImages([]);
    },
    [modalAlert, uploadedImages]
  );
  const closeCheckHandle = () => {
    if (uploadedImages.length > 0) {
      setModalAlert(true);
      return;
    }
    closeModal();
  };
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = `
        background-color: #f6f6f6;
        min-height: 100vh;
        margin: 0;
        line-height: 1;`;
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  return (
    <section className={styles.modal} onMouseDown={closeCheckHandle}>
      <div
        className={`${styles.content} ${
          uploadedImages.length > 0 && styles.modalWrite
        }`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className={styles.modalContentBox}>
          <div className={styles.modalTitle}>
            <p>새 게시물 만들기</p>
          </div>
          <MakeModalContent />
        </div>
      </div>
      {modalAlert && (
        <AlertModal
          closeModal={() => setModalAlert(!modalAlert)}
          buttonFunc={closeCheckRepeat}
        >
          글쓰기를 취소 할까요?
        </AlertModal>
      )}
    </section>
  );
};
export default MakeModal;
