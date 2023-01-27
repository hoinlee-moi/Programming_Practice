import { useState } from "react";

const UserLoginInput = ({ type, placeHolder, userInfo }) => {
  const [inputValue, setInputValue] = useState("");

  const inputValueHandler = (e) => {
    setInputValue(e.target.value);
    userInfo(inputValue, e.target.placeholder);
  };

  return <input value={inputValue} type={type} placeholder={placeHolder} onChange={inputValueHandler} />;
};

export default UserLoginInput;
