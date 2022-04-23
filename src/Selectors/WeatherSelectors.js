import {createSelector} from "reselect";

export function getStateCurrentWeather(state) {
    return state.WeatherPage.data
}
export function getStatePredictWeather(state) {
    return state.WeatherPage.predict
}

export function getStateCountriesList(state) {
    return state.WeatherPage.countries
}

//Принимает на вход обычных селектор.
export const getSuperSelector = createSelector(getStateCountriesList, (countries) => {
    if (countries) {
        let countriesList = countries.data.map((c) => {
            return c.name
        })
        return countriesList
    }
})

export function getStateCitiesList(state) {
    return state.WeatherPage.cities

}
