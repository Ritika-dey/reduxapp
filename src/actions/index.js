export const incNum = (n) => {
    return{
        type: "INCREMENT",
        payload: n
    }
}

export const decNum = () => {
    return{
        type: "DECREMENT"
    }
}