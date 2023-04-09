import { useSetRecoilState } from "recoil";
import { DetailItemModal } from "../Recoil/RecoilState";
import styles from "./DetailItem.module.css";

const DetailItem = () => {
  const closeModal = useSetRecoilState(DetailItemModal)
  // `${process.env.PUBLIC_URL}/assets/foodCalIcon.png`
  return (
    <section className={styles.modalBackground} onMouseDown={()=>closeModal(false)}>
      <div
        className={styles.modalContainer}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className={styles.modalWrap}>
          <div className={styles.modalImageContainer}></div>
          <div className={styles.modalContentContainer}></div>
        </div>
      </div>
    </section>
  );
};

export default DetailItem;
