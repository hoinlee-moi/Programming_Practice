import { useRecoilState, useRecoilValue } from "recoil"
import { FloatingMenuWidth } from "../Recoil/RecoilState"
import styles from "./PostList.module.css"

const PostList = () => {
    const menuWidth = useRecoilValue(FloatingMenuWidth)

    return <div className={styles.postListContianer} style={{marginLeft:`${menuWidth}px`}}>

    </div>
}

export default PostList