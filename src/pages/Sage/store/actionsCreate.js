import { SETLIST, SETPRE } from "./constants"

export const setList = (data) => {
    return {
        type: SETLIST,
        list: data
    }
}

export const setPre = (name) => {
    return {
        type: SETPRE,
        name
    }
}