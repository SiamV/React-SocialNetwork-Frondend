import {addPostGroupCreator, updateNewLetterCreator} from "../../redux/newsGroupsPageReducer";
import NewsGroups from "./NewsGroups";
import {connect} from "react-redux";

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

const NewsGroupsContainer = connect(mapStateToProps, mapDispatchToProps) (NewsGroups);

export default NewsGroupsContainer;
