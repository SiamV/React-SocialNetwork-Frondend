import NewsFriends from "./NewsFriends";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return(
        {
            isLogin: state.login.isLogin
        }
    )
}

const NewsFriendsContainer = connect (mapStateToProps,{}) (NewsFriends)
export default NewsFriendsContainer;