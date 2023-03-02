import styles from "./postList.module.css"

const PostItem = ({idx}:{idx:number}) => {
    return <div className={styles.postItemBoxRight}>
        <div>이미지 파일</div>
    </div>
}

export default PostItem