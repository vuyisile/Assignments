import UPDATE_LIFE from "../redux/actions/update-life"

export default function lifeCountReducer(state =  100, action) {
    switch (action.type) {
        case UPDATE_USER: 
        return action.life
    }
    return state;
}