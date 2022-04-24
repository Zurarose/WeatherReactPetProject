import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import WeatherReducer from "./WeatherReducer";
import { reducer as formReducer } from 'redux-form'
import ToDoListReducer from "./ToDoListReducer";

let rootReducers = combineReducers({
    WeatherPage: WeatherReducer,
    ToDoListPage: ToDoListReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducers>

let store = createStore(rootReducers, applyMiddleware(thunk));

export default store