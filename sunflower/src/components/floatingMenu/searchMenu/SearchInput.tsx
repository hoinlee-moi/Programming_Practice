import axios from "axios";
import { useState } from "react";
import { getCookie } from "../../../etc/Cookie";
import styles from "./SearchMenu.module.css";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  let page =1
  const searchHandler = async () => {
    console.log(searchValue);
    await axios
      .get(
        `http://52.79.35.132:8080/search-posts?keyword=${searchValue}&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${getCookie("accessToken")}`,
          },
        }
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.searchInputBox}>
      <label htmlFor="searchInput">
        <img src={`${process.env.PUBLIC_URL}/assets/searchBtn.png`} />
      </label>
      <input
        type="search"
        placeholder="검색"
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button
        style={{ display: "none" }}
        id="searchInput"
        onClick={searchHandler}
      ></button>
    </div>
  );
};

export default SearchInput;
