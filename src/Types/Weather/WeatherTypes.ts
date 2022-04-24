export type CountriesType = {
    name: string
    iso2: string
    long: number
    lat: number
}
export type PredictType = {
    [weather: string] : any
    temp: {
        day: number
        min: number
        max: number
    }
    wind_speed: number
}

export type WeatherType = {
    weather: string
    coord: {
        lon: number
        lat: number
    }
    main: {
        temp: number
        feels_like: number
        temp_min: number
        temp_max: number
    }
    wind: number
    place: {
        country: string
        city: string
    }
}
