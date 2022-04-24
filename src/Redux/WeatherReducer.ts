import {Dispatch} from "redux";
import {PlacesAPI, WeatherAPI} from "../API/api";
import {CountriesType, PredictType, WeatherType} from "../Types/Weather/WeatherTypes";

const SetCurrentWeather = "SetCurrentWeather"
const SetCountriesList = "SetCountriesList"
const SetCitiesList = "SetCitiesList"
const SetPredictWeather = "SetPredictWeather"


let initialState = {
    weather: null as WeatherType | null,
    predict: [] as ReadonlyArray<PredictType> | [],
    countries: [] as ReadonlyArray<CountriesType> | [],
    cities: [] as ReadonlyArray<string> | []
}
type initialStateType = typeof initialState

function WeatherReducer(state = initialState, action: ActionTypes): initialStateType {
    switch (action.type) {
        case SetCurrentWeather:
            return {
                ...state,
                weather: action.data,
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

type ActionTypes = getCurrentWeatherACType | getPredictWeatherACType | getCountriesACType | getCitiesACType

type getCurrentWeatherACType = {
    type: typeof SetCurrentWeather
    data: WeatherType
}
export const getCurrentWeatherAC = (data: WeatherType): getCurrentWeatherACType => {
    return {
        type: SetCurrentWeather,
        data: data
    }
}

type getPredictWeatherACType = {
    type: typeof SetPredictWeather
    data: Array<PredictType>
}
export const getPredictWeatherAC = (data: Array<PredictType>): getPredictWeatherACType => {
    return {
        type: SetPredictWeather,
        data: data
    }
}

type getCountriesACType = {
    type: typeof SetCountriesList
    data: Array<CountriesType>
}
export const getCountriesAC = (data: Array<CountriesType>): getCountriesACType => {
    return {
        type: SetCountriesList,
        data: data
    }
}

type getCitiesACType = {
    type: typeof SetCitiesList
    data: Array<string>
}
export const getCitiesAC = (data: Array<string>): getCitiesACType => {
    return {
        type: SetCitiesList,
        data: data
    }
}

export const getWeatherThunk = (city: string) => {
    let result: any = {}
    return async (dispatch: Dispatch<ActionTypes>): Promise<void> => {
        let response_current = await WeatherAPI.CurrentWeatherData(city)
        result = response_current
        dispatch(getCurrentWeatherAC(response_current))

        let response_predict = await WeatherAPI.WeatherDataSevenDays(result.coord.lat, result.coord.lon)
        dispatch(getPredictWeatherAC(response_predict))
    }
}
export const getCountriesThunk = () => {
    return async (dispatch: Dispatch<ActionTypes>): Promise<void> => {
        let response = await PlacesAPI.CountryList()
        dispatch(getCountriesAC(response))
    }
}
export const getCitiesThunk = (country: string) => {
    return async (dispatch: Dispatch<ActionTypes>): Promise<void> => {
        let response = await PlacesAPI.CitiesList(country)
        dispatch(getCitiesAC(response))
    }
}

export default WeatherReducer