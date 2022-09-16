import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { authReducer } from "./reducers/authReducers"



const localData = localStorage.getItem("localLogin")
    ? JSON.parse(localStorage.getItem("localLogin"))
    : null

const rootReducer = combineReducers({
    auth: authReducer
})

const store = createStore(
    rootReducer,
    {
        auth: {
            login: localData
        }
    },
    composeWithDevTools(applyMiddleware(thunk))
)


export default store;