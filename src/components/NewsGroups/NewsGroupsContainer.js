import {addPostGroupCreator, updateNewLetterCreator} from "../../redux/newsGroupsPageReducer";
import NewsGroups from "./NewsGroups";
import {connect} from "react-redux";
import {withLoginRedirect} from "../HOC/withLoginRedirect";
import NewsFriends from "../Newsfriends/NewsFriends";

const mapStateToProps = (state) => {
    return {
        postsGroups: state.newsGroupsPage.postsGroups,
        messageData: state.newsGroupsPage.newPostGroup,
        isLogin: state.login.isLogin
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostGroupCreator());
        },
        updateNewPost: (body) => {
            dispatch(updateNewLetterCreator(body));
        }
    }
}

const LoginForm = withLoginRedirect(NewsGroups);
const NewsGroupsContainer = connect(mapStateToProps, mapDispatchToProps) (LoginForm);
export default NewsGroupsContainer;
