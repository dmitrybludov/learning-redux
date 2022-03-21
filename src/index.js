import { createStore } from "redux"

const initialState = 0

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1
        case 'DEC':
            return state - 1
        default:
            return state
    }
}

const store = createStore(reducer);
// создание события и обработка action методом dispatch
document
    .getElementById('inc')
    .addEventListener('click', () => {
        store.dispatch({type: 'INC'})
})
// создание события и обработка action методом dispatch
document
    .getElementById('dec')
    .addEventListener('click', () => {
        store.dispatch({type: 'DEC'})
})
// перерисовка компонента
const update = () => {
    document
        .getElementById('counter')
        .innerHTML = store.getState()
}
// подписка на изменение store
store.subscribe(update)