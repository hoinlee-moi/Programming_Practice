import { useEffect, useState } from "react";
import styles from "../../styles/main/mainSection01.module.css";
import ImageArray from "./ImageArray";

const MainSection01 = () => {
  const [order, setOrder] = useState(false);

  const imgArr = ["a", "b", "c", "d", "e", "f", "g"];
  useEffect(() => {
    setOrder(true);
  }, []);
  useEffect(() => {
    if (!order) {
      setOrder(true);
    } else {
      setTimeout(() => {
        setOrder(false);
      }, 16800);
    }
  }, [order]);
  return (
    <section className={styles.sectionContainer01}>
      {order && (
        <article className={styles.contentSection}>
          <p>오늘 하루 식단을 기록해보세요</p>
          <p>모두와 정보를 공유해보세요</p>
        </article>
      )}
      {order && (
        <article className={styles.pictureSection}>
          <div className={styles.picture1}>
            {imgArr.map((value) => {
              return <ImageArray props={value} order={true} key={value} />;
            })}
          </div>
          <div className={styles.picture2}>
            {imgArr.map((value) => {
              return <ImageArray props={value} order={false} key={value} />;
            })}
          </div>
        </article>
      )}
      <article className={styles.blurSection}>
        <div>
          <p>스크롤을 아래로 내려주세요</p>
        </div>
      </article>
    </section>
  );
};

export default MainSection01;
