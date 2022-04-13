//Редьюсор, который создает action и общается с диспатчем
import {WeatherAPI} from "../API/api";

const CurrentWeather = "GetCurrentWeather"

let initialState = {
    data: {
        "coord": {
            "lon": 30.5167,
            "lat": 50.4333
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 5.53,
            "feels_like": 4.21,
            "temp_min": 4.25,
            "temp_max": 5.96,
            "pressure": 1002,
            "humidity": 90
        },
        "visibility": 10000,
        "wind": {
            "speed": 1.79,
            "deg": 32,
            "gust": 4.92
        },
        "clouds": {
            "all": 100
        },
        "dt": 1649852281,
        "sys": {
            "type": 2,
            "id": 2003742,
            "country": "UA",
            "sunrise": 1649819323,
            "sunset": 1649868473
        },
        "timezone": 10800,
        "id": 703448,
        "name": "Kyiv",
        "cod": 200
    }
}

//Выбор действия в зависимости от type action
function WeatherReducer(state = initialState, action) {
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
        WeatherAPI.CurrentWeatherData("\n" + "Tbilisi").then((response) =>{
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

export default WeatherReducer