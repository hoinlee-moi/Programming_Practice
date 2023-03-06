import { AlertModalPorps } from "../etc/TypeColletion";
import styles from "./AlertModal.module.css";

const AlertModal = ({ closeModal, children, buttonFunc }: AlertModalPorps) => {
  return (
    <div className={styles.modalBack}>
    <div className={styles.Modal} onClick={closeModal}>
      <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
        <p>{children}</p>
        <div className={styles.buttonBox}>
          {buttonFunc && (
            <button value="확인" className={styles.modalCloseCheckBtn} onClick={(e)=>buttonFunc(e)}>
              확인
            </button>
          )}
          <button className={styles.modalCloseBtn} onClick={closeModal}>
            닫기
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AlertModal;
