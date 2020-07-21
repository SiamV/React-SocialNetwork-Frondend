import React from "react";
import {addMyPostActionCreator, updateNewPostActionCreator} from "../../../redux/profilePageReducer";
import NewPostAdd from "./NewPostAdd";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        newPostAdd: state.profilePage.newPostAdd
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (text) => {
            dispatch(addMyPostActionCreator(text));
        },
        onWritePost: (text) => {
            dispatch(updateNewPostActionCreator(text));
        }
    }
}

const NewPostAddContainer = connect (mapStateToProps,mapDispatchToProps) (NewPostAdd);


export default NewPostAddContainer;