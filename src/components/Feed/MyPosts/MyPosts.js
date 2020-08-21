import React from "react";
import Post from "./Post/Post";
import classes from "./MyPosts.module.css"

class MyPosts extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps !== this.props || nextState !== this.state
    }
    render() {
        console.log('render')

        let postsElements = this.props.myPostsData.map(p => (
            <Post description={p.post} like={p.like} key={p.id} />
        ))

        return (
            <div className={classes.MyPosts}>
                {postsElements}
            </div>
        )
    }
}

export default MyPosts;