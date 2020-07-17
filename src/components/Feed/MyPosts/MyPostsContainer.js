import React from "react";
import MyPosts from "./MyPosts";
import StoreContext from "../../../contextAPI/StoreContext";


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                return <div>
                    <MyPosts myPostsData={store.getState().profilePage.myPostsData} />
                </div>
            }}
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;