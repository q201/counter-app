export const increment=() => {
           return{type: 'increment',payload: null}
}

export const decrement=() => {
    return{type: 'decrement',payload: null}
}

export const incrementby=(val) => {
    return{type: 'incrementby',payload: val}
}