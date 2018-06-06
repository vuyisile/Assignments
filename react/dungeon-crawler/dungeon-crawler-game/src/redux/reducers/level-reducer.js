import UPDATE_LEVEL from "../redux/actions/update-level"

export default function levelReducer(state = 1, action) {
    switch (action.type) {
        case UPDATE_LEVEL: 
        return action.level
    }
    return state;
}