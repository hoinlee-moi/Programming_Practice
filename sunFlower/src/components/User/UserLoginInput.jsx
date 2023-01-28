const UserLoginInput = ({ value, type, placeHolder, userInfo }) => {
  const inputValueHandler = (e) => {
    userInfo(e.target.value, e.target.placeholder);
  };

  return <input value={value} type={type} placeholder={placeHolder} onChange={inputValueHandler} />;
};

export default UserLoginInput;
