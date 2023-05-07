import { useEffect, useState } from "react";
import styles from "../../styles/Main/mainSection01.module.css";
import ImageArray from "./ImageArray";

const MainSection01 = () => {
  const [order, setOrder] = useState(false);

  const imgArr = ["a","b","c","d","e","f","g"];
  useEffect(() => {
    setOrder(true);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setOrder(!order);
    }, 10000);
  }, [order]);
  return (
    <section className={styles.sectionContainer01}>
      <article className={styles.contentSection}>
        {order ? (
          <p>오늘 하루 식단을 기록해보세요</p>
        ) : (
          <p>모두와 정보를 공유해보세요</p>
        )}
      </article>
      <article className={styles.pictureSection}>
        {imgArr.map(value=>{
          return <ImageArray props={value} />
        })}
      </article>
    </section>
  );
};

export default MainSection01;
