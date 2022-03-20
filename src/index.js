import { createStore } from "redux"

const initialState = 0

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1
        default:
            return state
    }
}
// Store координирует работу с данными
// чтобы созать store нужно иметь ф-цию Reducer
const store = createStore(reducer)
// метод subscribe позволяет получать нотификации об изменениях store
store.subscribe(() => {
    // вывод в консоль происходит после каждого вызова метода dispatch
    console.log(store.getState());
})
// метод dispatch обрабатывает actions
store.dispatch({type: 'INC'})
store.dispatch({type: 'INC'})