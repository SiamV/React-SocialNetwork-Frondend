const ADD_MY_POST = 'ADD-MY-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

export const addMyPostActionCreator = (text) => {
    return {type: ADD_MY_POST, postMessage: text}
}

export const updateNewPostActionCreator = (text) => {
    return {type: UPDATE_NEW_POST, newSymbol: text}
}

const profilePageReducer = (state, action) => {
    if (action.type === ADD_MY_POST) {
        let newPost = {
            id: 4,
            post: action.postMessage,
            like: 0
        }
        state.myPostsData.push(newPost);
        state.newPostAdd = '';
    } else if (action.type === UPDATE_NEW_POST) {
        state.newPostAdd = action.newSymbol;
    }

    return state;
}

export default profilePageReducer;