import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import styles from "./FloatingMenu.module.css";

const ModalFileUpload = () => {
  const [uploadedImages, setUploadedImages] = useState<any>([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [uploadAlert, setUploadAlert] = useState(false);
  const uploadBoxRef = useRef<HTMLLabelElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const max = 5;
  useEffect(() => {
    const uploadBox = uploadBoxRef.current;
    const input = inputRef.current;

    const handleFiles = (files: any) => {
      console.log("업로드 이미지 개수", files, uploadedImages);
      if (uploadedImages.length >= 5 || files.length > 5) {
        console.log("여기 들어오긴함?");
        setUploadAlert(true);
        setTimeout(() => {
          setUploadAlert(false);
        }, 5000);
        return;
      }
      for (const file of files) {
        if (!file.type.startsWith("image/")) continue;
        const reader = new FileReader();
        reader.onloadend = (e) => {
          const result = e.target?.result;
          if (result) {
            setUploadedImages((state: any) => [...state, result].slice(0, max));
          }
        };
        reader.readAsDataURL(file);
      }
    };

    const changeHandler = (e: any) => {
      const files = e.target.files;
      handleFiles(files);
    };

    const dropHandler = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const files = e?.dataTransfer?.files;
      handleFiles(files);
    };

    const dragOverHandler = (e: DragEvent) => {
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
  }, [uploadedImages]);

  return (
    <div className={styles.imageUploadBox}>
      <label htmlFor="" className={styles.dragUploadBox} ref={uploadBoxRef}>
        <div className={styles.iconBox}>
          <img
            className={styles.uploadIcon}
            src={process.env.PUBLIC_URL + `/assets/uploadIcon.png`}
          />
        </div>
        <div className={styles.textBox}>
          <h3>사진을 이곳에 끌어다 놓으세요</h3>
          <span>최대 5장, 사진당 몇mb이하</span>
        </div>
        <label htmlFor="fileUpload" className={styles.fileUploadlabel}>
          컴퓨터에서 선택
        </label>
        <input
          type="file"
          id="fileUpload"
          multiple
          accept="image/*"
          ref={inputRef}
        />
      </label>
      <div
        className={`${styles.uploadAlert} ${
          uploadAlert && styles.uploadAlertOff
        }`}
      >
        <p>이미지는 최대 5장까지만 가능합니다</p>
      </div>
    </div>
  );
};

export default ModalFileUpload;
