export const UPDATE_XP = "updateXP"

export default function updateUser(newXP) {
    return {
        type: UPDATE_XP,
        value:{ xp: newXP }
    }
}