import React from 'react'
import Card from './Card'
import '../themes/whiteTheme.css'
const List = ( {data,status} ) => {
    
    return (
        <div className="list">
            <div>
                {status}
            </div>
            { data? data.map((todo)=>
                <Card  todoId={todo.id}name={todo.Name} type={todo.Tipo} location={todo.Ubicacion}/>
            ):""}
        </div>
    )
}

export default List
