import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";

import { FloatingMenuWidth } from "../Recoil/RecoilState";
import styles from "./FloatingMenu.module.css";
import MyButton from "../MyButton";
import MakeModal from "./makeModal/MakeModal";
import SearchMenu from "./searchMenu/SearchMenu";

const FloatingMenu = () => {
  const navigate = useNavigate();
  const containeRef = useRef<HTMLDivElement>(null);

  const [makeModal, setMakeModal] = useState(false);
  const [searchMenu, setSearchMenu] = useState(false)
  const setWidth = useSetRecoilState<number | undefined>(FloatingMenuWidth);
  useEffect(() => {
    setWidth(containeRef.current?.clientWidth);
  }, []);

  //검색 만들기
  //만들기 버튼 누를 시 모달창 띄우기

  return (
    <>
      {makeModal && <MakeModal closeModal={() => setMakeModal(!makeModal)} />}
      <SearchMenu closeSearch={()=>setSearchMenu(!searchMenu)} closeState={searchMenu} />
      <div className={`${styles.menuContainer} ${searchMenu&&styles.menuContainerSearch}`} ref={containeRef}>
        <div className={styles.searchContainer}></div>
        <div className={styles.logoBox}>해바라기 로고</div>
        {/* 로고 클릭시 홈으로 */}
        <div className={styles.allMenuBox}>
          <div className={styles.homeBox}>
            <MyButton className={styles.home} onClick={() => navigate("/main")}>
              홈버튼
            </MyButton>
          </div>
          <div className={styles.searchBox}>
            <MyButton
              className={styles.search}
              onClick={() => setSearchMenu(!searchMenu)}
            >
              검색버튼
            </MyButton>
          </div>
          <div className={styles.makeBox}>
            <MyButton
              className={styles.search}
              onClick={() => setMakeModal(!makeModal)}
            >
              만들기버튼
            </MyButton>
          </div>
          <div className={styles.profileBox}>
            <MyButton
              className={styles.profile}
              onClick={() => navigate("/profile/유저아이디")}
            >
              프로필버튼
            </MyButton>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingMenu;
