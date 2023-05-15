import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/main/floatingMenu.module.css";
import FloatingSearch from "./FloatingSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseChimney,
  faMagnifyingGlass,
  faPencil,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

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
          {searchState ? (
            <FontAwesomeIcon icon={faUtensils} />
          ) : (
            <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} />
          )}
        </div>
        <div
          className={
            searchState ? styles.menuListBoxSearch : styles.menuListBox
          }
        >
          <article>
            <div onClick={() => navigate("/main")}>
              <FontAwesomeIcon icon={faHouseChimney} />
              <p>홈</p>
            </div>
            <div
              onClick={() => {
                setSearchState(!searchState);
              }}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <p>검색</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faPencil} />
              <p>글쓰기</p>
            </div>
            <div onClick={() => navigate("/main/profile")}>
              <FontAwesomeIcon icon={faUser} />
              <p>프로필</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default FloatingMenu;
