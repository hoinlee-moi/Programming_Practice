import { MakeModalProps } from "../../etc/TypeColletion";
import styles from "./FloatingMenu.module.css";
import ModalFileUpload from "./ModalFileUpload";

const MakeModal = ({ closeModal, anime }: MakeModalProps) => {
  return (
    <section
      className={`${styles.modal} ${anime && styles.onModal}`}
      onMouseDown={closeModal}
    >
      <div
        className={`${styles.content} ${anime && styles.onContent}`}
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className={styles.modalContentBox}>
          <div className={styles.modalTitle}>
            <p>새 게시물 만들기</p>
          </div>
          <ModalFileUpload />
        </div>
      </div>
    </section>
  );
};
export default MakeModal;
