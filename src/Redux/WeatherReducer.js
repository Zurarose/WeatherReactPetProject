//Редьюсор, который создает action и общается с диспатчем
import {PlacesAPI, WeatherAPI} from "../API/api";

const SetCurrentWeather = "SetCurrentWeather"
const SetCountriesList = "SetCountriesList"
const SetCitiesList = "SetCitiesList"
const SetPredictWeather = "SetPredictWeather"

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
    },
    predict: null,
    countries: null,
    cities: [],
}

//Выбор действия в зависимости от type action
function WeatherReducer(state = initialState, action) {
    switch (action.type) {
        case SetCurrentWeather:
            return {
                ...state,
                data: action.data
            }
        case SetCountriesList:
            return {
                ...state,
                countries: action.data
            }
        case SetCitiesList:
            return {
                ...state,
                cities: action.data
            }
        case SetPredictWeather:
            return {
                ...state,
                predict: action.data
            }
        default:
            return state

    }
}

export const getWeatherThunk = (city) => {
    let result = {}
    return async (dispatch) => {
        await WeatherAPI.CurrentWeatherData(city).then((response) => {
            result = response
            dispatch(getCurrentWeather(response))
        })
        WeatherAPI.WeatherDataSevenDays(result.coord.lat, result.coord.lon).then((response) => {
            dispatch(getPredictWeather(response))
        })
    }
}
export const getCountriesThunk = () => {
    return (dispatch) =>{
         PlacesAPI.CountryList().then((response) => {
            dispatch(getCountries(response))
        })

    }
}
export const getCitiesThunk = (country) => {
    return (dispatch) => {
        PlacesAPI.CitiesList(country).then((response) => {
            dispatch(getCities(response))
        })
    }
}

export function getCurrentWeather(data) {
    return {
        type: SetCurrentWeather,
        data: data
    }
}
export function getPredictWeather(data) {
    return {
        type: SetPredictWeather,
        data: data
    }
}

export function getCountries(data) {
    return {
        type: SetCountriesList,
        data: data
    }
}

export function getCities(data) {
    return {
        type: SetCitiesList,
        data: data
    }
}

export default WeatherReducer