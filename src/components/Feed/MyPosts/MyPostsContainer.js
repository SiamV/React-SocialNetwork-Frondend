import React from "react";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    return (
        <div>
            <MyPosts myPostsData={props.store.getState().profilePage.myPostsData}/>
        </div>
    )
}

export default MyPostsContainer;