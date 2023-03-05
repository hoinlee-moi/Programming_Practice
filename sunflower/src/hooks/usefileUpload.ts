import { useRecoilValue } from 'recoil';
import { UploadFiles } from './../components/Recoil/RecoilState';
import { useRecoilState } from 'recoil';
import React, { useState, useCallback } from "react";

export default (initalValue: any) => {
  const [uploadedImages, setUploadedImages] = useRecoilState<any>(UploadFiles)
  // const [uploadedImages, setUploadedImages] = useState(initalValue.list);
  const handleFiles = useCallback(
    (files: FileList) => {
      if (files.length > initalValue.max) return;
      for (const file of files) {
        if (!file.type.startsWith("image/")) continue;
        const reader = new FileReader();
        reader.onloadend = (e) => {
          const result = e.target?.result;
          if (result) {
            setUploadedImages((state:any)=>[...state, result].slice(0, initalValue.max));
          }
        };
        reader.readAsDataURL(file);
      }
    },
    [uploadedImages]
  );

  return [uploadedImages, handleFiles];
};
