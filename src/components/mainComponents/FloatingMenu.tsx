import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/main/floatingMenu.module.css";
import FloatingSearch from "./FloatingSearch";

const FloatingMenu = () => {
  const navigate = useNavigate();
  const [searchState, setSearchState] = useState(false);
  console.log(searchState);
  return (
    <section className={styles.floatingContainer}>
      <FloatingSearch onState={searchState} closeSearch={setSearchState} />
      <div
        className={`${styles.menuWrap} ${searchState && styles.menuWrapOff}`}
      >
        <div className={styles.logoBox}>
          <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} />
        </div>
        <div className={styles.menuListBox}>
          <ul>
            <li onClick={() => navigate("/main")}>홈</li>
            <li
              onClick={() => {
                setSearchState(true);
              }}
            >
              검색
            </li>
            <li>글쓰기</li>
            <li onClick={() => navigate("/main/profile")}>프로필</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FloatingMenu;
