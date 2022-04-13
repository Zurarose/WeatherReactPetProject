import axios from "axios";

const api = "63f034ce98024f7890b92883ebc0497e"

const WeatherData = axios.create({
    baseURL: "https://api.openweathermap.org/data/2.5/weather",
})

export const WeatherAPI = {
    CurrentWeatherData(city) {
        return WeatherData.get('?q=' + city + '&units=metric'+ '&appid=' + api)
            .then((response) => {
                console.log(response)
                return response.data
            })
    },
}