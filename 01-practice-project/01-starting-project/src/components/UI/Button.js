import React from "react";

import classes from "./Button.module.css"

const Butoon = (props) => {
    
    return <button type={props.type || 'button'} className={classes.button}>{props.children}</button>
};

export default Butoon;
