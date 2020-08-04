import React from "react";
import Account from "./Account";
import {connect} from "react-redux";
import {setMyData} from "../../redux/loginReducer";
import {authMe} from "../../api/api";

class AccountContainer extends React.Component {
    componentDidMount() {
        authMe()
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(data => {
                if (data.resultCode === 0){
                    this.props.setMyData(data.data.id, data.data.login, data.data.email);
                }
            })
    }

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
export default connect(mapStateToProps, {setMyData})(AccountContainer);