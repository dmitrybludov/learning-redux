import { createStore } from "redux"

const initialState = 0

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        // исп.доп.параметрый из action
        case 'RND':
            return state + action.payload
        default:
            return state
    }
}

const store = createStore(reducer);

document
    .getElementById('inc')
    .addEventListener('click', () => {
        store.dispatch({type: 'INC'})
})

document
    .getElementById('dec')
    .addEventListener('click', () => {
        store.dispatch({type: 'DEC'})
})
// Так как reducer должен быть чистой функцией
// вычисления производим в обработчике событьй
// Кроме типа, любой action модет содержать доп.информацию (payload)
document
    .getElementById('rnd')
    .addEventListener('click', () => {
        const payload = Math.floor(Math.random() * 10)
        store.dispatch({type: 'RND', payload})
})

const update = () => {
    document
        .getElementById('counter')
        .innerHTML = store.getState()
}

store.subscribe(update)