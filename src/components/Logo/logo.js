import React from "react";
import classes from "./logo.module.css";

const Logo = () => (
    <div className={classes.sky}>
        <div className={classes.circle} />
        <div className={classes.cloud1} />
        <div className={classes.cloud2} />
        <div className={classes.cloud3} />
        <div className={classes.cloud4} />
    </div>
)

export default Logo;