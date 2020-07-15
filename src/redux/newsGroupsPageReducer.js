const ADD_POST_GROUP = 'ADD-POST-GROUP';
const UPDATE_NEW_POST_GROUP = 'UPDATE-NEW-POST-GROUP';

export  const addPostGroupCreator = () => {
    return {type: ADD_POST_GROUP}
}

export  const updateNewLetterCreator = (body) => {
    return {type: UPDATE_NEW_POST_GROUP, newLetter: body}
}

let initialState = {
    postsGroups: [
        {id: 1, post: 'This is new post in my group'},
        {id: 2, post: 'This is second post from my friend'}
    ],
    newPostGroup: ''
}

const newsGroupsPageReducer = (state = initialState, action) => {
    if (action.type === ADD_POST_GROUP) {
        let body = state.newPostGroup;
        let newPostGroup = {id: 3, post: body};
        state.postsGroups.push(newPostGroup);
        state.newPostGroup = '';
    } else if (action.type === UPDATE_NEW_POST_GROUP) {
        state.newPostGroup = action.newLetter;
    }
    return state;
}

export default newsGroupsPageReducer;