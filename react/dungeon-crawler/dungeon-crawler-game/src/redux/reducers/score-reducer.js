import UPDATE_SCORE from "../redux/actions/update-score"

export default function scoreReducer(state = 0, action) {
    switch (action.type) {
        case UPDATE_SCORE: 
        return action.score
    }
    return state;
}