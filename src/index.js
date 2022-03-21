import { createStore } from "redux"

const initialState = 0

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        // исп.доп.параметры из action
        case 'RND':
            return state + action.payload
        default:
            return state
    }
}

const store = createStore(reducer);
// Action Creator - функция которая создает объекты action
const inc = () => ({type: "INC"})
const dec = () => ({type: "DEC"})
const rnd = (payload) => ({type: "RND", payload})

document
    .getElementById('inc')
    .addEventListener('click', () => {
        // использование action creator
        store.dispatch( inc() )
})

document
    .getElementById('dec')
    .addEventListener('click', () => {
        store.dispatch( dec() )
})

document
    .getElementById('rnd')
    .addEventListener('click', () => {
        const payload = Math.floor(Math.random() * 10)
        store.dispatch( rnd(payload) )
})

const update = () => {
    document
        .getElementById('counter')
        .innerHTML = store.getState()
}

store.subscribe(update)