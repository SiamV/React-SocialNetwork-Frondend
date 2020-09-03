import React from "react";
import ReduxFormLogin from "./ReduxFormLogin";
import {connect} from "react-redux";
import {loginSiteThunkCreator} from "../../redux/loginReducer";
import {Redirect} from "react-router-dom";
import {getCaptchaUrlSelector, getIsLoginSelector} from "../../redux/loginSelectors";

const Login = (props) => {
    //если прошли логинизацию
    if (props.isLogin) {
        return (
            <Redirect to={'/profile'} />
        )
    }
    //get data from form's inputs
    const onSubmit = (formData) => {
        props.loginSiteThunkCreator(formData.email, formData.password,
            formData.rememberMe, formData.captcha);
    }

    return (
        <div>
            <h2>Login</h2>
            <ReduxFormLogin onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
        </div>
    )
}

const mapStateToProps = (state) => (
    {
        isLogin: getIsLoginSelector(state),
        captchaUrl: getCaptchaUrlSelector(state)
    }
)
export default connect(mapStateToProps, {loginSiteThunkCreator})(Login);