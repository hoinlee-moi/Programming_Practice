import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { UserEmail } from "../components/Recoil/RecoilState";
import { setCookie } from "../etc/Cookie";

const KakaoLogin = () => {
  const PARAMS = new URL(document.location.href).searchParams;
  const CODE = PARAMS.get("code");
  const navigate = useNavigate()
  const userEmail = useSetRecoilState(UserEmail)
  useEffect(() => {
    kakaologinHandler()
  }, []);

  const kakaologinHandler = async() =>{
    await axios
    .get(`http://52.79.35.132:8080/api/auth/kakao/callback?code=${CODE}`)
    .then((res) => {
        userEmail(res.data.emailId);
        setCookie("accessToken", res.data.accessToken);
        setCookie("refreshToken", res.data.refreshToken);
        navigate("/main", { replace: true });
    })
    .catch((err) => console.log(err));
  }
  return <div></div>;
};

export default KakaoLogin;
