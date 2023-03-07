import React, { useState, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { MyCanvasProps } from "../etc/TypeColletion";
import { UploadFiles } from "./Recoil/RecoilState";

const MyCanvas = ({imageSrc}:MyCanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    // console.log(imageSrc,canvasRef)
    useEffect(() => {
        if (!canvasRef) return;
        const ctx = canvasRef.current?.getContext("2d");
        const image = new Image();
        image.src = imageSrc 
        
        image.onload = function() {
            ctx?.drawImage(image, 0, 0);
          };
      }, [canvasRef]);
    return <canvas ref={canvasRef} />
}

export default MyCanvas