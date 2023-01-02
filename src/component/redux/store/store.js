
import { createStore, applyMiddleware } from "redux"
import rootreducer from '../rootreducers/index'
import thunk from "redux-thunk"
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
    key: 'root',
    storage,

}
const persistReducers = persistReducer(persistConfig, rootreducer)
const store = createStore(persistReducers, applyMiddleware(thunk));
// localStorage.clear()
export const persistor = persistStore(store)
export default store