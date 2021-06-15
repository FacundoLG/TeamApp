import React from 'react'
import { connect } from 'react-redux'
import { toProgres,toToDo, isComplete } from '../redux/actions'
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import CheckIcon from '@material-ui/icons/Check';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
const Card = (props) => {
    var {name,type,location,todoId,status} = props
    const toInprogres = () =>{
        props.toProgres({
            id:todoId
        })
    }
    const toTodo = () =>{
        props.toToDo({
            id:todoId
        })
    }
    const isCompleted = () =>{
        props.isComplete({
            id:todoId
        })
    }
    var image = 'https://img.freepik.com/foto-gratis/hombre-joven-barbudo-seguro-si-mismo-apariencia-agradable-vestido-camisa-azul-mira-directamente-aislado-sobre-pared-blanca-freelancer-guapo-piensa-trabajo-interiores_273609-16089.jpg?size=626&ext=jpg'
    return (
        <div className="cardContainer">
            <div className="title">
                <div>{name}</div>
                <button className="icon"><AddCircleOutlineIcon/></button>
            </div>
            <div className="card">
                <div className="workData">
                    <div>
                        <h4>{type}</h4>
                        <h5>{location}</h5>
                        <h6>{todoId}</h6>                                                  
                    </div>
                    <div className="workersData">
                        <div className="workerImage" style={{backgroundImage:` url(${image}) `}} alt="" />
                        <div className="workerImage" style={{backgroundImage:` url(${image}) `}} alt="" />
                        <div className="workerImage" style={{backgroundImage:` url(${image}) `}} alt="" />
                    </div>
                </div>
                <div>
                    {status === "ToDo"?
                    <button className="icon" onClick={toInprogres}><ChevronRightIcon/></button>
                    :
                    <div>
                        <button className="icon" onClick={toTodo}> <ChevronLeftIcon/> </button>
                        <button className="icon" onClick={isCompleted}> <CheckIcon/></button>
                    </div>
                    }
                </div>   
            </div>
        </div>
    )
}

const mapDispathToProps = ({
    toProgres,
    toToDo,
    isComplete
})
export default connect(null,mapDispathToProps)(Card)
