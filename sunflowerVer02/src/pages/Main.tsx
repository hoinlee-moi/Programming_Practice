import React, { useRef, useEffect, useState } from "react";
import { useRoutes } from "react-router-dom";
import MainBoard from "../components/boardComponents/MainBoard";
import FloatingMenu from "../components/mainComponents/FloatingMenu";
import MainProfile from "../components/profileComponents/MainProfile";
import styles from "../styles/main/main.module.css";

const Main = () => {
  const element = useRoutes([
    { path: "", element: <MainBoard /> },
    { path: "profile", element: <MainProfile /> },
  ]);

  useEffect(() => {
    // 메인화면 접속시 현재 유저의데이터를 세션 스토리지에 저장, 토큰이 있는지 1차로 확인, 서버 연결로 토큰이 올바른지 2차 확인
    window.onbeforeunload = () => {
      window.scrollTo(0, 0);
    };
  }, []);
  return (
    <div className={styles.mainContainer}>
      <FloatingMenu />
      <section className={styles.boardContainer}>{element}</section>
    </div>
  );
};

export default Main;
