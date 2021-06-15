export const toProgres = (payload) => ({
    type: "TO_PROGRES",
    payload
})

export const toToDo = payload => ({
    type: "TO_TODO",
    payload
})
export const isComplete = payload => ({
    type: "IS_COMPLETE",
    payload
})