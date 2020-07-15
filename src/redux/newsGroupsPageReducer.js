const ADD_POST_GROUP = 'ADD-POST-GROUP';
const UPDATE_NEW_POST_GROUP = 'UPDATE-NEW-POST-GROUP';

export  const addPostGroupCreator = () => {
    return {type: ADD_POST_GROUP}
}

export  const updateNewLetterCreator = (body) => {
    return {type: UPDATE_NEW_POST_GROUP, newLetter: body}
}

const newsGroupsPageReducer = (state, action) => {
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