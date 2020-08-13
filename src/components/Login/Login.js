import React from "react";
import ReduxFormLogin from "./ReduxFormLogin";

const Login = (props) => {
    //get data from form's inputs
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return (
        <div>
            <h2>Login</h2>
            <ReduxFormLogin onSubmit={onSubmit} />
        </div>
    )
}

export default Login;