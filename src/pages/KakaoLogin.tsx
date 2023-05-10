import axios from "axios";
import React, { useEffect } from "react";
import useCookies from "react-cookie/cjs/useCookies";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";

const KakaoLogin = () => {
  const PARAMS = new URL(document.location.href).searchParams;
  const CODE = PARAMS.get("code");
  const [accessCookie,setAccessCookie] = useCookies(['accessToken'])
  const [refreshCookie,setRefreshCookie] = useCookies(['refreshToken'])
  const navigate = useNavigate()

  useEffect(() => {
    kakaologinHandler()
  }, []);

  const kakaologinHandler = async() =>{
    await axios
    .get(`http://52.79.35.132:8080/api/auth/kakao/callback?code=${CODE}`)
    .then((res) => {
        setAccessCookie("accessToken", res.data.accessToken);
        setRefreshCookie("refreshToken", res.data.refreshToken);
        // navigate("/main", { replace: true });
    })
    .catch((err) => {
        console.log(err)
        alert("카카오 로그인에 실패하였습니다")
        navigate("/",{ replace: true })
    });
  }
  return <div></div>;
};

export default KakaoLogin;