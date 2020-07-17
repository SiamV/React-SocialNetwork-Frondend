import React from "react";
import {addMyPostActionCreator, updateNewPostActionCreator} from "../../../redux/profilePageReducer";
import NewPostAdd from "./NewPostAdd";
import StoreContext from "../../../contextAPI/StoreContext";

const NewPostAddContainer = () => {


    return (
        <StoreContext.Consumer>
            {(store) => {

                let addPost = (text) => {
                    store.dispatch(addMyPostActionCreator(text));
                }

                let onChangePost = (text) => {
                    store.dispatch(updateNewPostActionCreator(text));
                }
                return <div>
                    <NewPostAdd addPost={addPost}
                                onWritePost={onChangePost}
                                newPostAdd={store.getState().profilePage.newPostAdd}
                        // newPostAdd={props.store.getState().profilePage.newPostAdd}
                    />
                </div>
            }
            }
        </StoreContext.Consumer>
    )

}

export default NewPostAddContainer;