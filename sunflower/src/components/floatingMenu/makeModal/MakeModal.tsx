import axios from "axios";
import { create } from "domain";
import React, { useState, useEffect, useCallback } from "react";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { getCookie } from "../../../etc/Cookie";
import { MakeModalProps } from "../../../etc/TypeColletion";

import AlertModal from "../../AlertModal";
import MyButton from "../../MyButton";
import {
  UploadFiles,
  CreateContentsData,
  CreateMenuData,
} from "../../Recoil/RecoilState";
import styles from "./MakeModal.module.css";
import MakeModalContent from "./MakeModalContent";

const MakeModal = ({ closeModal }: MakeModalProps) => {
  const postContent = useRecoilValue(CreateContentsData);
  const postMenu = useRecoilValue(CreateMenuData);
  const resetPostContent = useResetRecoilState(CreateContentsData)
  const resetPostMenu = useResetRecoilState(CreateMenuData)
  const uploadedImages = useRecoilValue(UploadFiles);
  const uploadedImagesReset = useResetRecoilState(UploadFiles);
  const [modalAlert, setModalAlert] = useState(false);

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

  const closeCheckRepeat = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      const target = (e.target as HTMLDivElement).textContent;
      if (target !== "확인") {
        setModalAlert(true);
        return;
      }
      setModalAlert(false);
      closeModal();
      uploadedImagesReset();
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
  const createPost = async(data:FormData)=>{
    await axios
      .post("http://52.79.35.132:8080/posts", data, {
        headers: {
            "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
   

  const createPostHandle = () => {
    if (postContent.trim().length < 1 || postMenu.menuList.length < 1) {
      alert("없음!");
      return;
    }
    const createFormData = new FormData()
    const newPostData = {
      postContents : postContent,
      mealCount:"ONE_MEAL",
      ...postMenu,
    };
    for(const[key,value]of Object.entries(newPostData)){
      createFormData.append(key,value.toString())
    }
    uploadedImages.forEach((item:any)=>{
      createFormData.append('files',item)
    })
    createPost(createFormData)
    closeModal()
    resetPostContent()
    resetPostMenu()
  };


  return (
    <section className={styles.modal} onMouseDown={closeCheckHandle}>
      <div
        className={`${styles.content} ${
          uploadedImages.length > 0 && styles.modalWrite
        }`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className={styles.modalContentBox}>
          {uploadedImages.length > 0 && (
            <MyButton
              onClick={createPostHandle}
              className={styles.createPostBtn}
            >
              작성
            </MyButton>
          )}
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
