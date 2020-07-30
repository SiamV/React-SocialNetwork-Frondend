import React from "react";
import {addPost, onWritePost} from "../../../redux/profilePageReducer";
import NewPostAdd from "./NewPostAdd";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newPostAdd: state.profilePage.newPostAdd
    }
}

const NewPostAddContainer = connect(mapStateToProps, {
    addPost,
    onWritePost
})(NewPostAdd);


export default NewPostAddContainer;

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addPost: (text) => {
//             dispatch(addMyPostActionCreator(text));
//         },
//         onWritePost: (text) => {
//             dispatch(updateNewPostActionCreator(text));
//         }
//     }
// }