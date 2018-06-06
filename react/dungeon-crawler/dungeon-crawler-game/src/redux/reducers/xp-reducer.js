import UPDATE_XP from "../redux/actions/update-xp-actions"

export default function xpReducer(state = 0, action) {
    switch (action.type) {
        case UPDATE_XP: 
        return action.xp
    }
    return state;
}