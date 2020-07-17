import React from "react";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        myPostsData: state.profilePage.myPostsData
    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

const MyPostsContainer = connect (mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;

// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 return <div>
//                     <MyPosts myPostsData={store.getState().profilePage.myPostsData} />
//                 </div>
//             }}
//         </StoreContext.Consumer>
//     )
// }
//
// export default MyPostsContainer;