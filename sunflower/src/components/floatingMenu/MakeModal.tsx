import React, { useState, useEffect,useCallback } from "react";
import { useRecoilState } from "recoil";
import { MakeModalProps } from "../../etc/TypeColletion";
import AlertModal from "../AlertModal";
import { UploadFiles } from "../Recoil/RecoilState";
import styles from "./FloatingMenu.module.css";
import MakeModalContent from "./MakeModalContent";

const MakeModal = ({ closeModal, anime }: MakeModalProps) => {
  const [uploadedImages,setUploadedImages] = useRecoilState(UploadFiles)
  const [modalAlert, setModalAlert] = useState(false);
  const closeCheckRepeat = useCallback((e:React.MouseEvent<HTMLButtonElement>) => {
    const target = (e.target as HTMLDivElement).textContent
    if(target!=="확인"){
      setModalAlert(true)
      return;
    }
    setModalAlert(false)
    closeModal()
    setUploadedImages([])
  },[modalAlert])
  const closeCheckHandle = useCallback(() => {
    if (uploadedImages.length>0) {
      setModalAlert(true);
    } else {
      closeModal()
    };
  },[uploadedImages]);

  return (
    <section
      className={`${styles.modal} ${anime && styles.onModal}`}
      onMouseDown={closeCheckHandle}
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
          <MakeModalContent />
        </div>
        {modalAlert && (
          <AlertModal
            closeModal={() => setModalAlert(!modalAlert)}
            buttonFunc={closeCheckRepeat}
          >
            글쓰기를 취소 할까요?
          </AlertModal>
        )}
      </div>
    </section>
  );
};
export default React.memo(MakeModal);
