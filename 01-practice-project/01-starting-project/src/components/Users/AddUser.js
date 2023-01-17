import React from "react";

import Card from "../UI/Card";
import AddUserButton from "./AddUserButton";
import classes from "./AddUser.module.css";


const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <AddUserButton>Add User</AddUserButton>
      </form>
    </Card>
  );
};

export default AddUser;
