export const UPDATE_LEVEL = "update level"

export default function updateLevel(currentLevel) {
    return {
        type: UPDATE_LEVEL,
        value:{ level: currentLevel }
    }
}