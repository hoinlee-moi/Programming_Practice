import React, { useRef, useEffect, useState } from "react";

import styles from "../styles/main/main.module.css";
import MainSection01 from "../components/mainComponents/MainSection01";
import MainSection02 from "../components/mainComponents/MainSection02";
import MainSection03 from "../components/mainComponents/MainSection03";

const Main = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;
      setIsScrolling(true);
      const { deltaY } = e;
      if (containerRef.current) {
        const { scrollTop } = containerRef.current;
        const pageHeight = window.innerHeight;
        if (deltaY > 0) {
          if (scrollTop === pageHeight * 2) {
            scrollEnd();
            return;
          }
          containerRef.current.scrollTo({
            top: pageHeight * (Math.floor(scrollTop / pageHeight) + 1),
            behavior: "smooth",
          });
        } else {
          if (scrollTop === 0) {
            scrollEnd();
            return;
          }
          containerRef.current.scrollTo({
            top: scrollTop - pageHeight,
            left: 0,
            behavior: "smooth",
          });
        }
        scrollEnd();
      }
    };
    const containerRefCurrent = containerRef.current;
    containerRefCurrent?.addEventListener("wheel", wheelHandler);
    return () => {
      containerRefCurrent?.removeEventListener("wheel", wheelHandler);
    };
  }, [isScrolling]);

  const scrollEnd = () => {
    setTimeout(() => {
      setIsScrolling(false);
    }, 1000);
  };
  return (
    <div ref={containerRef} className={styles.container}>
      <header>
        <article className={styles.logoBox}>
          <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} />
        </article>
        <article className={styles.signUpBox}>
          <button>로그인</button>
          <button>회원가입</button>
        </article>
      </header>
      <MainSection01 />
      <MainSection02 />
      <MainSection03 />
    </div>
  );
};

export default Main;
