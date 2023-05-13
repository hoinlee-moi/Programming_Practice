import styles from "../../styles/main/floatingMenu.module.css";
type props = {
    onState:boolean
  closeSearch: React.Dispatch<React.SetStateAction<boolean>>;
};

const FloatingSearch = ({ onState,closeSearch }: props) => {
    
  return (
    <div className={`${styles.searchWrap} ${onState&&styles.searchWrapOn}`}>
        <span onClick={()=>closeSearch(false)}/>
        <h2>검색</h2>
      <article className={styles.searchInput}>
        <input type="text" />
        <span/>
      </article>
      <article className={styles.searchContent}>
        <h3>검색 결과</h3>
        <div className={styles.searchList}>

        </div>
      </article>
    </div>
  );
};

export default FloatingSearch;
