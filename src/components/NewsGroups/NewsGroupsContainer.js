import React from "react";
import {addPostGroupCreator, updateNewLetterCreator} from "../../redux/newsGroupsPageReducer";
import NewsGroups from "./NewsGroups";

const NewsGroupsContainer = (props) => {

    let onClickAddPostGroup = () => {
        props.store.dispatch(addPostGroupCreator());
    }

    let onChangeTextAreaPosts = (body) => {
        props.store.dispatch(updateNewLetterCreator(body));
    }

    return (
        <div >
        <NewsGroups addPost={onClickAddPostGroup}
                    updateNewPost={onChangeTextAreaPosts}
                    postsGroups = {props.store.getState().newsGroupsPage.postsGroups}
                    messageData = {props.store.getState().newsGroupsPage.newPostGroup}
        />
        </div>
    )
}
export default NewsGroupsContainer;