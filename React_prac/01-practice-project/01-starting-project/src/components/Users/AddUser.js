import { useState } from "react";

import User from "./User";
import Card from "../UI/Card";
import Butoon from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0){
      return;
    } 
    if(+enteredAge < 1){
      return
    }
    setEnteredAge('')
    setEnteredUsername('')
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler} />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler} />
        <Butoon type="submit">Add User</Butoon>
      </form>
    </Card>
  );
};

export default AddUser;
