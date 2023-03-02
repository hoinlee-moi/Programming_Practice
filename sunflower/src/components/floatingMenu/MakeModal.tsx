import { MakeModalProps } from "../../etc/TypeColletion";
import styles from "./FloatingMenu.module.css";

const MakeModal = ({ closeModal,anime }: MakeModalProps) => {

  return (
    <section className={`${styles.modal} ${anime?styles.onModal:""}`} onClick={closeModal}>
      <div className={`${styles.content} ${anime?styles.onContent:""}`}></div>
    </section>
  );
};
export default MakeModal;
