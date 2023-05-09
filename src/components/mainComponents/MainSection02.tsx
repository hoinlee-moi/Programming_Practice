import styles from "../../styles/main/mainSection02.module.css"

const MainSection02 = () => {
  const imgArr = [12,13,14,15]
  return <section className={styles.sectionContainer02}>
    <article>
      <div className={styles.imgBox}>
        <div>
          {imgArr.map(val=>{
            return <img src={`${`${process.env.PUBLIC_URL}/assets/main/main_food_${val}.jpeg`}`} />
          })}
          <div className={styles.imgBoxContent}>
            <p>다이어트 도움되는 점심 식단 </p>
          </div>
        </div>
      </div>
    </article>
    <article>
      <div >여긴 글영역</div>
    </article>
  </section>;
};

export default MainSection02;
