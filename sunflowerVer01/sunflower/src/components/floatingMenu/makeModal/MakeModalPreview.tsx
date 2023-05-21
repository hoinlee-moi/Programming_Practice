import { useRef } from "react";
import { useRecoilValue } from "recoil"
import MyCanvas from "../../MyCanvas";
import { UploadFiles } from "../../Recoil/RecoilState"
import styles from "./MakeModal.module.css";

const MakeModalPreview = () => {
    const uploadedImages = useRecoilValue(UploadFiles)
    const imageBoxSize = useRef<HTMLDivElement>(null)

    return  (<div className={styles.imageBox} ref={imageBoxSize}>
        <MyCanvas imageSrc={uploadedImages[0]} />
    </div>)
}

export default MakeModalPreview