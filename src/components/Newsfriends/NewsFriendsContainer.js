import NewsFriends from "./NewsFriends";
import {connect} from "react-redux";
import {withLoginRedirect} from "../HOC/withLoginRedirect";

const mapStateToProps = (state) => {
    return(
        {
            isLogin: state.login.isLogin
        }
    )
}

const LoginForm = withLoginRedirect(NewsFriends);
const NewsFriendsContainer = connect (mapStateToProps,{}) (LoginForm)
export default NewsFriendsContainer;