import React from "react";
import {Field, reduxForm} from "redux-form";
import classes from "./Messages.module.css";
import {maxLengthCreator, requiredField} from "../common/validators/validators";
import {Textarea} from "../common/FormsSpecialControl/FormsSpecialControl";

const maxLength100 = maxLengthCreator(100);

const FormMessage = (props) => {
    return (
        <form className={classes.messages} onSubmit={props.handleSubmit}>
            <Field name={'textarea'} component={Textarea} placeholder={'write your message'}
                   cols={"30"} rows={"5"}
                   validate={[requiredField, maxLength100]}
            />
            <div>
                <button>Send message</button>
            </div>
        </form>
    )
}

const ReduxFormMessages = reduxForm({form: 'formMessage'})(FormMessage)
export default ReduxFormMessages;