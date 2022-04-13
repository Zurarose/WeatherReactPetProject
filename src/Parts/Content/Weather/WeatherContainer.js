import Weather from "./Weather";
import {connect} from "react-redux";
import {getWeatherThunk} from "../../../Redux/WeatherReducer";
import {getStateCurrentWeather} from "../../../Selectors/Selectors";


function WeatherContainer(props){
    return (<Weather {...props}/>)
}


function mapStateToProps(state){
    return {
        CurrentWeather: getStateCurrentWeather(state)
    }
}

export default connect(mapStateToProps,{getWeatherThunk})(WeatherContainer)