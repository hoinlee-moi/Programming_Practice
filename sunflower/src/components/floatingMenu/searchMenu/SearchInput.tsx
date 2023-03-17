import { useState } from "react";
import styles from "./SearchMenu.module.css";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  
  return (
    <div className={styles.searchInputBox}>
      <label htmlFor="searchInput">
        <img src={`${process.env.PUBLIC_URL}/assets/searchBtn.png`} />
      </label>
      <input
        id="searchInput"
        type="search"
        placeholder="검색"
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
