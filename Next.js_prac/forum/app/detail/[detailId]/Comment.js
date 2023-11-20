"use client";

import { useState } from "react";

export default function Comment({ parentId }) {
  let [comment, setComment] = useState("");

  

  return (
    <div>
      <div>댓글 목록 보여줄 부분</div>
      <input
        type="text"
        onChange={(e) => {
          setComment(e.target.value);
        }}
      />
      <button
        onClick={() => {
          fetch("/api/comment/new", {
            method: "POST",
            body: JSON.stringify({ comment: comment, _id: parentId }),
          });
        }}
      >
        댓글 전송
      </button>
    </div>
  );
}
