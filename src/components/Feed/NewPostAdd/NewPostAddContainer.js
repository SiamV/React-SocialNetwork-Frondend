import React from "react";
import {addMyPostActionCreator, updateNewPostActionCreator} from "../../../redux/profilePageReducer";
import NewPostAdd from "./NewPostAdd";

const NewPostAddContainer = (props) => {

    let addPost = (text) => {
        props.store.dispatch(addMyPostActionCreator(text));
    }

    let onChangePost = (text) => {
        props.store.dispatch(updateNewPostActionCreator(text));
    }
    return (
        <div>
            <NewPostAdd addPost={addPost}
                        onWritePost={onChangePost}
                        newPostAdd={props.store.getState().profilePage.newPostAdd}
            />
        </div>
    )

}

export default NewPostAddContainer;