import React from "react";
import classes from "./Login.module.css"
import {Field, reduxForm} from "redux-form";

const FormLogin = (props) => {
    return (
        <form className={classes.loginForm} onSubmit={props.handleSubmit}>
            <div><Field name={'login'} component={'input'} placeholder={'login'} /></div>
            <div><Field name={'password'} component={'input'} placeholder={'password'} /></div>
            <div><Field name={'rememberMe'} component={'input'} type={'checkbox'} /> remember me</div>
            <div><button>Login</button></div>
        </form>
    )
}

const ReduxFormLogin = reduxForm({form: 'login'})(FormLogin)

export default ReduxFormLogin;