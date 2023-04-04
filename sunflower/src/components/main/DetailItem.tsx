import { DetailItemProps } from "../../etc/TypeColletion";
import styles from "./DetailItem.module.css";

const DetailItem = ({ closeModal }: DetailItemProps) => {
  return (
    <section className={styles.modalBackground} onMouseDown={closeModal}>
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
