import React from "react";
import {addPostGroupCreator, updateNewLetterCreator} from "../../redux/newsGroupsPageReducer";
import NewsGroups from "./NewsGroups";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        postsGroups: state.newsGroupsPage.postsGroups,
        messageData: state.newsGroupsPage.newPostGroup
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

//component?
const NewsGroupsContainer = connect(mapStateToProps, mapDispatchToProps) (NewsGroups);

export default NewsGroupsContainer;



// const NewsGroupsContainer = () => {
//     return (
//         <StoreContext>
//             {(store) => {
//                 let onClickAddPostGroup = () => {
//                     store.dispatch(addPostGroupCreator());
//                 }
//
//                 let onChangeTextAreaPosts = (body) => {
//                     store.dispatch(updateNewLetterCreator(body));
//                 }
//                 return <div>
//                     <NewsGroups addPost={onClickAddPostGroup}
//                                 updateNewPost={onChangeTextAreaPosts}
//                                 postsGroups={store.getState().newsGroupsPage.postsGroups}
//                                 messageData={store.getState().newsGroupsPage.newPostGroup}
//                     />
//                 </div>
//             }}
//         </StoreContext>
//     )
// }
// export default NewsGroupsContainer;