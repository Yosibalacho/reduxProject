import {
  ADD_USER,
  GET_BY_ID,
  REMOVE_USER,
  UPDATE_USER,
} from "../types/users-types";

export default function usersReducer({ users }, action) {
    switch (action.type) {
        case GET_BY_ID:
            return [...users]
        case ADD_USER:
            return {users:[...users, action.payload]}
        case UPDATE_USER:
            let newArray = users.filter((userItem) => {
                userItem.Id == action.payload.Id
            })
            users[users.indexOf(newArray[0])] = action.payload
            return {users:[...users]}
        case REMOVE_USER:
            let newUsersArray = users.filter((userItem) => {
                userItem.Id !== action.payload
            })
            return {users:[...newUsersArray]}
        default:
            return {users}
    }

}