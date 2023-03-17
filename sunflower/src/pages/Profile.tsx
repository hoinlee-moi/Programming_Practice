import { useRecoilValue } from "recoil";
import { FloatingMenuWidth } from "../components/Recoil/RecoilState";
import FloatingMenu from "../components/floatingMenu/FloatingMenu";
import ProfileBox from "../components/profile/ProfileBox";
import ProfileList from "../components/profile/ProfileList";

import styles from "../components/profile/Profile.module.css"

const Profile = () => {
  const menuWidth = useRecoilValue(FloatingMenuWidth);
  
  return (
    <>
      <FloatingMenu />
      <div className={styles.profileWrap} style={{ marginLeft: `${menuWidth}px` }}>
        <ProfileBox/>
        <ProfileList />
      </div>
    </>
  );
};

export default Profile;
