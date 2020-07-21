import {connect} from "react-redux";
import Friends from "./Friends";

let mapStateToProps = (state) => {
    return {
        myFriendsData: state.friendsPage.myFriendsData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const FriendContainer = connect(mapStateToProps, mapDispatchToProps) (Friends)

export default FriendContainer;