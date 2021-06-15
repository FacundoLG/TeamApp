const reducers = (state, action) => {
    switch (action.type) {
        case 'TO_PROGRES':
            return{
                ...state,
                inProgres: [...state.inProgres, state.toDos.find((todo) => todo.id === action.payload.id)].map((todo) =>{
                    todo.status = "InProgres"
                    return todo
                }),
                toDos: state.toDos.filter((todo) => todo.id !== action.payload.id),
            }

        case 'TO_TODO':
            return{
                ...state,
                toDos: [...state.toDos,state.inProgres.find((todo) => todo.id === action.payload.id )].map((todo) => {
                    todo.status = "ToDo"
                    return todo
                }),
                inProgres: state.inProgres.filter((todo) => todo.id !== action.payload.id)
            }
        case 'IS_COMPLETE':
            return{
                ...state,
                isCompleted: [...state.isCompleted,state.inProgres.find((todo) => todo.id === action.payload.id)],
                inProgres: state.inProgres.filter(todo => todo.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default reducers