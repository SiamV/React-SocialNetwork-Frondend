import React from "react";
import classes from './Messages.module.css'

const  Messages = () => {
    return (
        <div className={classes.dialog}>
            <div className={classes.userItems}>
                <div className={classes.user + ' ' + classes.active}>Andrey</div>
                <div className={classes.user}>Sveta</div>
                <div className={classes.user}>Egor</div>
                <div className={classes.user}>Natasha</div>
                <div className={classes.user}>Nikolay</div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi. My name is Andrey</div>
                <div className={classes.message}>Hi, Andrey. How are you?</div>
                <div className={classes.message}>That fine. I work in Moscow</div>
                <div className={classes.message}>Ok. What is your profession?</div>
            </div>
        </div>
    );
}

export default Messages;