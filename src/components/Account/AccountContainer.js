import React from "react";
import Account from "./Account";
import {connect} from "react-redux";
import {loginThunkCreator, logoutSiteThunkCreator} from "../../redux/loginReducer";

class AccountContainer extends React.Component {

    //loginThunkCreator вызовем при логинезации в loginSiteThunkCreator. Получается это сейчас лишним.
    // componentDidMount() {
    //     this.props.loginThunkCreator();
    // }

    render() {
        return (
            <Account {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isLogin: state.login.isLogin,
        login: state.login.login
    }
}
export default connect(mapStateToProps, {loginThunkCreator, logoutSiteThunkCreator})(AccountContainer);