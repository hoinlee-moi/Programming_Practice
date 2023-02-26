import { AlertModalPorps } from "../etc/TypeColletion";
import styles from "./AlertModal.module.css"

const AlertModal = ({closeModal,children}:AlertModalPorps) => {
      return (
        <div className={styles.Modal} onClick={closeModal}>
          <div className={styles.modalBody} onClick={(e) => e.stopPropagation()}>
            <p>{children}</p>
            <button className={styles.modalCloseBtn} onClick={closeModal}>
              닫기
            </button>
          </div>
        </div>
      );
    }


export default AlertModal