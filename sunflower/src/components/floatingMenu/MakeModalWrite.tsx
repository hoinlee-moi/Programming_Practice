import axios from "axios";
import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Foodnutrient } from "../../etc/TypeColletion";
import useAlert from "../../hooks/useAlert";
import MyButton from "../MyButton";
import { CreateContentsData, CreateMenuData } from "../Recoil/RecoilState";

import styles from "./FloatingMenu.module.css";

const MakeModalWrite = () => {
  const [content, setContent] = useRecoilState(CreateContentsData);
  const [foodName, setFoodName] = useState("");
  const [foodSubNU, setFoodSubMenu] = useRecoilState(CreateMenuData);
  const [foodList, setFoodList] = useState<any>([]);
  const [searchAlert, setSearchAlert] = useAlert(false);
  const [alertMs, setAlertMs] = useState("");

  const foodCalSearch = async () => {
    if (foodList.length >= 15) {
      setAlertMs("음식은 최대 15개까지 가능합니다.");
      await setSearchAlert();
    }
    setFoodList((snap: any) => [...snap, foodName]);
    setFoodName("");
    await axios
      .get(`http://3.36.57.184/api/posts/search?keyword=${foodName}`)
      .then((res) => {
        console.log(res);
        // foodName : String,
        // nuCarbs : Double,
        // nuProtein : Double,
        // nuFat : Double,
        // nuKcal : Double
        setFoodList((snap: any) => [...snap, res]);
        foodCalSub();
      })
      .catch((err) => {
        console.log("푸드칼로리에러", err);
        setAlertMs("찾으시는 음식 정보가 없습니다");
        setSearchAlert();
      });
  };

  const enterKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") foodCalSearch();
  };

  const foodCalSub = () => {
    const food = foodList[foodList.length - 1];
    setFoodSubMenu((snap) => {
      return {
        menuList: [...snap.menuList,food.foodName],
        nuCarbs: snap.nuCarbs+food.nuCarbs,
        nuProtein: snap.nuProtein+food.nuProtein,
        nuFat: snap.nuFat+food.nuFat,
        nuKcal: snap.nuKcal+food.nuKcal,
      };
    });
  };

  return (
    <div className={styles.writeContainer}>
      <div className={styles.writeBox}>
        <div className={styles.nickNameBox}>
          {/* 플랙스 넣기 */}
          <div className={styles.profileImgBox}>
            <img
              src={process.env.PUBLIC_URL + `/assets/basic_profile.jpg`}
              //   유저 프로필 있으면 사진이 들어가도록 변경
              className={styles.profileImg}
            />
          </div>
          <p className={styles.userNickname}>닉네임</p>
        </div>
        <div className={styles.contentBox}>
          <textarea
            cols={30}
            rows={8}
            maxLength={255}
            autoComplete="off"
            placeholder="내용 입력..."
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
          <p className={styles.textLength}>{`${content.length}/255`}</p>
        </div>
      </div>
      <div className={styles.searchCalBox}>
        <input
          type="text"
          placeholder="음식 추가하기(최대 15개)"
          value={foodName}
          onChange={(e) => setFoodName(e.target.value)}
          onKeyDown={enterKeyEvent}
        />
        <label htmlFor="foodCalPlusBtn" className={styles.foodCalPlus}>
          <img src={process.env.PUBLIC_URL + `assets/foodCalIcon.png`} />
        </label>
        <MyButton id="foodCalPlusBtn" onClick={foodCalSearch}>
          추가
        </MyButton>
      </div>
      <div></div>
      <div
        className={`${styles.uploadAlert} ${
          searchAlert && styles.uploadAlertOff
        }`}
      >
        <p>{alertMs}</p>
      </div>
    </div>
  );
};

export default MakeModalWrite;
