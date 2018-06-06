export const UPDATE_SCORE = "users:updateUser"

export default function updateUser(newUser) {
    return {
        type: UPDATE_SCORE,
        value:{ users: newUser }
    }
}