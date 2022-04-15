import Weather from "./Weather";
import {connect} from "react-redux";
import {getCitiesThunk, getCountriesThunk, getWeatherThunk} from "../../../Redux/WeatherReducer";
import {
    getStateCitiesList,
    getStateCountriesList,
    getStateCurrentWeather, getStatePredictWeather,
    getSuperSelector
} from "../../../Selectors/Selectors";


function WeatherContainer(props){
    return (<Weather {...props}/>)
}


function mapStateToProps(state){
    return {
        CountriesList: getSuperSelector(state),
        CitiesList: getStateCitiesList(state),
        CurrentWeather: getStateCurrentWeather(state),
        PredictWeather: getStatePredictWeather(state)
    }
}

export default connect(mapStateToProps,{getWeatherThunk, getCitiesThunk, getCountriesThunk})(WeatherContainer)