import { PostItemProps } from "../../etc/TypeColletion"
import styles from "./PostList.module.css"

const PostItem = ({idx,item}:PostItemProps) => {
    return <div className={styles.postItemBoxRight} key={idx}>
        <div>이미지 파일{idx}</div>
    </div>
}

export default PostItem