import React from 'react'
import { connect } from 'react-redux'
import { toProgres } from '../redux/actions'
const Card = (props) => {
    var {name,type,location,todoId} = props
    const toInprogres = () =>{
        props.toProgres({
            id:todoId
        })
    }
    return (
        <div className="cardContainer">
            <div className="title">
                <div>{name}</div>
                <button className="icon">+</button>
            </div>
            <div className="card">
                <div className="workData">
                    <div>
                        <h4>{type}</h4>
                        <h5>{location}</h5>
                        <h6>{todoId}</h6>                                                  
                    </div>
                    <div className="workersData">
                        "Foto" "Foto"
                    </div>
                </div>
                <div>
                    {true?
                    <button className="icon" onClick={toInprogres}>></button>
                    :""}
                </div>   
            </div>
        </div>
    )
}

const mapDispathToProps = ({
    toProgres,
})
export default connect(null,mapDispathToProps)(Card)
