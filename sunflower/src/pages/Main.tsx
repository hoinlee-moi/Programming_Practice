import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import FloatingMenu from "../components/floatingMenu/FloatingMenu";
import PostList from "../components/main/PostList";
import { UserData, UserEmail } from "../components/Recoil/RecoilState";

const Main = () => {
  const navigate = useNavigate()
  const userEmail = useRecoilValue(UserEmail)
  const userData = useSetRecoilState(UserData)

  useEffect(()=>{
    // userDataLoad()
  },[])

  const userDataLoad = async() => {
    if(userEmail !=="") {
      await axios.get("/api/users/이름").then(res=>{
        userData(res.data)
      }).catch(err=>{
        console.log(err)
      })
    } else{
      alert("로그인이 필요합니다")
      navigate("/login",{ replace: true })
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
