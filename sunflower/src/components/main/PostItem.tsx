import { PostItemProps } from "../../etc/TypeColletion";
import styles from "./PostList.module.css";

const PostItem = ({ idx, item }: PostItemProps) => {
  console.log(item);
  return (
    <div className={styles.postItemBoxRight} key={idx}>
      <div>{item.postImageUrls}</div>
      <div>
        {/* 마우스 호버링시 */}
        <div>
            <p>{item.postLikeCounts}</p>
            <p>{item.commentCounts}</p>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
