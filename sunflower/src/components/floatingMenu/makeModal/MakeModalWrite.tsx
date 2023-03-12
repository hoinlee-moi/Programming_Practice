import axios from "axios";
import React, { useState } from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import { getCookie } from "../../../etc/Cookie";
import { Foodnutrient } from "../../../etc/TypeColletion";
import useAlert from "../../../hooks/useAlert";
import MyButton from "../../MyButton";
import { CreateContentsData, CreateMenuData } from "../../Recoil/RecoilState";

import styles from "./MakeModal.module.css";

const MakeModalWrite = () => {
  const [content, setContent] = useRecoilState(CreateContentsData);
  const [foodName, setFoodName] = useState("");
  const [foodSubNU, setFoodSubMenu] = useRecoilState(CreateMenuData);
  const [foodList, setFoodList] = useState<any>([]);
  const [searchAlert, setSearchAlert] = useAlert(false);
  const [alertMs, setAlertMs] = useState("");

  const foodCalSearch = async () => {
    if (foodName.trim().length < 1||!foodName) {
      setAlertMs("음식 이름을 입력해주세요");
      setSearchAlert();
      return;
    }
    if (foodList.length >= 15) {
      setAlertMs("음식은 최대 15개까지 가능합니다");
      setSearchAlert();
      return;
    }
    await axios
      .get(
        `http://15.165.19.237:8080/posts/search-nutrition?keyword=${foodName}`,
        {
          headers: {
            Authorization: `Bearer ${getCookie("accessToken")}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        setFoodList((snap: any) => [...snap, res.data]);
        foodCalSub(res.data);
      })
      .catch((err) => {
        console.log("푸드칼로리에러", err);
        setAlertMs("찾으시는 음식 정보가 없습니다");
        setSearchAlert();
      });
    setFoodName("");
  };

  const enterKeyEvent = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") foodCalSearch();
  };

  const foodCalSub = async (data:Foodnutrient) => {
    let food:Foodnutrient;
    if(foodList.lenght>0) food = foodList[foodList.length - 1]
    else food = data
    setFoodSubMenu((snap) => {
      return {
        menuList: [...snap.menuList, food.foodName],
        nuCarbs: snap.nuCarbs + parseInt(food.nuCarbs),
        nuProtein: snap.nuProtein + parseInt(food.nuProtein),
        nuFat: snap.nuFat + parseInt(food.nuFat),
        nuKcal: snap.nuKcal + parseInt(food.nuKcal),
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
      <div>
        <ol>
          {foodList.map((item:any)=>{
            return <li>{item.foodName}</li>
          })}
        </ol>
      </div>
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
