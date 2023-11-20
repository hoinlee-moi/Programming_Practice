import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../../styles/main/floatingMenu.module.css";
import { faMagnifyingGlass, faXmark } from "@fortawesome/free-solid-svg-icons";
type props = {
    onState:boolean
  closeSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

const FloatingSearch = ({ onState,closeSearch }: props) => {
    
  return (
    <div className={`${styles.searchWrap} ${onState&&styles.searchWrapOn}`}>
        <span onClick={()=>closeSearch(false)}>
          <FontAwesomeIcon icon={faXmark} />
        </span>
        <h2>검색</h2>
      <article className={styles.searchInput}>
        <input type="text" />
        <span>
          <FontAwesomeIcon icon={faMagnifyingGlass}/>
        </span>
      </article>
      <article className={styles.searchContent}>
        <h3>최근 검색 항목</h3>
        <div className={styles.searchList}>
        </div>
      </article>
    </div>
  );
};

export default FloatingSearch;
