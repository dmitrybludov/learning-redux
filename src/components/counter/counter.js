import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
// import action creators
import * as actions from '../../actions'

const Counter = ({ counter, inc, dec, rnd }) => {
    return (
        <div id="root" className="jumbotron">
            <h2>{counter}</h2>
            <button
                onClick={dec}
                className="btn btn-primary btn-lg">DEC</button>
            <button 
                onClick={inc}
                className="btn btn-primary btn-lg">INC</button>
            <button 
                onClick={rnd}
                className="btn btn-primary btn-lg">RND</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        counter: state
    }
}

const mapDispatchToProps = dispatch => {
    // берем все action creators которые мы импортировали
    // action creators связываются с функцией dispatch
    // результирующие свойства присваиваются объекту
    return bindActionCreators(actions, dispatch);
}
// если в connect вторым аргументом передать объект actions
// то мы получим тот же результат
export default connect(mapStateToProps, mapDispatchToProps)(Counter)