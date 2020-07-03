import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css"

const MyPosts = (props) => {

    let postsElements = props.myPostsData.map(p => (
        <Post description={p.post} like={p.like} />
    ))

    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text);
    }

    let newPostElement = React.createRef();

    return (
        <div className={classes.MyPosts}>
            <h3>New my post:</h3>
            <textarea ref={newPostElement}>Text</textarea>
            <div>
                <button onClick={addPost}>Add</button>
                <button>Delete</button>
            </div>
            <div className={classes.divPosts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;