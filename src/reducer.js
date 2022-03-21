const reducer = (state = 0, action) => {
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

export default reducer