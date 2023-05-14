import styles from "../../styles/board/mainBoard.module.css";

type props = {
    listItem: {
        postId: string;
        postImageUrls: string;
        postLikeCounts: string;
        commentCounts: string;
        mealCount: string;
        nuKcal: string;
      };
}

const PostItem = ({listItem}:props) => {

  return (
    <div className={styles.postItem}>
        <img src={listItem.postImageUrls} alt="" />
    </div>
  );
};

export default PostItem;
