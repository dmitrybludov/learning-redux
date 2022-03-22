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
// второй аргумент для функции connect
// функция аналогична mapStateToProps только работает с dispatch
const mapDispatchToProps = dispatch => {
    const {inc, dec, rnd} = bindActionCreators(actions, dispatch);
    return {
        inc,
        dec,
        rnd: () => {
            const randomValue = Math.floor(Math.random() * 10);
            rnd(randomValue)
        }
    }
}
// Созданные функции будут переданы в компонент.
// Таким способом компонент может обновить состояние в стор
export default connect(mapStateToProps, mapDispatchToProps)(Counter)