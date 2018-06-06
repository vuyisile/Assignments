export const UPDATE_LIFE = "updateLife"

export default function updateUser(newLife) {
    return {
        type: UPDATE_LIFE,
        value:{ life:newLife }
    }
}