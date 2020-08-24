import React from "react";
import usersReducer, {setUsers, follow, unfollow} from "./usersReducer";

it('test setUsers', () => {
    //test data
    let action = setUsers([
        {id: 1, followed: false, fullName: 'Elena Maslova', location: {city: 'Moscow', country: 'Russia'}},
        {id: 2, followed: false, fullName: 'Denis Krasnov', location: {city: 'Ramenskoe', country: 'Russia'}}
    ])
    let state = {
        users: [],
        countUsersPage: 9,
        totalCountUsers: 0,
        currentPage: 2,
        isLoading: false,
        isButtonDisabling: false
    }

    //action
    let newState = usersReducer(state, action);

    //expectation
    expect(newState.users.length).toBe(2);
})

it('test follow', () => {
    //test data
    let action = follow(1)
    let state = {
        users: [
            {id: 1, followed: false, fullName: 'Elena Maslova', location: {city: 'Moscow', country: 'Russia'}},
            {id: 2, followed: false, fullName: 'Denis Krasnov', location: {city: 'Ramenskoe', country: 'Russia'}}
        ],
        countUsersPage: 9,
        totalCountUsers: 0,
        currentPage: 2,
        isLoading: false,
        isButtonDisabling: false
    }

    //action
    let newState = usersReducer(state, action);

    //expectation
    expect(newState.users[0].followed).toBe(true);
})

it('test unfollow', () => {
    //test data
    let action = unfollow(1)
    let state = {
        users: [
            {id: 1, followed: true, fullName: 'Elena Maslova', location: {city: 'Moscow', country: 'Russia'}},
            {id: 2, followed: true, fullName: 'Denis Krasnov', location: {city: 'Ramenskoe', country: 'Russia'}}
        ],
        countUsersPage: 9,
        totalCountUsers: 0,
        currentPage: 2,
        isLoading: false,
        isButtonDisabling: false
    }

    //action
    let newState = usersReducer(state, action);

    //expectation
    expect(newState.users[0].followed).toBe(false);
})