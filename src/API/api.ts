import axios from "axios";

const api = "63f034ce98024f7890b92883ebc0497e"

const WeatherData = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather",
})
const WeatherDataPredict = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/",
})
const CountriesCities = axios.create({
    baseURL: 'https://countriesnow.space/api/v0.1/countries/',
    headers: {},
})

export const WeatherAPI = {
    CurrentWeatherData(city) {
        return WeatherData.get('?q=' + city + '&units=metric' + '&appid=' + api)
            .then((response) => {
                return response.data
            })
    },
    WeatherDataSevenDays(lat, lon) {
        return WeatherDataPredict.get("onecall?lat=" + lat + "&lon=" + lon +
            "&exclude=hourly,minutely,current&units=metric&appid=" + api)
            .then((response) => {
                return response.data
            })
    }
}
export const PlacesAPI = {
    CountryList() {
        return CountriesCities.get("positions")
            .then((response) => {
                return response.data
            })

    },
    CitiesList(country) {
        return CountriesCities.post("cities", {"country": country}).then((response) => {
            return response.data.data
        })

    }
}