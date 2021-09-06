import React from "react";
import logoUrl from "../../assets/logo/logo.png"
import classes from "./Logo.module.css";
const Logo = (props) => (
    <div className={classes.Logo}>
        <img src={logoUrl} alt={"hel"}/>
    </div>
)

export default Logo;