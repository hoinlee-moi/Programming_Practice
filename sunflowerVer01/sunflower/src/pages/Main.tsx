import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import FloatingMenu from "../components/floatingMenu/FloatingMenu";
import PostList from "../components/main/PostList";
import { UserData, UserEmail } from "../components/Recoil/RecoilState";
import { getCookie } from "../etc/Cookie";

const Main = () => {
  const navigate = useNavigate()
  const userEmail = useRecoilValue(UserEmail)
  const userData = useSetRecoilState(UserData)
  console.log(userEmail)
  useEffect(()=>{   
      window.onbeforeunload = () => {
        window.scrollTo(0, 0);
      };
    userDataLoad()
  },[])

  const userDataLoad = async() => {
    if(getCookie("accessToken") !=="") {
      await axios.get(`http://52.79.35.132:8080/users/이호인`,{
        headers: {
          Authorization: `Bearer ${getCookie("accessToken")}`,
        },
      }).then(res=>{
        console.log(res.data)
        userData(res.data)
      }).catch(err=>{
        console.log(err)
      })
    } else{
      console.log(userEmail)
    }
  }
  return (
    <div>
      <FloatingMenu />
      <PostList />
    </div>
  );
};

export default Main;
