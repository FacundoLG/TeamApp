import React from 'react'
import List from '../components/List'
import {connect } from 'react-redux'
const Home = ({toDos,inProgres}) => {
    console.log(toDos)
    return (
        <div>
            <div className="listContainer">
                <List data={toDos} status="Todo"/>
                <List data={inProgres}status="In progres"/>
                <List status="Finished"/>
            </div>
        </div>            
    )
}

const mapStateToProps = state =>{
    return{
        toDos: state.toDos,
        inProgres: state.inProgres
    }
}

export default connect( mapStateToProps, null )(Home)

