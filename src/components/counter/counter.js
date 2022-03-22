import React from 'react'
import { connect } from 'react-redux'

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
// функция получает текущий state из redux store
// её задача вернуть те значения props которые получит в результате counter
const mapStateToProps = state => {
    return {
        counter: state
    }
}
// компонент высшего порядка
// который передает значения из стор в компонент
export default connect(mapStateToProps)(Counter)
// функция connect создает внутри себя новый компонент который
// оборачивает компонент counter
// внутри этого компонента используя context api 
// мы получаем доступ ко всему store
// для того чтобы каким то образом получить значение из стор
// и передать их в counter мы используем ф-цию mapStateToProps