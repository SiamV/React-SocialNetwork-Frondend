let initialState = {
    myFriendsData: [
        {id: 1, name: "Fedor", link: "/fedor"},
        {id: 2, name: "Nastya", link: "/nastya"},
        {id: 3, name: "Nikolay", link: "/nikolay"},
        {id: 4, name: "Max", link: "/max"},
        {id: 5, name: "Viktor", link: "/viktor"},
        {id: 6, name: "Anna", link: "/anna"}
    ]
}

const friendsPageReducer = (state = initialState,action) => {

    return state;
}

export default friendsPageReducer;