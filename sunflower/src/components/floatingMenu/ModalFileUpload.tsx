import React, { useState, useRef, useEffect } from "react";
import styles from "./FloatingMenu.module.css"

const ModalFileUpload = () => {
  const [uploadedImages, setUploadedImages] = useState<any>([]);
  const [previewImages, setPreviewImages] = useState([]);
  const uploadBoxRef = useRef<HTMLLabelElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  console.log(uploadedImages)
  const max = 5
  useEffect(() => {
    const uploadBox = uploadBoxRef.current;
    const input = inputRef.current;
    
    const handleFiles = (files:any) => {
      for (const file of files) {
        if (!file.type.startsWith("image/")) continue;
        const reader = new FileReader();
        reader.onloadend = (e) => {
          const result = e.target?.result;
          if (result) {
            setUploadedImages((state:any) => [...state, result].slice(0, max));
          }
        };
        reader.readAsDataURL(file);
      }
    };
    
    const changeHandler = (e:any) => {
      const files = e.target.files;
      handleFiles(files);
    };
    
    const dropHandler = (e:any) => {
      e.preventDefault();
      e.stopPropagation();
      const files = e.dataTransfer.files;
      handleFiles(files);
    };
    
    const dragOverHandler = (e:any) => {
      e.preventDefault();
      e.stopPropagation();
    };
    
    uploadBox?.addEventListener("drop", dropHandler);
    uploadBox?.addEventListener("dragover", dragOverHandler);
    input?.addEventListener("change", changeHandler);
    
    return () => {
      uploadBox?.removeEventListener("drop", dropHandler);
      uploadBox?.removeEventListener("dragover", dragOverHandler);
      input?.removeEventListener("change", changeHandler);
    };
  }, [max]);

  return (
    <div className={styles.imageUploadBox}>
      <label htmlFor="id" className={styles.dragUploadBox} ref={uploadBoxRef}>
        <div className={styles.iconBox}>
          <i className={styles.uploadIcon}></i>
        </div>
        <div className={styles.testBox}>
        <h3>사진을 이곳에 끌어다 놓으세요</h3>
        <span>최대 5장, 사진당 몇mb이하</span>
        </div>
      </label>
      <input type="file" multiple accept="image/*" ref={inputRef} />
    </div>
  );
};

export default ModalFileUpload;
