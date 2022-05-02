import {createSelector} from "reselect";
import {AppStateType} from "../Redux/reduxStore";

export function getStateCurrentWeather(state: AppStateType) {
    return state.WeatherPage.weather
}

export function getStatePredictWeather(state: AppStateType) {
    return state.WeatherPage.predict
}

export function getStateCountriesList(state: AppStateType) {
    return state.WeatherPage.countries
}

export const getSuperCountriesSelector = createSelector(getStateCountriesList, (countries) => {
    if (countries) {
        return countries.map((c) => {
            return c.name
        })
    }
    else
        return []
})

export function getStateCitiesList(state: AppStateType) {
    return state.WeatherPage.cities

}
