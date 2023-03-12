
import { SearchMenuProps } from "../../../etc/TypeColletion";
import SearchInput from "./SearchInput";
import styles from "./SearchMenu.module.css";

const SearchMenu = ({ closeSearch, closeState }: SearchMenuProps) => {
  return (
    <div
      className={`${styles.searchContainer} ${
        closeState && styles.searchContainerOn
      }`}
    >
      <div className={styles.searchBox}>
        <div className={styles.searchCloseBtn}>
          <label htmlFor="searchCloseBtn">
            <img src={process.env.PUBLIC_URL + `assets/closeButton.png`} />
          </label>
          <button onClick={closeSearch} id="searchCloseBtn"></button>
        </div>
        <div className={styles.searchTitleBox}>
          <h3>검색</h3>
        </div>
        <SearchInput />
      </div>
      <div>{/* 검색된 글 데이터 띄워주기 */}</div>
    </div>
  );
};

export default SearchMenu;
