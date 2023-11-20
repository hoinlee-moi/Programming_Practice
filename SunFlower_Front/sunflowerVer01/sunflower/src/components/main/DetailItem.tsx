import { useSetRecoilState } from "recoil";
import { DetailItemModal } from "../Recoil/RecoilState";
import styles from "./DetailItem.module.css";

const DetailItem = () => {
  const closeModal = useSetRecoilState(DetailItemModal)
  // `${process.env.PUBLIC_URL}/assets/foodCalIcon.png`
  /*
  게시글을 클릭 했을 경우
  모달창이 띄어 지며 정보가 도착해야 한다.
  정보는 postItem에서 클릭 됏을 때 상태관리를 통해 recoil에 현재 item의 idx를 넘겨주고
  idx를 통해 item에서 가져온다
  또는 다른 스테이트 값을 통해 클릭 했을 경우 스테이트 값을 변경하여 집어넣고
  모달 창에 닫힐 때 detail 스테이트는 초기화 시킨다
  */
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
