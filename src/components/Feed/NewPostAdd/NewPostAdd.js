import React from "react";
import classes from './NewPostAdd.module.css'
import {addMyPost} from "../../../redux/state";

const NewPostAdd = (props) => {

    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }

    let newPostElement = React.createRef();

    return(
        <div className={classes.newPost}>
            <h3>My new post:</h3>
            <textarea ref={newPostElement} placeholder={'new post...'}></textarea>
            <div>
                <button onClick={addPost}>Add</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default NewPostAdd;