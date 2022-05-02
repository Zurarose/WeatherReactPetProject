import axios from "axios";
import {PredictType} from "../Types/Weather/WeatherTypes";

const api = "63f034ce98024f7890b92883ebc0497e"

const WeatherData = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
})
const CountriesCities = axios.create({
    baseURL: 'https://countriesnow.space/api/v0.1/countries/',
})

export const WeatherAPI = {
    CurrentWeatherData(city: string) {
        return WeatherData.get('weather?q=' + city + '&units=metric' + '&appid=' + api)
            .then((response) => {
                return {
                    weather: response.data.weather[0].main,
                    coord: {lon: response.data.coord.lon, lat: response.data.coord.lat},
                    main: {
                        temp: response.data.main.temp, feels_like: response.data.main.feels_like,
                        temp_min: response.data.main.temp_min, temp_max: response.data.main.temp_max
                    },
                    wind: response.data.wind.speed,
                    place: {country: response.data.sys.country, city: response.data.name}
                }
            })
    },
    WeatherDataSevenDays(lat: number, lon: number) {
        return WeatherData("onecall?lat=" + lat + "&lon=" + lon +
            "&exclude=hourly,minutely,current&units=metric&appid=" + api)
            .then((response) => {
                return response.data.daily.map(((daily: PredictType) => {
                    return {
                        weather: daily.weather[0].main,
                        temp: {
                            day: daily.temp.day,
                            min: daily.temp.min,
                            max: daily.temp.max
                        },
                        wind_speed: daily.wind_speed
                    }
                }))
            })
    }
}
export const PlacesAPI = {
    CountryList() {
        return CountriesCities.get("positions")
            .then((response) => {
                return response.data.data
            })
    },
    CitiesList(country: string) {
        return CountriesCities.post("cities", {"country": country}).then((response) => {
            return response.data.data
        })
    }
}
