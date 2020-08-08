import NewsFriends from "./NewsFriends";
import {connect} from "react-redux";
import {withLoginRedirect} from "../HOC/withLoginRedirect";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return(
        {
            isLogin: state.login.isLogin
        }
    )
}

const NewsFriendsContainer = compose(
    connect (mapStateToProps,{}),
    withLoginRedirect
) (NewsFriends);

// const LoginForm = withLoginRedirect(NewsFriends);
// const NewsFriendsContainer = connect (mapStateToProps,{}) (LoginForm)
export default NewsFriendsContainer;