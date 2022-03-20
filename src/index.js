// Первоначальный state
const initialState = 0
// функция принимает state и действие которое нужно над ним выполнить
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INC':
            return state + 1
        // если получим незнакомое нам дейтвие - возвращаем state
        default:
            return state
    }
}

let state = reducer(initialState, {type: "INC"})
console.log(state);