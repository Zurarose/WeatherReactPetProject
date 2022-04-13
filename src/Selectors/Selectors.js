import {createSelector} from "reselect";

export function getStateCurrentWeather(state){
    return state.WeatherPage.data
}
/*
Принимает на вход обычных селектор.
export const getSuperSelector = createSelector(getStateCurrentWeather,(weather)=>{
return weather.filter
})
*/
