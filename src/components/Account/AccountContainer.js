import React from "react";
import Account from "./Account";
import {connect} from "react-redux";
import * as axios from "axios";
import {setMyData} from "../../redux/loginReducer";

class AccountContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0){
                    this.props.setMyData(response.data.data.id, response.data.data.login, response.data.data.email);
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