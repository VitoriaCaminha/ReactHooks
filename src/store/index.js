import reduce from "./reducers/index"

const initialState = {
    cart: [],
    products: [],
    user: null,
    number: 0
}

export {
    reduce,
    initialState
}