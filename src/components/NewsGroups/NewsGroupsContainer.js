import React from "react";
import {addPostGroupCreator, updateNewLetterCreator} from "../../redux/newsGroupsPageReducer";
import NewsGroups from "./NewsGroups";
import StoreContext from "../../contextAPI/StoreContext";

const NewsGroupsContainer = () => {
    return (
        <StoreContext>
            {(store) => {
                let onClickAddPostGroup = () => {
                    store.dispatch(addPostGroupCreator());
                }

                let onChangeTextAreaPosts = (body) => {
                    store.dispatch(updateNewLetterCreator(body));
                }
                return <div>
                    <NewsGroups addPost={onClickAddPostGroup}
                                updateNewPost={onChangeTextAreaPosts}
                                postsGroups={store.getState().newsGroupsPage.postsGroups}
                                messageData={store.getState().newsGroupsPage.newPostGroup}
                    />
                </div>
            }}
        </StoreContext>
    )
}
export default NewsGroupsContainer;