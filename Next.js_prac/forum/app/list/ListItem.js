"use client";

import Link from "next/link";
import { useEffect } from "react";
import DetailLink from "./DetailLink";

export default function ListItem({ result }) {
  return (
    <div>
      {result.map((item, idx) => {
        return (
          <div className="list-item" id={idx} key={item._id}>
            <Link prefetch={false} href={`/detail/${item._id}`}>
              <h4>{item.title}</h4>
            </Link>
            <Link href={`/edit/${item._id}`}>✏️</Link>
            <span
              onClick={(e) => {
                // fetch("/api/post/delete", {
                //   method: "POST",
                //   body: item._id,
                // }).then((r)=>{
                //     if(r.status == 200) {
                //       return r.json()
                //     } else {
                //       //서버가 에러코드전송시 실행할코드
                //     }
                //   })
                //   .then((result)=>{ 
                //     //성공시 실행할코드
                //     e.target.parentElement.style.opacity = 0;
                //     setTimeout(()=>{
                //         e.target.parentElement.style.display = "none"
                //     },1000)
                //   }).catch((error)=>{
                //     //인터넷문제 등으로 실패시 실행할코드
                //     console.log(error)
                //   });
                // fetch(`/api/abc/hihihi`)
              }}
            >
              🗑️
            </span>
            <p>{item.content}</p>
            <DetailLink />
          </div>
        );
      })}
    </div>
  );
}
