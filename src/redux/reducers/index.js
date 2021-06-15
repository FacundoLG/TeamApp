const reducers = (state, action) => {
    switch (action.type) {
        case 'TO_PROGRES':
            return{
                ...state,
                inProgres: [...state.inProgres, state.toDos.find((todo) => todo.id === action.payload.id)].map((todo) =>{
                    todo.status = "inProgres"
                    return todo
                }),
                toDos: state.toDos.filter((todo) => todo.id !== action.payload.id),
            }
        default:
            return state
    }
}

export default reducers