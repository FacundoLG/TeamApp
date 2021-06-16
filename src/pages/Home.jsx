import React from 'react'
import List from '../components/List'
import CardCreator from '../components/CardCreator'
import {connect } from 'react-redux'
const Home = ({toDos,inProgres}) => {
    console.log(toDos)
    return (
        <div className="listComponent">
            
            <div className="listContainer">
                <CardCreator/>
                <List data={toDos} status="Todo"/>
                <List data={inProgres}status="In progres"/>
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

