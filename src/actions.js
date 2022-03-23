export const inc = () => ({type: "INC"})
export const dec = () => ({type: "DEC"})
export const rnd = (payload) => {
    return {
        type: "RND", 
        payload: Math.floor(Math.random() * 10)
    }
}
// action creator может НЕ быть чистой функцией
// когда возможно лучше чтобы action creators были чистыми функциями