import React from "react";
import classes from './NewPostAdd.module.css'
import {addMyPostActionCreator, updateNewPostActionCreator} from "../../../redux/profilePageReducer";

const NewPostAdd = (props) => {

    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch(addMyPostActionCreator(text));
    }

    let newPostElement = React.createRef();

    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostActionCreator(text));
    }

    return (
        <div className={classes.newPost}>
            <h3>My new post:</h3>
            <textarea value={props.newPostAdd} onChange={onChangePost} ref={newPostElement}
                      placeholder={'new post...'} />
            <div>
                <button onClick={addPost}>Add</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default NewPostAdd;