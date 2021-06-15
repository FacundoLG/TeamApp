import React from 'react'
import Card from './Card'
import '../themes/whiteTheme.css'
const List = ( {data,status} ) => {
    
    return (
        <div className="list">
            <h3>
                {status}
            </h3>
           <div className="listData">
           { data? data.map((todo)=>
                <Card  todoId={todo.id}name={todo.Name} type={todo.Tipo} location={todo.Ubicacion} status={todo.status}/>
            ):""}
           </div>
        </div>
    )
}

export default List
