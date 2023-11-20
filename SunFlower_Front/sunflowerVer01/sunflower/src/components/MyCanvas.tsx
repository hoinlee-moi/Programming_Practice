import React, { useState, useRef, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { MyCanvasProps } from "../etc/TypeColletion";
import { UploadFiles } from "./Recoil/RecoilState";

const MyCanvas = ({imageSrc}:MyCanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    useEffect(() => {
        if (imageSrc) {
            const reader = new FileReader();
            reader.onload = () => {
              const img = new Image();
              img.onload = () => {
                const canvas = canvasRef.current;
                if (canvas) {
                  canvas.width = img.width;
                  canvas.height = img.height;
                  const ctx = canvas.getContext('2d');
                  if (ctx) {
                    ctx.drawImage(img, 0, 0);
                  }
                }
              };
              img.src = reader.result as string;
            };
            reader.readAsDataURL(imageSrc);
          }
      }, [imageSrc]);
    
    return <canvas ref={canvasRef} />
}

export default MyCanvas



/*
if (!canvasRef) return;
        const ctx = canvasRef.current?.getContext("2d");
        const image = new Image();
        image.src = imageSrc 
        
        image.onload = function() {
            ctx?.drawImage(image, 0, 0);
          };
*/