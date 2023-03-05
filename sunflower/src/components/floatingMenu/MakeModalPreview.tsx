import { useRecoilValue } from "recoil"
import { UploadFiles } from "../Recoil/RecoilState"
import styles from "./FloatingMenu.module.css";

const MakeModalPreview = () => {
    const uploadedImages = useRecoilValue(UploadFiles)

    return  (<div className={styles.imageBox}>
        <img src={uploadedImages[0]} alt="" className={styles.image} />
    </div>)
}

export default MakeModalPreview