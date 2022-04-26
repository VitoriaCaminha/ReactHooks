import numberReduce from "./number"
import userReduce from "./user"

export default function allReducers(state, action) {
let newState = numberReduce(state, action)
return userReduce(newState, action)
}
