import FloatingMenu from "../components/floatingMenu/FloatingMenu";
import ProfileBox from "../components/profile/ProfileBox";
import ProfileList from "../components/profile/ProfileList";

const Profile = () => {
  
  return (
    <div className="">
      <FloatingMenu />
      <div className="">
        <ProfileBox/>
        <ProfileList />
      </div>
    </div>
  );
};

export default Profile;
