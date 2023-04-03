import { useState } from "react";
import { PostItemProps } from "../../etc/TypeColletion";
import DetailItem from "./DetailItem";
import styles from "./PostList.module.css";

const PostItem = ({ idx, item }: PostItemProps) => {
  const [detailModal, setDetailModal] = useState(false);

  return (
    <div
      className={styles.postItemBox}
      key={idx}
      onClick={() => setDetailModal(!detailModal)}
    >
      <div>{item.postImageUrls}</div>
      <div>
        {/* 마우스 호버링시 */}
        <div>
          <p>{item.postLikeCounts}</p>
          <p>{item.commentCounts}</p>
        </div>
      </div>
      {detailModal && (
        <DetailItem closeModal={() => setDetailModal(!detailModal)} />
      )}
    </div>
  );
};

export default PostItem;
