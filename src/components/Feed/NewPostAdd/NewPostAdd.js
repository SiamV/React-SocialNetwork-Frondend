import React from "react";
import classes from './NewPostAdd.module.css'

const NewPostAdd = (props) => {

    let addPost = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'ADD-MY-POST', postMessage: text});
    }

    let newPostElement = React.createRef();

    let onChangePost = () => {
        let text = newPostElement.current.value;
        props.dispatch({type: 'UPDATE-NEW-POST', newSymbol: text});
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