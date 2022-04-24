import Weather from "./Weather";
import {connect} from "react-redux";
import {getCitiesThunk, getCountriesThunk, getWeatherThunk} from "../../../Redux/WeatherReducer";
import {
    getStateCitiesList, getStateCurrentWeather, getStatePredictWeather, getSuperSelector
} from "../../../Selectors/WeatherSelectors";
import {AppStateType} from "../../../Redux/reduxStore";
import {PredictType, WeatherType} from "../../../Types/Weather/WeatherTypes";
import React from "react";

interface MapStateToPropsType {
    CountriesList: ReadonlyArray<string> | []
    CitiesList: ReadonlyArray<string> | []
    CurrentWeather: WeatherType | null
    PredictWeather: ReadonlyArray<PredictType> | []
}

interface MapDispatchToPropsType {
    getWeatherThunk: (city: string) => void
    getCountriesThunk: () => void
    getCitiesThunk: (country: string) => void
}

interface OwnPropsType {}

type PropsType = MapStateToPropsType & MapDispatchToPropsType & OwnPropsType

const WeatherContainer = (props : PropsType) => {
    return (<Weather {...props}/>)
}

function mapStateToProps(state: AppStateType): MapStateToPropsType {
    return {
        CountriesList: getSuperSelector(state),
        CitiesList: getStateCitiesList(state),
        CurrentWeather: getStateCurrentWeather(state),
        PredictWeather: getStatePredictWeather(state)
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, OwnPropsType, AppStateType>
(mapStateToProps, {getWeatherThunk, getCitiesThunk, getCountriesThunk})(WeatherContainer)