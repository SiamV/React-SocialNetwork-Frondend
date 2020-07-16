import React from "react";
import classes from './NewPostAdd.module.css'

const NewPostAdd = (props) => {

    let onClickAddPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        debugger;
    }

    let newPostElement = React.createRef();

    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.onWritePost(text);
    }

    return (
        <div className={classes.newPost}>
            <h3>My new post:</h3>
            <textarea value={props.newPostAdd} onChange={onChangePost} ref={newPostElement}
                      placeholder={'new post...'} />
            <div>
                <button onClick={onClickAddPost}>Add</button>
                <button>Delete</button>
            </div>
        </div>
    )
}

export default NewPostAdd;