import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import SideMenuReducer from "./SideMenuReducer";
import { reducer as formReducer } from 'redux-form'


//сбор всех редьюсоров воедино и создание общего редьюсора
let reducers = combineReducers({
    Side: SideMenuReducer,
    form: formReducer
})

//создание стора из редьюсоров и данных внутри них
let store = createStore(reducers, applyMiddleware(thunk));

export default store