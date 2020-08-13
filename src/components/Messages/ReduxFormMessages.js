import React from "react";
import {Field, reduxForm} from "redux-form";
import classes from "./Messages.module.css";

const FormMessage =(props) => {
    return (
        <form className={classes.messages} onSubmit={props.handleSubmit}>
            <Field name={'textarea'} component={'textarea'} placeholder={'write your message'}
                   cols={"30"} rows={"5"}
            />
            <div><button>Send message</button></div>
        </form>
    )
}

const ReduxFormMessages = reduxForm ({form:'formMessage'}) (FormMessage)
export default ReduxFormMessages;