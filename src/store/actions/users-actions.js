import { ADD_USER } from "../types/users-types"

export const addUser = (newUser) => {
    return { type: ADD_USER, payload: newUser }
}