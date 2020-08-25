const ADD_POST_GROUP = 'newsGroupsPageReducer/ADD-POST-GROUP';
const UPDATE_NEW_POST_GROUP = 'newsGroupsPageReducer/UPDATE-NEW-POST-GROUP';

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
    //make the copy. Option 1.
    let stateCopy = {...state,
        postsGroups: [...state.postsGroups]
    }

    switch (action.type) {
        case ADD_POST_GROUP: {
            let newPostGroup = {
                id: 3,
                post: state.newPostGroup
            };
            //use copy
            stateCopy.postsGroups.push(newPostGroup);
            stateCopy.newPostGroup = '';
            return stateCopy;
        }
        case UPDATE_NEW_POST_GROUP: {
            stateCopy.newPostGroup = action.newLetter;
            return stateCopy;
        }
        default:
            return state;
    }
}

export default newsGroupsPageReducer;