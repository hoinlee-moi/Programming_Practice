import { useState } from "react";
import axios from "axios";
import AllButton from "../AllButton";
import UserLoginInput from "./UserLoginInput";

const UserLogin = () => {
  const [loginUserData, setLoginUserData] = useState({
    Email: "",
    Password: "",
  });

  const userInputHandler = (value, name) => {
    setLoginUserData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const formSubmitHandler = async (event) => {
    event.preventDefault();
    setLoginUserData({
      Email: "",
      Password: "",
    });
    // await axios
    //   .post("http://localhost:8080/api/user/login", loginUserData)
    //   .then((res) => console.log(res.status))
    //   .catch((err) => console.log(err));
  };

  return (
    <div className="UserLogin">
      <h2>로그인</h2>
      <form onSubmit={formSubmitHandler}>
        <UserLoginInput value={loginUserData.Email} type="text" placeHolder="Email" userInfo={userInputHandler} />
        <UserLoginInput value={loginUserData.Password} type="text" placeHolder="Password" userInfo={userInputHandler} />
        <AllButton type="submit">로그인</AllButton>
      </form>
    </div>
  );
};

export default UserLogin;
