import UPDATE_USER from "../actions/user-actions"

export default function usersReducer(state = [], action) {
    switch (action.type) {
        case UPDATE_USER: 
        return action.users
    }
    return state;
}