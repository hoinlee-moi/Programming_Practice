import { DetailItemProps } from "../../etc/TypeColletion";
import styles from "./DetailItem.module.css";

const DetailItem = ({ closeModal }: DetailItemProps) => {
  return <section className={styles.modalBackground}>
    <div className={styles.modalContainer}></div>
  </section>;
};

export default DetailItem;
