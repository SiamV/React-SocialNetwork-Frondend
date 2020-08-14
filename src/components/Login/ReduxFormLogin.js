import React from "react";
import classes from "./Login.module.css"
import {Field, reduxForm} from "redux-form";
import {Input} from "../common/FormsSpecialControl/FormsSpecialControl";
import {maxLengthCreator, requiredField} from "../common/validators/validators";

const maxLength20 = maxLengthCreator(20);

const FormLogin = (props) => {
    return (
        <form className={classes.loginForm} onSubmit={props.handleSubmit}>
            <div><Field name={'login'} component={Input} placeholder={'login'}
                        validate={[requiredField, maxLength20]} /></div>
            <div><Field name={'password'} component={Input} placeholder={'password'}
                        validate={[requiredField, maxLength20]} /></div>
            <div><Field name={'rememberMe'} component={Input} type={'checkbox'} /> remember me</div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxFormLogin = reduxForm({form: 'login'})(FormLogin)

export default ReduxFormLogin;