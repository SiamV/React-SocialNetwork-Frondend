import React from "react";
import  classes from '../cssModules/Feed.module.css'

const  Feed = () => {
    return (
        <div className={classes.myFeed}>
            <img src={require('../drawable/aveoAzul.jpg')} alt={'avatar'}/>
            <p>My Account</p>
        </div>
    );
}

export default Feed;