import React from "react";
import classes from './NewPostAdd.module.css'
import ReduxFormAddPost from "./ReduxFormAddPost";

const NewPostAdd = (props) => {

    const onSubmit = (formData) => {
        props.addPost(formData.textarea)
    }

    return (
        <div className={classes.newPost}>
            <h3>My new post:</h3>
            <ReduxFormAddPost onSubmit={onSubmit} />
        </div>
    )
}

export default NewPostAdd;

//Without ReduxForm
// let onClickAddPost = () => {
//     let text = newPostElement.current.value;
//     props.addPost(text);
// }
//
// let newPostElement = React.createRef();
//
// let onChangePost = () => {
//     let text = newPostElement.current.value;
//     props.onWritePost(text);
// }
// return (
//     <div className={classes.newPost}>
//         <h3>My new post:</h3>
//         <textarea value={props.newPostAdd} onChange={onChangePost} ref={newPostElement}
//                   placeholder={'new post...'} />
//         <div>
//             <button onClick={onClickAddPost}>Add</button>
//             <button>Delete</button>
//         </div>
//     </div>
// )