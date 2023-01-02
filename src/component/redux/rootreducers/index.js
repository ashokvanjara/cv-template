import { registor_reducer } from "../reducers/registorreducers";
import { combineReducers } from "redux";
const  rootreducer = combineReducers({
    registor:registor_reducer,
})
export default rootreducer