import React, { useState, useEffect } from "react";

// import ControlMenu from "./ControlMenu";
import MyButton from "./MyButton";
import { useNavigate } from "react-router-dom";
import DiaryItem from "./DiaryItem";
const sortOption = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];
const filterOptionList = [
  { value: "all", name: "전부다" },
  { value: "good", name: "좋은 감정만" },
  { value: "bad", name: "나쁜 감정만" },
];

const ControlMenu = React.memo(({ value, onChange, optionList }) => {
  return (
    <select className="ControlMenu" defaultValue={value} onChange={(e) => onChange(e.target.value)}>
      {optionList.map((it, idx) => {
        return (
          <option key={idx} value={it.value}>
            {it.name}
          </option>
        );
      })}
    </select>
  );
});

const DiaryList = ({ diaryList }) => {
  const navigate = useNavigate();
  const [sortType, setSortType] = useState("latest");
  const [filter, setFilter] = useState("all");

  const getProcessedDiaryList = () => {
    const filterCallBack = (item) => {
      if (filter === "good") {
        return parseInt(item.emotion) <= 3;
      } else {
        return parseInt(item.emotion) > 3;
      }
    };

    const copyList = JSON.parse(JSON.stringify(diaryList));

    const filteredList = filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));
    const sortedList = filteredList.sort((a, b) => {
      if (sortType === "latest") {
        return parseInt(b.date) - parseInt(a.date);
      } else {
        return parseInt(a.date) - parseInt(b.date);
      }
    });
    return sortedList;
  };

  return (
    <div className="DiaryList">
      <div className="menu_wrapper">
        <div className="left_col">
          <ControlMenu value={sortType} onChange={setSortType} optionList={sortOption} />
          <ControlMenu value={filter} onChange={setFilter} optionList={filterOptionList} />
        </div>
        <div className="right_col">
          <MyButton type={"positive"} text={"새 일기 쓰기"} onClick={() => navigate("/new")} />
        </div>
      </div>

      {getProcessedDiaryList().map((it) => (
        <DiaryItem key={it.id} {...it} />
      ))}
    </div>
  );
};

DiaryList.defaultProps = {
  diarylList: [],
};

export default DiaryList;
