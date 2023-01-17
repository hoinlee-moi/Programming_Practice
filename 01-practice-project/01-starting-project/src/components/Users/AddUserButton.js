import React from "react";

import classes from "./AddUserButton.module.css"

const AddUserButton = (props) => {
    return <button type="submit" className={classes.button}>{props.children}</button>
};

export default AddUserButton;
