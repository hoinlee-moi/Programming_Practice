"use client";

import { useState } from "react";

export default function Comment() {
    let [comment,setComment] = useState('')
  return (
    <div>
      <div>댓글 목록 보여줄 부분</div>
      <input type="text" onChange={(e)=>{setComment(e.target.value)}}/>
      <button onClick={()=>{
        console.log(comment)
        fetch('/URL',{method:'POST',body:comment})
      }}>댓글 전송</button>
    </div>
  );
}
