import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToProps = (state) => (
    {
        isLogin: state.login.isLogin
    })


export const withLoginRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            if (!this.props.isLogin) return <Redirect to={'/login'} />
            return <Component {...this.props} />
        }
    }

    let LoginRedirectWithConnect = connect(mapStateToProps, {})(RedirectComponent)
    return LoginRedirectWithConnect;
}