//Редьюсор, который создает action и общается с диспатчем
import {WeatherAPI} from "../API/api";

const CurrentWeather = "GetCurrentWeather"

let initialState = {
    data: null,
}

//Выбор действия в зависимости от type action
function SideMenuReducer(state = initialState, action) {
    switch (action.type){
        case CurrentWeather: return {
            ...state,
            data: action.data
        }

    }
    return state
}

export const getWeatherThunk = () => {
    return (dispatch) =>
    {
        WeatherAPI.CurrentWeatherData("kyiv").then((response) =>{
            dispatch(getCurrentWeather(response))
        })
    }
}

export function getCurrentWeather(data) {
    return {
        type: CurrentWeather,
        data: data
    }
}

export default SideMenuReducer